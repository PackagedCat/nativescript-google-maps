import {
    anchorProperty,
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
import { Color } from "@nativescript/core";
import { Coordinate, Point } from "../../models";

export class Marker extends MarkerBase {
    public nativeObject: GMSMarker;

    public createNativeView() {
        this.nativeObject = GMSMarker.new();
        return super.createNativeView();
    }

    public disposeNativeView() {
        this.nativeObject.map = null;
    }

    public initNativeObject(googleMap: GMSMapView) {
        this.nativeObject.map = googleMap;
    }
    
    [anchorProperty.setNative](value: Point) {
        this.nativeObject.groundAnchor = value;
    }
    
    [defaultIconColorProperty.setNative](value: Color) {
        if (this.icon == null) {
            if (value == null) {
                this.nativeObject.icon = null;
            } else {
                this.nativeObject.icon = GMSMarker.markerImageWithColor(value.ios);
            }
        }
    }
    
    [iconProperty.setNative](value: any) {
        const iconImage = this._getImage(value);
        iconImage.then((imageSource) => {{
            const scaledIcon = UIImage.alloc().initWithCGImageScaleOrientation(
                imageSource.ios.CGImage,
                2, // Adjust this parameter for your needs
                0
            );
            this.nativeObject.icon = scaledIcon;
        }}).catch((reason) => {
            throw reason;
        });
    }
    
    [isDraggableProperty.setNative](value: boolean) {
        this.nativeObject.draggable = value;
    }
    
    [isFlatProperty.setNative](value: boolean) {
        this.nativeObject.flat = value;
    }
    
    [isVisibleProperty.setNative](value: boolean) {
        this.nativeObject.map = value ? this.parent.nativeView : null;
    }
    
    [opacityProperty.setNative](value: number) {
        this.nativeObject.opacity = value;
    }
    
    [positionProperty.setNative](value: Coordinate) {
        this.nativeObject.position = value;
    }
    
    [rotationProperty.setNative](value: number) {
        this.nativeObject.rotation = value;
    }
    
    [snippetProperty.setNative](value: string) {
        this.nativeObject.snippet = value;
    }
    
    [titleProperty.setNative](value: string) {
        this.nativeObject.title = value;
    }

    [zIndexProperty.setNative](value: number) {
        this.nativeObject.zIndex = value;
    }
}