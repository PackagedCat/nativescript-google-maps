import {
    fillColorProperty,
    holesProperty,
    isGeodesicProperty,
    isTappableProperty,
    isVisibleProperty,
    pathProperty,
    PolygonBase,
    strokeColorProperty,
    strokeWidthProperty
} from "./index.common";
import { Color, zIndexProperty } from "@nativescript/core";
import { Coordinate } from "../../models";

export class Polygon extends PolygonBase {
    public nativeMapObject: GMSPolygon;

    public createNativeView() {
        this.nativeMapObject = GMSPolygon.new();
        return super.createNativeView();
    }

    public disposeNativeView() {
        this.nativeMapObject.map = null;
    }

    protected initNativeObject(googleMap: GMSMapView) {
        this.nativeMapObject.map = googleMap;
    }
    
    [fillColorProperty.setNative](value: Color) {
        this.nativeMapObject.fillColor = value.ios;
    }

    [holesProperty.setNative](value: Coordinate[][]) {
        const holes = new Array<GMSPath>();
        for (const hole of value) {
            const nativePath = GMSMutablePath.path();
            for (const coordinate of hole) {
                nativePath.addCoordinate(coordinate);
            }
            holes.push(nativePath);
        }

        this.nativeMapObject.holes = NSArray.arrayWithArray(holes);
    }
    
    [isGeodesicProperty.setNative](value: boolean) {
        this.nativeMapObject.geodesic = value;
    }

    [isTappableProperty.setNative](value: boolean) {
        this.nativeMapObject.tappable = value;
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
        if (this.nativeMapObject != null) {
            this.nativeMapObject.strokeColor = value.ios;
        }
    }

    [strokeWidthProperty.setNative](value: number) {
        this.nativeMapObject.strokeWidth = value;
    }
    
    [zIndexProperty.setNative](value: number) {
        this.nativeMapObject.zIndex = value;
    }
}