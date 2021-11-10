import {
    bearingProperty,
    boundsProperty,
    dimensionsProperty,
    GroundOverlayBase,
    imageProperty,
    isTappableProperty,
    isVisibleProperty,
    opacityProperty,
    positionProperty,
    zIndexProperty
} from "./index.common";
import { Size } from "@nativescript/core";
import { Coordinate, CoordinateBounds } from "../../models";
import * as Converters from "../../converters/converters.android";

export class GroundOverlay extends GroundOverlayBase {
    public nativeObject: com.google.android.gms.maps.model.GroundOverlay;

    public createNativeView() {
        if (this.image == null) {
            throw new Error("GMapGroundOverlay: The image property must be set");
        }

        if (this.bounds == null && (this.position == null || this.dimensions == null)) {
            throw new Error("GMapGroundOverlay: The bounds or position with dimensions property must be set");
        }
        
        return super.createNativeView();
    }

    public initNativeObject(googleMap: com.google.android.gms.maps.GoogleMap) {
        const image = this._getImage(this.image);
        image.then((imageSource) => {{
            const nativeOptions = new com.google.android.gms.maps.model.GroundOverlayOptions();
            const nativeImage = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(imageSource.android);

            nativeOptions.image(nativeImage);
            nativeOptions.bearing(this.bearing);
            nativeOptions.clickable(this.isTappable);
            nativeOptions.visible(this.isVisible);
            nativeOptions.transparency(1 - this.opacity);

            if (this.bounds != null) {
                nativeOptions.positionFromBounds(
                    Converters.coordinateBoundsToNativeLatLngBounds(this.bounds));
            } else {
                if (typeof this.dimensions === "number") {
                    nativeOptions.position(
                        Converters.coordinateToNativeLatLng({
                            latitude: (this.position as Coordinate).latitude,
                            longitude: (this.position as Coordinate).longitude
                        }),
                        this.dimensions);
                } else {
                    nativeOptions.position(
                        Converters.coordinateToNativeLatLng({
                            latitude: (this.position as Coordinate).latitude,
                            longitude: (this.position as Coordinate).longitude
                        }),
                        this.dimensions.width,
                        this.dimensions.height);
                }
            }
    
            this.nativeObject = googleMap.addGroundOverlay(nativeOptions);
        }}).catch((reason) => {
            console.error("Google Map Ground Overlay: Failed to load image", reason);
        });
    }

    public disposeNativeView() {
        this.parent.mapPromise.then(() => {
            this.nativeObject.remove();
        });
    }
    
    [bearingProperty.setNative](value: number) {
        if (this.nativeObject != null) {
            this.nativeObject.setBearing(value);
        }
    }

    [boundsProperty.setNative](value: CoordinateBounds) {
        if (this.nativeObject != null) {
            this.nativeObject.setPositionFromBounds(
                Converters.coordinateBoundsToNativeLatLngBounds(value));
        }
    }
    
    [dimensionsProperty.setNative](value: Size | number) {
        if (this.nativeObject == null) {
            return;
        }

        if (typeof value === "number") {
            this.nativeObject.setDimensions(value);
        } else {
            this.nativeObject.setDimensions(value.width, value.height);
        }
    }

    [imageProperty.setNative](value: any) {
        if (this.nativeObject == null) {
            return null;
        }
        
        const image = this._getImage(value);
        image.then((imageSource) => {
            const nativeImage = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(imageSource.android);
            this.nativeObject.setImage(nativeImage);
        }).catch((reason) => {
            console.error("GMapGroundOverlay: Failed to load image:", reason);
        });
    }

    [isVisibleProperty.setNative](value: boolean) {
        if (this.nativeObject != null) {
            this.nativeObject.setVisible(value);
        }
    }
    
    [isTappableProperty.setNative](value: boolean) {
        if (this.nativeObject != null) {
            this.nativeObject.setClickable(value);
        }
    }
    
    [opacityProperty.setNative](value: number) {
        if (this.nativeObject != null) {
            this.nativeObject.setTransparency(value);
        }
    }
    
    [positionProperty.setNative](value: Coordinate) {
        if (this.nativeObject != null) {
            this.nativeObject.setPosition(
                Converters.coordinateToNativeLatLng(value));
        }
    }

    [zIndexProperty.setNative](value: number) {
        if (this.nativeObject != null) {
            this.nativeObject.setZIndex(value);
        }
    }
}