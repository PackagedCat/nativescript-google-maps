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
    public nativeObject: com.google.android.gms.maps.model.Polyline;

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

        this.nativeObject = googleMap.addPolyline(nativeOptions);
    }

    public disposeNativeView() {
        this.parent.mapPromise.then(() => {
            this.nativeObject.remove();
        });
    }

    // TODO: Implement caps properties
    // TODO: Implement joinType property
    // TODO: Implement pattern property

    [isTappableProperty.setNative](value: boolean) {
        if (this.nativeObject != null) {
            this.nativeObject.setClickable(value);
        }
    }
    
    [isGeodesicProperty.setNative](value: boolean) {
        if (this.nativeObject != null) {
            this.nativeObject.setGeodesic(value);
        }
    }
    
    [isVisibleProperty.setNative](value: boolean) {
        if (this.nativeObject != null) {
            this.nativeObject.setVisible(value);
        }
    }

    [pathProperty.setNative](value: Coordinate[]) {
        if (this.nativeObject != null) {
            const nativeLatLngs = new Array<com.google.android.gms.maps.model.LatLng>();
            for (const coordinate of value) {
                nativeLatLngs.push(Converters.coordinateToNativeLatLng(coordinate));
            }

            this.nativeObject.setPoints(java.util.Arrays.asList(nativeLatLngs));
        }
    }
    
    [strokeColorProperty.setNative](value: Color) {
        if (this.nativeObject != null) {
            this.nativeObject.setColor(value.android);
        }
    }
    
    [strokeWidthProperty.setNative](value: number) {
        if (this.nativeObject != null) {
            this.nativeObject.setWidth(value);
        }
    }
    
    [zIndexProperty.setNative](value: number) {
        if (this.nativeObject != null) {
            this.nativeObject.setZIndex(value);
        }
    }
}
