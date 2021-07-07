import {
    defaultIconColorProperty,
    iconProperty,
    isDraggableProperty,
    isFlatProperty,
    isVisibleProperty,
    MarkerBase,
    opacityProperty,
    positionProperty,
    rotationProperty,
    snippetProperty,
    titleProperty,
    zIndexProperty
} from "./index.common";
import { Color } from "@nativescript/core";
import * as Common from "../../common";

export class Marker extends MarkerBase {
    public nativeMapObject: GMSMarker;

    public createNativeView() {
        this.nativeMapObject = GMSMarker.new();
        return super.createNativeView();
    }

    public disposeNativeView() {
        this.nativeMapObject.map = null;
    }

    public initNativeObject(googleMap: GMSMapView) {
        this.nativeMapObject.map = googleMap;
    }
    
	[defaultIconColorProperty.setNative](value: Color) {
        if (this.icon == null) {
            if (value == null) {
                this.nativeMapObject.icon = null;
            } else {
                this.nativeMapObject.icon = GMSMarker.markerImageWithColor(value.ios);
            }
        }
	}
    
	[iconProperty.setNative](value: any) {
        const iconImage = this._getImage(value);
        iconImage.then((imageSource) => {{
            const scaledIcon = UIImage.alloc().initWithCGImageScaleOrientation(
                imageSource.ios.CGImage,
                2, // Adjust this parameter for your needs
                0
            );
            this.nativeMapObject.icon = scaledIcon;
        }}).catch((reason) => {
            throw reason;
        });
	}
    
	[isDraggableProperty.setNative](value: boolean) {
        this.nativeMapObject.draggable = value;
	}
    
	[isFlatProperty.setNative](value: boolean) {
        this.nativeMapObject.flat = value;
    }
    
    [isVisibleProperty.setNative](value: boolean) {
        this.nativeMapObject.map = value ? this.parent.nativeView : null;
    }
    
	[opacityProperty.setNative](value: number) {
        this.nativeMapObject.opacity = value;
    }
    
	[positionProperty.setNative](value: Common.Coordinate) {
        this.nativeMapObject.position = value;
	}
    
	[rotationProperty.setNative](value: number) {
        this.nativeMapObject.rotation = value;
	}
    
	[snippetProperty.setNative](value: string) {
        this.nativeMapObject.snippet = value;
	}
    
	[titleProperty.setNative](value: string) {
        this.nativeMapObject.title = value;
	}

	[zIndexProperty.setNative](value: number) {
        this.nativeMapObject.zIndex = value;
	}
}