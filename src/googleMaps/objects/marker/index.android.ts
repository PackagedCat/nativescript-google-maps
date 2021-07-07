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
import * as Common from "../../common";

export class Marker extends MarkerBase {
    public nativeMapObject: com.google.android.gms.maps.model.Marker;

    public initNativeObject(googleMap: com.google.android.gms.maps.GoogleMap) {
        const nativeOptions = new com.google.android.gms.maps.model.MarkerOptions();

        nativeOptions.alpha(this.opacity);
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
                this.nativeMapObject = googleMap.addMarker(nativeOptions);
            }}).catch((reason) => {
                console.error("Google Map Marker: Failed to load icon", reason);
            });
        } else {
            this.nativeMapObject = googleMap.addMarker(nativeOptions);
        }
    }

    public disposeNativeView() {
        this.parent.mapPromise.then(() => {
            this.nativeMapObject.remove();
        });
    }
    
	[defaultIconColorProperty.setNative](value: Color) {
        if (this.nativeMapObject != null && this.icon == null) {
            if (value == null) {
                this.nativeMapObject.setIcon(
                    com.google.android.gms.maps.model.BitmapDescriptorFactory.defaultMarker());
            } else {
                this.nativeMapObject.setIcon(
                    com.google.android.gms.maps.model.BitmapDescriptorFactory.defaultMarker(value.android));
            }
        }
	}
    
	[iconProperty.setNative](value: any) {
        if (this.nativeMapObject == null) {
            return;
        }

        const iconImage = this._getImage(value);
        iconImage.then((imageSource) => {{
            const nativeIcon = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(imageSource.android);
            this.nativeMapObject.setIcon(nativeIcon);
        }}).catch((reason) => {
            throw reason;
        });
    }
    
	[isDraggableProperty.setNative](value: boolean) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setDraggable(value);
        }
	}
    
	[isFlatProperty.setNative](value: boolean) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setFlat(value);
        }
    }
    
    [isVisibleProperty.setNative](value: boolean) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setVisible(value);
        }
    }
    
	[opacityProperty.setNative](value: number) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setAlpha(value);
        }
    }
    
	[positionProperty.setNative](value: Common.Coordinate) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setPosition(Converters.coordinateToNativeLatLng({
                latitude: value.latitude,
                longitude: value.longitude
            }));
        }
	}
    
	[rotationProperty.setNative](value: number) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setRotation(value);
        }
	}
    
	[snippetProperty.setNative](value: string) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setSnippet(value);
        }
	}
    
	[titleProperty.setNative](value: string) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setTitle(value);
        }
	}

	[zIndexProperty.setNative](value: number) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setZIndex(value);
        }
	}
}