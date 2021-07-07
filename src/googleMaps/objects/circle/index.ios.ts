import {
    CircleBase,
    fillColorProperty,
    isTappableProperty,
    isVisibleProperty,
    positionProperty,
    strokeColorProperty,
    strokeWidthProperty,
    zIndexProperty
} from "./index.common";
import { Color } from "@nativescript/core";
import * as Common from "../../common";

export class Circle extends CircleBase {
    public nativeMapObject: GMSCircle;

    public initNativeObject(googleMap: GMSMapView) {
        this.nativeMapObject.map = googleMap;
    }

    public disposeNativeView() {
        this.nativeMapObject.map = null;
    }

	[fillColorProperty.setNative](value: Color) {
        this.nativeMapObject.fillColor = value.ios;
	}
    
    [isTappableProperty.setNative](value: boolean) {
        this.nativeMapObject.tappable = value;
    }
    
    [isVisibleProperty.setNative](value: boolean) {
        this.nativeMapObject.map = value ? this.parent.nativeView : null;
    }
    
	[positionProperty.setNative](value: Common.Coordinate) {
        this.nativeMapObject.position = value;
	}

	[strokeColorProperty.setNative](value: Color) {
        this.nativeMapObject.strokeColor = value.ios;
	}

	[strokeWidthProperty.setNative](value: number) {
        this.nativeMapObject.strokeWidth = value;
	}

	[zIndexProperty.setNative](value: number) {
        this.nativeMapObject.zIndex = value;
	}
}