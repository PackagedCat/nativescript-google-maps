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
import * as Converters from "../../converters/converters.android";
import { Color } from "@nativescript/core";
import { Coordinate } from "../../models";

export class Circle extends CircleBase {
    public nativeMapObject: com.google.android.gms.maps.model.Circle;

    public initNativeObject(googleMap: com.google.android.gms.maps.GoogleMap) {
        const nativeOptions = new com.google.android.gms.maps.model.CircleOptions();

        nativeOptions.clickable(this.isTappable);
        nativeOptions.center(Converters.coordinateToNativeLatLng(this.position));
        nativeOptions.fillColor(this.fillColor.android);
        nativeOptions.radius(this.radius);
        nativeOptions.strokeColor(this.strokeColor.android);
        nativeOptions.strokeWidth(this.strokeWidth);
        nativeOptions.visible(this.isVisible);
        nativeOptions.zIndex(this.zIndex);
        this.nativeMapObject = googleMap.addCircle(nativeOptions);
    }

    public disposeNativeView() {
        this.parent.mapPromise.then(() => {
            this.nativeMapObject.remove();
        });
    }

    [fillColorProperty.setNative](value: Color) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setFillColor(value.android);
        }
    }
    
    [isTappableProperty.setNative](value: boolean) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setClickable(value);
        }
    }
    
    [isVisibleProperty.setNative](value: boolean) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setVisible(value);
        }
    }
    
    [positionProperty.setNative](value: Coordinate) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setCenter(Converters.coordinateToNativeLatLng(value));
        }
    }

    [strokeColorProperty.setNative](value: Color) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setStrokeColor(value.android);
        }
    }

    [strokeWidthProperty.setNative](value: number) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setStrokeWidth(value);
        }
    }

    [zIndexProperty.setNative](value: number) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setZIndex(value);
        }
    }
}