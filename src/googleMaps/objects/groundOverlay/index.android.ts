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
import * as Common from "../../common";
import * as Converters from "../../converters/converters.android";

export class GroundOverlay extends GroundOverlayBase {
    public nativeMapObject: com.google.android.gms.maps.model.GroundOverlay;

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
                            latitude: (this.position as Common.Coordinate).latitude,
                            longitude: (this.position as Common.Coordinate).longitude
                        }),
                        this.dimensions);
                } else {
                    nativeOptions.position(
                        Converters.coordinateToNativeLatLng({
                            latitude: (this.position as Common.Coordinate).latitude,
                            longitude: (this.position as Common.Coordinate).longitude
                        }),
                        this.dimensions.width,
                        this.dimensions.height);
                }
            }
    
            this.nativeMapObject = googleMap.addGroundOverlay(nativeOptions);
        }}).catch((reason) => {
            console.error("Google Map Ground Overlay: Failed to load image", reason);
        });
    }

    public disposeNativeView() {
        this.parent.mapPromise.then(() => {
            this.nativeMapObject.remove();
        });
    }
    
    [bearingProperty.setNative](value: number) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setBearing(value);
        }
    }

	[boundsProperty.setNative](value: Common.CoordinateBounds) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setPositionFromBounds(
                Converters.coordinateBoundsToNativeLatLngBounds(value));
        }
    }
    
    [dimensionsProperty.setNative](value: Size | number) {
        if (this.nativeMapObject == null) {
            return;
        }

        if (typeof value === "number") {
            this.nativeMapObject.setDimensions(value);
        } else {
            this.nativeMapObject.setDimensions(value.width, value.height);
        }
    }

	[imageProperty.setNative](value: any) {
        if (this.nativeMapObject == null) {
            return null;
        }
        
        const image = this._getImage(value);
        image.then((imageSource) => {
            const nativeImage = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(imageSource.android);
            this.nativeMapObject.setImage(nativeImage);
        }).catch((reason) => {
            console.error("GMapGroundOverlay: Failed to load image:", reason);
        });
	}

    [isVisibleProperty.setNative](value: boolean) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setVisible(value);
        }
    }
    
    [isTappableProperty.setNative](value: boolean) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setClickable(value);
        }
    }
    
	[opacityProperty.setNative](value: number) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setTransparency(value);
        }
    }
    
	[positionProperty.setNative](value: Common.Coordinate) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setPosition(
                Converters.coordinateToNativeLatLng(value));
        }
	}

	[zIndexProperty.setNative](value: number) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setZIndex(value);
        }
	}
}