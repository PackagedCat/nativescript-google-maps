import { 
    isGeodesicProperty,
    isTappableProperty,
    isVisibleProperty,
    pathProperty,
    PolylineBase,
    strokeColorProperty,
    strokeWidthProperty
} from "./index.common";
import * as Converters from "../../converters/converters.android";
import { Color, zIndexProperty } from "@nativescript/core";
import { Coordinate } from "../../models";

export class Polyline extends PolylineBase {
    public nativeMapObject: com.google.android.gms.maps.model.Polyline;

    protected initNativeObject(googleMap: com.google.android.gms.maps.GoogleMap) {
        const nativeOptions = new com.google.android.gms.maps.model.PolylineOptions();
        
        nativeOptions.color(this.strokeColor.android);
        nativeOptions.clickable(this.isTappable);
        nativeOptions.geodesic(this.isGeodesic);
        nativeOptions.visible(this.isVisible);
        nativeOptions.width(this.strokeWidth);
        nativeOptions.zIndex(this.zIndex);

        const nativeLatLngs = new Array<com.google.android.gms.maps.model.LatLng>();
        for (const coordinate of this.path) {
            nativeLatLngs.push(Converters.coordinateToNativeLatLng(coordinate));
        }
        nativeOptions.addAll(java.util.Arrays.asList(nativeLatLngs));

        this.nativeMapObject = googleMap.addPolyline(nativeOptions);
    }

    public disposeNativeView() {
        this.parent.mapPromise.then(() => {
            this.nativeMapObject.remove();
        });
    }

    // TODO: Implement caps properties
    // TODO: Implement joinType property
    // TODO: Implement pattern property

    [isTappableProperty.setNative](value: boolean) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setClickable(value);
        }
    }
    
    [isGeodesicProperty.setNative](value: boolean) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setGeodesic(value);
        }
    }
    
    [isVisibleProperty.setNative](value: boolean) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setVisible(value);
        }
    }

    [pathProperty.setNative](value: Coordinate[]) {
        if (this.nativeMapObject != null) {
            const nativeLatLngs = new Array<com.google.android.gms.maps.model.LatLng>();
            for (const coordinate of value) {
                nativeLatLngs.push(Converters.coordinateToNativeLatLng(coordinate));
            }

            this.nativeMapObject.setPoints(java.util.Arrays.asList(nativeLatLngs));
        }
    }
    
    [strokeColorProperty.setNative](value: Color) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setColor(value.android);
        }
    }
    
    [strokeWidthProperty.setNative](value: number) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setWidth(value);
        }
    }
    
    [zIndexProperty.setNative](value: number) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setZIndex(value);
        }
    }
}