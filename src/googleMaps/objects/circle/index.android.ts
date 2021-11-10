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
    public nativeObject: com.google.android.gms.maps.model.Circle;

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
        this.nativeObject = googleMap.addCircle(nativeOptions);
    }

    public disposeNativeView() {
        this.parent.mapPromise.then(() => {
            this.nativeObject.remove();
        });
    }

    [fillColorProperty.setNative](value: Color) {
        if (this.nativeObject != null) {
            this.nativeObject.setFillColor(value.android);
        }
    }
    
    [isTappableProperty.setNative](value: boolean) {
        if (this.nativeObject != null) {
            this.nativeObject.setClickable(value);
        }
    }
    
    [isVisibleProperty.setNative](value: boolean) {
        if (this.nativeObject != null) {
            this.nativeObject.setVisible(value);
        }
    }
    
    [positionProperty.setNative](value: Coordinate) {
        if (this.nativeObject != null) {
            this.nativeObject.setCenter(Converters.coordinateToNativeLatLng(value));
        }
    }

    [strokeColorProperty.setNative](value: Color) {
        if (this.nativeObject != null) {
            this.nativeObject.setStrokeColor(value.android);
        }
    }

    [strokeWidthProperty.setNative](value: number) {
        if (this.nativeObject != null) {
            this.nativeObject.setStrokeWidth(value);
        }
    }

    [zIndexProperty.setNative](value: number) {
        if (this.nativeObject != null) {
            this.nativeObject.setZIndex(value);
        }
    }
}