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

export class GroundOverlay extends GroundOverlayBase {
    public nativeMapObject: GMSGroundOverlay;

    public createNativeView() {
        if (this.image == null) {
            throw new Error("GMapGroundOverlay: The image property must be set");
        }

        if (this.position == null) {
            throw new Error("GMapGroundOverlay: The position property must be set");
        }
        
        return super.createNativeView();
    }

    public initNativeObject(googleMap: GMSMapView) {
        const image = this._getImage(this.image);
        image.then((imageSource) => {{
            if (this.bounds != null) {
                this.nativeMapObject = GMSGroundOverlay.groundOverlayWithBoundsIcon(
                    GMSCoordinateBounds.alloc()
                        .initWithCoordinateCoordinate(
                            this.bounds.southwest,
                            this.bounds.northeast),
                        imageSource.ios);
            } else {
                this.nativeMapObject = GMSGroundOverlay.groundOverlayWithPositionIconZoomLevel(
                    this.position as Common.Coordinate,
                    imageSource.ios,
                    0);
            }
            this.nativeMapObject.map = googleMap;
        }}).catch((reason) => {
            throw reason;
        });
    }

    public disposeNativeView() {
        this.nativeMapObject.map = null;
    }
    
    [bearingProperty.setNative](value: number) {
        this.nativeMapObject.bearing = value;
    }
        
	[boundsProperty.setNative](value: Common.CoordinateBounds) {
        this.nativeMapObject.bounds = GMSCoordinateBounds.alloc()
            .initWithCoordinateCoordinate(
                value.southwest,
                value.northeast);
    }
    
    [dimensionsProperty.setNative](value: Size | number) {
        // if (typeof value === "number") {
        //     this.nativeMapObject.setDimensions(value);
        // } else {
        //     this.nativeMapObject.setDimensions(value.width, value.height);
        // }
        // this.nativeMapObject.
    }

	[imageProperty.setNative](value: any) {        
        const image = this._getImage(value);
        image.then((imageSource) => {
            this.nativeMapObject.icon = imageSource.ios;
        }).catch((reason) => {
            console.error("GMapGroundOverlay: Failed to load image:", reason);
        });
	}

    [isVisibleProperty.setNative](value: boolean) {
        this.nativeMapObject.map = value ? this.parent.nativeView : null;
    }
    
    [isTappableProperty.setNative](value: boolean) {
        this.nativeMapObject.tappable = value;
    }
    
	[opacityProperty.setNative](value: number) {
        this.nativeMapObject.opacity = value;
    }
    
	[positionProperty.setNative](value: Common.Coordinate) {
        this.nativeMapObject.position = value as Common.Coordinate;
	}

	[zIndexProperty.setNative](value: number) {
        this.nativeMapObject.zIndex = value;
	}
}