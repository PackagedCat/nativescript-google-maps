import {
    defaultIconColorProperty,
    iconProperty,
    isDraggableProperty,
    isFlatProperty,
    isVisibleProperty,
    MarkerBase,
    opacityProperty,
    positionProperty,
    rotationProperty,
    snippetProperty,
    titleProperty,
    zIndexProperty
} from "./index.common";
import * as Converters from "../../converters/converters.android";
import { Color } from "@nativescript/core";
import { Coordinate } from "../../models";

export class Marker extends MarkerBase {
    public nativeObject: com.google.android.gms.maps.model.Marker;

    public initNativeObject(googleMap: com.google.android.gms.maps.GoogleMap) {
        const nativeOptions = new com.google.android.gms.maps.model.MarkerOptions();

        nativeOptions.alpha(this.opacity);
        nativeOptions.anchor(this.anchor.x, this.anchor.y);
        nativeOptions.draggable(this.isDraggable);
        nativeOptions.flat(this.isFlat);
        nativeOptions.position(Converters.coordinateToNativeLatLng(this.position));
        nativeOptions.rotation(this.rotation);
        nativeOptions.snippet(this.snippet);
        nativeOptions.title(this.title);
        nativeOptions.visible(this.isVisible);
        nativeOptions.zIndex(this.zIndex);

        if (this.icon != null) {
            const iconImage = this._getImage(this.icon);
            iconImage.then((imageSource) => {{
                const nativeImage = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(imageSource.android);
                nativeOptions.icon(nativeImage);
                this.nativeObject = googleMap.addMarker(nativeOptions);
            }}).catch((reason) => {
                console.error("Google Map Marker: Failed to load icon", reason);
            });
        } else {
            this.nativeObject = googleMap.addMarker(nativeOptions);
        }
    }

    public disposeNativeView() {
        this.parent.mapPromise.then(() => {
            this.nativeObject.remove();
        });
    }
    
    [defaultIconColorProperty.setNative](value: Color) {
        if (this.nativeObject != null && this.icon == null) {
            if (value == null) {
                this.nativeObject.setIcon(
                    com.google.android.gms.maps.model.BitmapDescriptorFactory.defaultMarker());
            } else {
                this.nativeObject.setIcon(
                    com.google.android.gms.maps.model.BitmapDescriptorFactory.defaultMarker(value.android));
            }
        }
    }
    
    [iconProperty.setNative](value: any) {
        if (this.nativeObject == null) {
            return;
        }

        const iconImage = this._getImage(value);
        iconImage.then((imageSource) => {{
            const nativeIcon = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(imageSource.android);
            this.nativeObject.setIcon(nativeIcon);
        }}).catch((reason) => {
            throw reason;
        });
    }
    
    [isDraggableProperty.setNative](value: boolean) {
        if (this.nativeObject != null) {
            this.nativeObject.setDraggable(value);
        }
    }
    
    [isFlatProperty.setNative](value: boolean) {
        if (this.nativeObject != null) {
            this.nativeObject.setFlat(value);
        }
    }
    
    [isVisibleProperty.setNative](value: boolean) {
        if (this.nativeObject != null) {
            this.nativeObject.setVisible(value);
        }
    }
    
    [opacityProperty.setNative](value: number) {
        if (this.nativeObject != null) {
            this.nativeObject.setAlpha(value);
        }
    }
    
    [positionProperty.setNative](value: Coordinate) {
        if (this.nativeObject != null) {
            this.nativeObject.setPosition(Converters.coordinateToNativeLatLng({
                latitude: value.latitude,
                longitude: value.longitude
            }));
        }
    }
    
    [rotationProperty.setNative](value: number) {
        if (this.nativeObject != null) {
            this.nativeObject.setRotation(value);
        }
    }
    
    [snippetProperty.setNative](value: string) {
        if (this.nativeObject != null) {
            this.nativeObject.setSnippet(value);
        }
    }
    
    [titleProperty.setNative](value: string) {
        if (this.nativeObject != null) {
            this.nativeObject.setTitle(value);
        }
    }

    [zIndexProperty.setNative](value: number) {
        if (this.nativeObject != null) {
            this.nativeObject.setZIndex(value);
        }
    }
}