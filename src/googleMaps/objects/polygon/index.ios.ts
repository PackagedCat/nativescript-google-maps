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
    public nativeObject: GMSPolygon;

    public createNativeView() {
        this.nativeObject = GMSPolygon.new();
        return super.createNativeView();
    }

    public disposeNativeView() {
        this.nativeObject.map = null;
    }

    protected initNativeObject(googleMap: GMSMapView) {
        this.nativeObject.map = googleMap;
    }
    
    [fillColorProperty.setNative](value: Color) {
        this.nativeObject.fillColor = value.ios;
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

        this.nativeObject.holes = NSArray.arrayWithArray(holes);
    }
    
    [isGeodesicProperty.setNative](value: boolean) {
        this.nativeObject.geodesic = value;
    }

    [isTappableProperty.setNative](value: boolean) {
        this.nativeObject.tappable = value;
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