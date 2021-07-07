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
import * as Converters from "../../converters/converters.android";
import { Color, zIndexProperty } from "@nativescript/core";
import * as Common from "../../common";

export class Polygon extends PolygonBase {
    public nativeMapObject: com.google.android.gms.maps.model.Polygon;

    protected initNativeObject(googleMap: com.google.android.gms.maps.GoogleMap) {
        const nativeOptions = new com.google.android.gms.maps.model.PolygonOptions();
        
        nativeOptions.clickable(this.isTappable);
        nativeOptions.fillColor(this.fillColor.android);
        nativeOptions.geodesic(this.isGeodesic);
        nativeOptions.strokeColor(this.strokeColor.android);
        nativeOptions.strokeWidth(this.strokeWidth);
        nativeOptions.visible(this.isVisible);
        nativeOptions.zIndex(this.zIndex);

        let nativeLatLngs = new Array<com.google.android.gms.maps.model.LatLng>();
        for (const coordinate of this.path) {
            nativeLatLngs.push(Converters.coordinateToNativeLatLng(coordinate));
        }
        nativeOptions.addAll(java.util.Arrays.asList(nativeLatLngs));
        
        if (this.holes != null) {
            for (const hole of this.holes) {
                nativeLatLngs = new Array<com.google.android.gms.maps.model.LatLng>();
                for (const coordinate of hole) {
                    nativeLatLngs.push(Converters.coordinateToNativeLatLng(coordinate));
                }
                nativeOptions.addHole(java.util.Arrays.asList(nativeLatLngs));
            }
        }

        this.nativeMapObject = googleMap.addPolygon(nativeOptions);
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

	[holesProperty.setNative](value: Common.Coordinate[][]) {
        if (this.nativeMapObject != null) {
            const nativeHoles = new java.util.ArrayList<java.util.ArrayList<com.google.android.gms.maps.model.LatLng>>();
            for (const hole of value) {
                const nativeLatLngs = new Array<com.google.android.gms.maps.model.LatLng>();
                for (const coordinate of hole) {
                    nativeLatLngs.push(Converters.coordinateToNativeLatLng(coordinate));
                }

                nativeHoles.add(java.util.Arrays.asList(nativeLatLngs));
            }

            this.nativeMapObject.setHoles(nativeHoles);
        }
    }
    
    [isGeodesicProperty.setNative](value: boolean) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setGeodesic(value);
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

	[pathProperty.setNative](value: Common.Coordinate[]) {
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