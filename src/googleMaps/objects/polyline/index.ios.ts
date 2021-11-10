import {
    isGeodesicProperty,
    isTappableProperty,
    isVisibleProperty,
    pathProperty,
    PolylineBase,
    strokeColorProperty,
    strokeWidthProperty
} from "./index.common";
import { Color, zIndexProperty } from "@nativescript/core";
import { Coordinate } from "../../models";

export class Polyline extends PolylineBase {
    public nativeObject: GMSPolyline;

    public createNativeView() {
        this.nativeObject = GMSPolyline.new();
        return super.createNativeView();
    }

    public disposeNativeView() {
        this.nativeObject.map = null;
    }

    protected initNativeObject(googleMap: GMSMapView) {
        this.nativeObject.map = googleMap;
    }

    [isTappableProperty.setNative](value: boolean) {
        this.nativeObject.tappable = value;
    }
    
    [isGeodesicProperty.setNative](value: boolean) {
        this.nativeObject.geodesic = value;
    }
    
    [isVisibleProperty.setNative](value: boolean) {
        this.nativeObject.map = value ? this.parent.nativeView : null;
    }

    [pathProperty.setNative](value: Coordinate[]) {
        const nativePath = GMSMutablePath.path();
        for (const coordinate of value) {
            nativePath.addCoordinate(coordinate);
        }

        this.nativeObject.path = nativePath;
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