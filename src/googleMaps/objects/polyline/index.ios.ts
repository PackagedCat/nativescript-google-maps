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
    public nativeMapObject: GMSPolyline;

    public createNativeView() {
        this.nativeMapObject = GMSPolyline.new();
        return super.createNativeView();
    }

    public disposeNativeView() {
        this.nativeMapObject.map = null;
    }

    protected initNativeObject(googleMap: GMSMapView) {
        this.nativeMapObject.map = googleMap;
    }

    [isTappableProperty.setNative](value: boolean) {
        this.nativeMapObject.tappable = value;
    }
    
    [isGeodesicProperty.setNative](value: boolean) {
        this.nativeMapObject.geodesic = value;
    }
    
    [isVisibleProperty.setNative](value: boolean) {
        this.nativeMapObject.map = value ? this.parent.nativeView : null;
    }

    [pathProperty.setNative](value: Coordinate[]) {
        const nativePath = GMSMutablePath.path();
        for (const coordinate of value) {
            nativePath.addCoordinate(coordinate);
        }

        this.nativeMapObject.path = nativePath;
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