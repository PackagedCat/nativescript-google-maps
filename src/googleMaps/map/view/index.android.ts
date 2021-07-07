import { Application } from "@nativescript/core";
import {
    GoogleMapBase,
    cameraPositionProperty,
    mapTypeProperty,
    MapType,
    maxZoomLevelProperty,
    minZoomLevelProperty,
    uiSettingsProperty,
    UiSettings,
    isBuildingsEnabledProperty,
    isIndoorEnabledProperty,
    isMyLocationEnabledProperty,
    isTrafficEnabledProperty,
    contentDescriptionProperty,
    mapStyleProperty,
    MapObjectEventData
} from "./index.common";
import * as Converters from "../../converters/converters.android";
import * as Common from "../../common";
import { Projection } from "../projection";

export * from "./index.common";

export class GoogleMap extends GoogleMapBase {
    private _frameLayoutId: number;
    private _googleMap: com.google.android.gms.maps.GoogleMap;

    public createNativeView() {
        this._frameLayoutId = android.view.View.generateViewId();
        const frameLayout = new android.widget.FrameLayout(this._context);
        frameLayout.setId(this._frameLayoutId);

        const mapReadyCallback = new com.google.android.gms.maps.OnMapReadyCallback({
            onMapReady: this.onMapReady.bind(this)
        });

        const mapFragment = com.google.android.gms.maps.MapFragment.newInstance(this.createGoogleMapOptions());
        mapFragment.getMapAsync(mapReadyCallback);

        Application.android.foregroundActivity.getFragmentManager()
            .beginTransaction()
            .replace(this._frameLayoutId, mapFragment)
            .commit();

        return frameLayout;
    }

    private onMapReady(googleMap: com.google.android.gms.maps.GoogleMap) {
        this._googleMap = googleMap;
        googleMap.setOnCameraMoveListener(new com.google.android.gms.maps.GoogleMap.OnCameraMoveListener({
            onCameraMove: (() => {
                cameraPositionProperty.nativeValueChange(this, Converters.nativeCameraPositionToCameraPosition(this._googleMap.getCameraPosition()));
                this.notify({
                    eventName: GoogleMap.cameraMoveEvent,
                    object: this
                });
            })
        }));

        this.setCallback(googleMap);

        this.mapPromiseResolve(googleMap);
        this.notify({
            eventName: GoogleMap.mapReadyEvent,
            object: this
        });
    }

    private createGoogleMapOptions() {
        const googleMapOptions = new com.google.android.gms.maps.GoogleMapOptions();

        if (this.isAmbientEnabled != null) {
            googleMapOptions.ambientEnabled(this.isAmbientEnabled);
        }
        
        if (this.cameraPosition != null) {
            googleMapOptions.camera(this.createNativeCameraPosition(this.cameraPosition));
        }

        googleMapOptions.compassEnabled(this.uiSettings.isCompassEnabled);
        googleMapOptions.maxZoomPreference(this.maxZoomLevel);
        googleMapOptions.minZoomPreference(this.minZoomLevel);
        googleMapOptions.rotateGesturesEnabled(this.uiSettings.isRotateGesturesEnabled);
        googleMapOptions.scrollGesturesEnabled(this.uiSettings.isScrollGesturesEnabled);
        googleMapOptions.tiltGesturesEnabled(this.uiSettings.isTiltGesturesEnabled);
        googleMapOptions.zoomControlsEnabled(this.uiSettings.isZoomControlsEnabled);
        googleMapOptions.zoomGesturesEnabled(this.uiSettings.isZoomGesturesEnabled);

        googleMapOptions.mapType(this.mapType);

        return googleMapOptions;
    }

    private createNativeCameraPosition(cameraPosition: Common.CameraPosition) {
        if (cameraPosition.position == null) {
            throw new Error("GoogleMap: The property \"position\" of \"cameraPosition\" property must not be null");
        }

        const coordinate = Converters.coordinateToNativeLatLng(cameraPosition.position);

        const cameraPositionBuilder = com.google.android.gms.maps.model.CameraPosition.builder();
        cameraPositionBuilder.target(coordinate);
        
        if (cameraPosition.bearing != null) {
            cameraPositionBuilder.bearing(cameraPosition.bearing);
        }

        if (cameraPosition.tilt != null) {
            cameraPositionBuilder.tilt(cameraPosition.tilt);
        }
        
        if (cameraPosition.zoom != null) {
            cameraPositionBuilder.zoom(cameraPosition.zoom);
        }

        return cameraPositionBuilder.build();
    }

    private setCallback(googleMap: com.google.android.gms.maps.GoogleMap) {
        const cameraMoveCallback = ((eventName: string) => {
            this.notify({
                eventName: eventName,
                object: this
            });
        }).bind(this);

        const mapCallback = ((eventName: string, nativeLatLng: com.google.android.gms.maps.model.LatLng) => {
            this.notify({
                eventName: eventName,
                object: this,
                coordinate: Converters.nativeLatLngToCoordinate(nativeLatLng)
            });
        }).bind(this);

        const mapObjectCallback = ((eventName, nativeMapObject) => {
            this.notify<MapObjectEventData<Common.MapObject>>({
                eventName: eventName,
                object: this,
                mapObject: this.getMapObjectByNative(nativeMapObject)
            });
        }).bind(this);

        googleMap.setOnCameraIdleListener(new com.google.android.gms.maps.GoogleMap.OnCameraIdleListener({
            onCameraIdle: () => cameraMoveCallback(GoogleMap.cameraMoveCanceledEvent)
        }));

        googleMap.setOnCameraMoveCanceledListener(new com.google.android.gms.maps.GoogleMap.OnCameraMoveCanceledListener({
            onCameraMoveCanceled: () => cameraMoveCallback(GoogleMap.cameraMoveCanceledEvent)
        }));

        googleMap.setOnCameraMoveStartedListener(new com.google.android.gms.maps.GoogleMap.OnCameraMoveStartedListener({
            onCameraMoveStarted: () => cameraMoveCallback(GoogleMap.cameraMoveStartEvent)
        }));

        googleMap.setOnCircleClickListener(
            new com.google.android.gms.maps.GoogleMap.OnCircleClickListener({
                onCircleClick: (nativeMapObject) => { mapObjectCallback(GoogleMap.circleTapEvent, nativeMapObject);}
            }));

        googleMap.setOnGroundOverlayClickListener(
            new com.google.android.gms.maps.GoogleMap.OnGroundOverlayClickListener({
                onGroundOverlayClick: (nativeMapObject) => { mapObjectCallback(GoogleMap.groundOverlayTapEvent, nativeMapObject);}
            }));

        // TODO: setOnIndoorStateChangeListener

        // TODO: setOnInfoWindowClickListener
        // TODO: setOnInfoWindowCloseListener
        // TODO: setOnInfoWindowLongClickListener

        googleMap.setOnMapClickListener(new com.google.android.gms.maps.GoogleMap.OnMapClickListener({
            onMapClick: (point) => { mapCallback(GoogleMap.mapTapEvent, point);}
        }));

        googleMap.setOnMapLoadedCallback(new com.google.android.gms.maps.GoogleMap.OnMapLoadedCallback({
            onMapLoaded: () => {
                this.notify({
                    eventName: GoogleMap.mapLoadedEvent,
                    object: this
                });
            }
        }));

        googleMap.setOnMapLongClickListener(new com.google.android.gms.maps.GoogleMap.OnMapLongClickListener({
            onMapLongClick: (point) => mapCallback(GoogleMap.mapLongTapEvent, point)
        }));

        googleMap.setOnMarkerClickListener(new com.google.android.gms.maps.GoogleMap.OnMarkerClickListener({
            onMarkerClick: (nativeMapObject) => {
                const marker = this.getMapObjectByNative(nativeMapObject) as any;
                this.notify({
                    eventName: GoogleMap.markerTapEvent,
                    object: this,
                    mapObject: marker
                });
                return marker.preventDefaultBehavior;
            }
        }));

        googleMap.setOnMarkerDragListener(new com.google.android.gms.maps.GoogleMap.OnMarkerDragListener({
            onMarkerDrag: (nativeMapObject) => mapObjectCallback(GoogleMap.markerDragStartEvent, nativeMapObject),
            onMarkerDragEnd: (nativeMapObject) => mapObjectCallback(GoogleMap.markerDragStartEvent, nativeMapObject),
            onMarkerDragStart: (nativeMapObject) => mapObjectCallback(GoogleMap.markerDragEndEvent, nativeMapObject)
        }));

        googleMap.setOnMyLocationButtonClickListener(new com.google.android.gms.maps.GoogleMap.OnMyLocationButtonClickListener({
            onMyLocationButtonClick: () => {
                this.notify({
                    eventName: GoogleMap.myLocationButtonTapEvent,
                    object: this
                });

                return true;
            }
        }));

        // TODO: setOnMyLocationButtonClickListener
        // TODO: setOnMyLocationChangeListener
        // TODO: setOnMyLocationClickListener

        googleMap.setOnPoiClickListener(new com.google.android.gms.maps.GoogleMap.OnPoiClickListener({
            onPoiClick: ((nativePoi) => {
                this.notify<MapObjectEventData<Common.PointOfInterest>>({
                    eventName: GoogleMap.poiTapEvent,
                    object: this,
                    mapObject: {
                        location: Converters.nativeLatLngToCoordinate(nativePoi.latLng),
                        name: nativePoi.name,
                        placeId: nativePoi.placeId
                    } as Common.PointOfInterest
                });
            }).bind(this)
        }));

        googleMap.setOnPolygonClickListener(new com.google.android.gms.maps.GoogleMap.OnPolygonClickListener({
            onPolygonClick: (nativeMapObject) => mapObjectCallback(GoogleMap.polygonTapEvent, nativeMapObject)
        }));

        googleMap.setOnPolylineClickListener(new com.google.android.gms.maps.GoogleMap.OnPolylineClickListener({
            onPolylineClick: (nativeMapObject) => mapObjectCallback(GoogleMap.polylineTapEvent, nativeMapObject)
        }));
    }

    private getMapObjectByNative(nativeMapObject: any) {
        const nativeMapObjectId = nativeMapObject.getId();

        for (let i = 0; i < this._mapObjects.length; i++) {
            const mapObject = this._mapObjects[i];
            if (mapObject.nativeMapObject != null && mapObject.nativeMapObject.getId() === nativeMapObjectId) {
                return mapObject;
            }
        }

        return null;
    }

    public clear() {
        if (this._googleMap != null) {
            this._googleMap.clear();
        }
    }

    public setMinMaxZoomLevel() {
        this._googleMap.resetMinMaxZoomPreference();

        if (this.maxZoomLevel != null) {
            this._googleMap.setMaxZoomPreference(this.maxZoomLevel);
        }

        if (this.minZoomLevel != null) {
            this._googleMap.setMinZoomPreference(this.minZoomLevel);
        }
    }

    public get projection() {
        if (this._googleMap == null) {
            return null;
        }

        return new Projection(this._googleMap.getProjection());
    }

	[cameraPositionProperty.setNative](value: Common.CameraPosition) {
        if (this._googleMap == null) {
            return;
        }

        const cameraPosition = this.createNativeCameraPosition(value);
        const camperaUpdate = com.google.android.gms.maps.CameraUpdateFactory.newCameraPosition(cameraPosition);

        if (this.isCameraAnimationEnabled) {
            this._googleMap.animateCamera(camperaUpdate);
        } else {
            this._googleMap.moveCamera(camperaUpdate);
        }
    }

	[contentDescriptionProperty.setNative](value: string) {
        this.mapPromise.then(() => {
            this._googleMap.setContentDescription(value);
        });
    }
    
	[isBuildingsEnabledProperty.setNative](value: boolean) {
        if (this._googleMap != null) {
            this._googleMap.setBuildingsEnabled(value);
        }
    }
    
	[isIndoorEnabledProperty.setNative](value: boolean) {
        if (this._googleMap != null) {
            this._googleMap.setIndoorEnabled(value);
        }
    }
    
	[isMyLocationEnabledProperty.setNative](value: boolean) {
        if (this._googleMap != null) {
            this._googleMap.setMyLocationEnabled(value);
        }
    }
    
	[isTrafficEnabledProperty.setNative](value: boolean) {
        if (this._googleMap != null) {
            this._googleMap.setTrafficEnabled(value);
        }
    }
    
	[mapTypeProperty.setNative](value: MapType) {
        if (this._googleMap != null) {
            this._googleMap.setMapType(value);
        }
    }
    
	[mapStyleProperty.setNative](value: string) {
        this.mapPromise.then(() => {
            this._googleMap.setMapStyle(new com.google.android.gms.maps.model.MapStyleOptions(value));
        });
    }
    
	[maxZoomLevelProperty.setNative](value: number) {
        if (this._googleMap != null) {
            this.setMinMaxZoomLevel();
        }
    }
    
	[minZoomLevelProperty.setNative](value: number) {
        if (this._googleMap != null) {
            this.setMinMaxZoomLevel();
        }
    }

	[uiSettingsProperty.setNative](value: UiSettings) {
        if (this._googleMap == null) {
            return;
        }
        
        const nativeUiSettings = this._googleMap.getUiSettings();

        if (value.isCompassEnabled != null) {
            nativeUiSettings.setCompassEnabled(value.isCompassEnabled);
        }

        if (value.isIndoorLevelPickerEnabled != null) {
            nativeUiSettings.setIndoorLevelPickerEnabled(value.isIndoorLevelPickerEnabled);
        }

        if (value.isMapToolbarEnabled != null) {
            nativeUiSettings.setMapToolbarEnabled(value.isMapToolbarEnabled);
        }

        if (value.isMyLocationButtonEnabled != null) {
            nativeUiSettings.setMyLocationButtonEnabled(value.isMyLocationButtonEnabled);
        }

        if (value.isRotateGesturesEnabled != null) {
            nativeUiSettings.setRotateGesturesEnabled(value.isRotateGesturesEnabled);
        }

        if (value.isScrollGesturesEnabled != null) {
            nativeUiSettings.setScrollGesturesEnabled(value.isScrollGesturesEnabled);
        }

        if (value.isTiltGesturesEnabled != null) {
            nativeUiSettings.setTiltGesturesEnabled(value.isTiltGesturesEnabled);
        }

        if (value.isZoomControlsEnabled != null) {
            nativeUiSettings.setZoomControlsEnabled(value.isZoomControlsEnabled);
        }

        if (value.isZoomGesturesEnabled != null) {
            nativeUiSettings.setZoomGesturesEnabled(value.isZoomGesturesEnabled);
        }
    }
}