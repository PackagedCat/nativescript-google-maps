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
    mapStyleProperty,
    CameraPosition
} from "./index.common";
import { PointOfInterest } from "../models";
import { Projection } from "../projection";

export * from "./index.common";


@NativeClass
class GoogleMapDelegateImpl extends NSObject implements GMSMapViewDelegate {
    public static ObjCProtocols = [GMSMapViewDelegate];
    private _owner: WeakRef<GoogleMap>;

    public static initWithOwner(owner: WeakRef<GoogleMap>): GoogleMapDelegateImpl {
        const handler = <GoogleMapDelegateImpl>GoogleMapDelegateImpl.new();
        handler._owner = owner;

        return handler;
    }
    
    private mapObjectCallback(eventName, nativeObject) {
        const googleMap = this._owner.get();
        if (googleMap == null) {
            return;
        }
        
        googleMap.notify({
            eventName: eventName,
            object: googleMap,
            mapObject: googleMap.getMapObjectByNative(nativeObject)
        });
    }
    
    didTapMyLocationButtonForMapView(): boolean {
        const googleMap = this._owner.get();
        if (googleMap == null) {
            return;
        }

        googleMap.notify({
            eventName: GoogleMap.myLocationButtonTapEvent,
            object: googleMap
        });

        return true;
    }

    mapViewDidBeginDraggingMarker(mapView: GMSMapView, marker: GMSMarker): void {
        this.mapObjectCallback(GoogleMap.markerDragStartEvent, marker);
    }

    mapViewDidChangeCameraPosition(mapView: GMSMapView, position: GMSCameraPosition): void {
        const googleMap = this._owner.get();
        if (googleMap == null) {
            return;
        }

        cameraPositionProperty.nativeValueChange(googleMap, position);
        googleMap.notify({
            eventName: GoogleMap.markerDragStartEvent,
            object: googleMap
        });
    }

    // TOOD: mapViewDidCloseInfoWindowOfMarker(mapView: GMSMapView, marker: GMSMarker): void;

    mapViewDidDragMarker(mapView: GMSMapView, marker: GMSMarker): void {
        this.mapObjectCallback(GoogleMap.markerDragEvent, marker);
    }

    mapViewDidEndDraggingMarker(mapView: GMSMapView, marker: GMSMarker): void {
        this.mapObjectCallback(GoogleMap.markerDragEndEvent, marker);
    }

    // TODO: mapViewDidFinishTileRendering(mapView: GMSMapView): void;

    mapViewDidLongPressAtCoordinate(mapView: GMSMapView, coordinate: CLLocationCoordinate2D): void {
        const googleMap = this._owner.get();
        if (googleMap == null) {
            return;
        }

        googleMap.notify({
            eventName: GoogleMap.mapLongTapEvent,
            object: googleMap,
            point: coordinate
        });
    }

    // TODO: mapViewDidLongPressInfoWindowOfMarker(mapView: GMSMapView, marker: GMSMarker): void;

    // TODO: mapViewDidStartTileRendering(mapView: GMSMapView): void;

    mapViewDidTapAtCoordinate(mapView: GMSMapView, coordinate: CLLocationCoordinate2D): void {
        const googleMap = this._owner.get();
        if (googleMap == null) {
            return;
        }

        googleMap.notify({
            eventName: GoogleMap.mapTapEvent,
            object: googleMap,
            point: coordinate
        });
    }

    // TODO: mapViewDidTapInfoWindowOfMarker?(mapView: GMSMapView, marker: GMSMarker): void;

    mapViewDidTapMarker(mapView: GMSMapView, marker: GMSMarker): boolean {
        this.mapObjectCallback(GoogleMap.markerTapEvent, marker);
        return true;
    }

    mapViewDidTapMyLocation(mapView: GMSMapView, location: CLLocationCoordinate2D): void {
        const googleMap = this._owner.get();
        if (googleMap == null) {
            return;
        }

        googleMap.notify({
            eventName: GoogleMap.myLocationTapEvent,
            object: googleMap,
            location: location
        });

    }

    // TODO: mapViewDidTapOverlay(mapView: GMSMapView, overlay: GMSOverlay): void;

    mapViewDidTapPOIWithPlaceIDNameLocation(mapView: GMSMapView, placeID: string, name: string, location: CLLocationCoordinate2D): void {
        const googleMap = this._owner.get();
        if (googleMap == null) {
            return;
        }

        googleMap.notify({
            eventName: GoogleMap.poiTapEvent,
            object: googleMap,
            poi: {
                location: location,
                name: name,
                placeId: placeID
            } as PointOfInterest
        });
    }

    mapViewIdleAtCameraPosition(mapView: GMSMapView, position: GMSCameraPosition): void {
        this.mapViewDidChangeCameraPosition(mapView, position);
    }

    // TODO: mapViewMarkerInfoContents(mapView: GMSMapView, marker: GMSMarker): UIView;

    // TODO: mapViewMarkerInfoWindow(mapView: GMSMapView, marker: GMSMarker): UIView;

    // TODO: mapViewSnapshotReady(mapView: GMSMapView): void;

    // TODO: mapViewWillMove(mapView: GMSMapView, gesture: boolean): void;
}

export class GoogleMap extends GoogleMapBase {
    public nativeView: GMSMapView;
    private _delegate: GoogleMapDelegateImpl;

    public createNativeView() {
        this._delegate = GoogleMapDelegateImpl.initWithOwner(new WeakRef(this));
        
        let nativeMap: GMSMapView = null;        
        nativeMap = GMSMapView.mapWithFrameCamera(
            this.parent.nativeView.frame,
            this.createNativeCameraPosition(this.cameraPosition));
        nativeMap.delegate = this._delegate;

        this.mapPromiseResolve(nativeMap);
        return nativeMap;
    }
    
    private createNativeCameraPosition(cameraPosition: CameraPosition) {
        return GMSCameraPosition.cameraWithLatitudeLongitudeZoomBearingViewingAngle(
            cameraPosition.position?.latitude ?? 0,
            cameraPosition.position?.longitude ?? 0,
            cameraPosition.zoom ?? 0,
            cameraPosition.bearing ?? 0,
            cameraPosition.tilt ?? 0
        );
    }

    public onLoaded() {
        super.onLoaded();
    }

    public disposeNativeView() {
        this.nativeView.delegate = null;
        this._delegate = null;
    }

    public getMapObjectByNative(nativeObject: any) {
        for (let i = 0; i < this._mapObjects.length; i++) {
            const mapObject = this._mapObjects[i];
            if (mapObject.nativeObject === nativeObject) {
                return mapObject;
            }
        }

        return null;
    }

    public static setIosApiKey(apiKey: string) {
        GMSServices.provideAPIKey(apiKey);
    }

    public clear() {
        this.nativeView.clear();
    }

    public get projection() {
        return new Projection(this.nativeView.projection);
    }

    [cameraPositionProperty.setNative](value: CameraPosition) {
        const cameraPosition = this.createNativeCameraPosition(value);

        if (this.isCameraAnimationEnabled) {
            this.nativeView.animateToCameraPosition(cameraPosition);
        } else {
            this.nativeView.moveCamera(GMSCameraUpdate.setCamera(cameraPosition));
        }
    }
    
    [mapStyleProperty.setNative](value: string) {
        this.nativeView.mapStyle = GMSMapStyle.styleWithJSONStringError(value);
    }
    
    [mapTypeProperty.setNative](value: MapType) {
        if (value === MapType.none) {
            this.nativeView.mapType = GMSMapViewType.kGMSTypeNone;
        } else {
            this.nativeView.mapType = value as number;
        }
    }
    
    [maxZoomLevelProperty.setNative](value: number) {
        this.nativeView.setMinZoomMaxZoom(this.minZoomLevel, value);
    }
    
    [minZoomLevelProperty.setNative](value: number) {
        this.nativeView.setMinZoomMaxZoom(value, this.maxZoomLevel);
    }

    [uiSettingsProperty.setNative](value: UiSettings) {
        const nativeUiSettings = this.nativeView.settings;

        if (value.isCompassEnabled != null) {
            nativeUiSettings.compassButton = value.isCompassEnabled;
        }

        if (value.isIndoorLevelPickerEnabled != null) {
            nativeUiSettings.indoorPicker = value.isIndoorLevelPickerEnabled;
        }

        if (value.isMyLocationButtonEnabled != null) {
            nativeUiSettings.myLocationButton = value.isMyLocationButtonEnabled;
        }

        if (value.isRotateGesturesEnabled != null) {
            nativeUiSettings.rotateGestures = value.isRotateGesturesEnabled;
        }

        if (value.isScrollGesturesEnabled != null) {
            nativeUiSettings.scrollGestures = value.isScrollGesturesEnabled;
        }

        if (value.isTiltGesturesEnabled != null) {
            nativeUiSettings.tiltGestures = value.isTiltGesturesEnabled;
        }

        if (value.isZoomGesturesEnabled != null) {
            nativeUiSettings.zoomGestures = value.isZoomGesturesEnabled;
        }
    }
    
    [isBuildingsEnabledProperty.setNative](value: boolean) {
        this.nativeView.buildingsEnabled = value;
    }
    
    [isIndoorEnabledProperty.setNative](value: boolean) {
        this.nativeView.indoorEnabled  = value;
    }
    
    [isMyLocationEnabledProperty.setNative](value: boolean) {
        this.nativeView.myLocationEnabled = value;
    }
    
    [isTrafficEnabledProperty.setNative](value: boolean) {
        this.nativeView.trafficEnabled = value;
    }
}