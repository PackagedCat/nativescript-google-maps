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
import { Coordinate } from "../../models";

export class Circle extends CircleBase {
    public nativeObject: GMSCircle;

    public initNativeObject(googleMap: GMSMapView) {
        this.nativeObject.map = googleMap;
    }

    public disposeNativeView() {
        this.nativeObject.map = null;
    }

    [fillColorProperty.setNative](value: Color) {
        this.nativeObject.fillColor = value.ios;
    }
    
    [isTappableProperty.setNative](value: boolean) {
        this.nativeObject.tappable = value;
    }
    
    [isVisibleProperty.setNative](value: boolean) {
        this.nativeObject.map = value ? this.parent.nativeView : null;
    }
    
    [positionProperty.setNative](value: Coordinate) {
        this.nativeObject.position = value;
    }

    [strokeColorProperty.setNative](value: Color) {
        this.nativeObject.strokeColor = value.ios;
    }

    [strokeWidthProperty.setNative](value: number) {
        this.nativeObject.strokeWidth = value;
    }

    [zIndexProperty.setNative](value: number) {
        this.nativeObject.zIndex = value;
    }
}