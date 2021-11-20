import {
    bearingProperty,
    boundsProperty,
    dimensionsProperty,
    GroundOverlayBase,
    imageProperty,
    isTappableProperty,
    isVisibleProperty,
    opacityProperty,
    positionProperty,
    zIndexProperty
} from "./index.common";
import { Coordinate, CoordinateBounds } from "../../models";

export class GroundOverlay extends GroundOverlayBase {
    public nativeObject: GMSGroundOverlay;

    public createNativeView() {
        if (this.image == null) {
            throw new Error("GMapGroundOverlay: The image property must be set");
        }

        if (this.position == null) {
            throw new Error("GMapGroundOverlay: The position property must be set");
        }
        
        return super.createNativeView();
    }

    public initNativeObject(googleMap: GMSMapView) {
        const image = this._getImage(this.image);
        image.then((imageSource) => {{
            if (this.bounds != null) {
                this.nativeObject = GMSGroundOverlay.groundOverlayWithBoundsIcon(
                    GMSCoordinateBounds.alloc()
                        .initWithCoordinateCoordinate(
                            this.bounds.southwest,
                            this.bounds.northeast),
                    imageSource.ios);
            } else {
                this.nativeObject = GMSGroundOverlay.groundOverlayWithPositionIconZoomLevel(
                    this.position as Coordinate,
                    imageSource.ios,
                    0);
            }
            this.nativeObject.map = googleMap;
        }}).catch((reason) => {
            throw reason;
        });
    }

    public disposeNativeView() {
        this.nativeObject.map = null;
    }
    
    [bearingProperty.setNative](value: number) {
        this.nativeObject.bearing = value;
    }
        
    [boundsProperty.setNative](value: CoordinateBounds) {
        this.nativeObject.bounds = GMSCoordinateBounds.alloc()
            .initWithCoordinateCoordinate(
                value.southwest,
                value.northeast);
    }
    
    [dimensionsProperty.setNative]() {
        // if (typeof value === "number") {
        //     this.nativeObject.setDimensions(value);
        // } else {
        //     this.nativeObject.setDimensions(value.width, value.height);
        // }
        // this.nativeObject.
    }

    [imageProperty.setNative](value: any) {        
        const image = this._getImage(value);
        image.then((imageSource) => {
            this.nativeObject.icon = imageSource.ios;
        }).catch((reason) => {
            console.error("GMapGroundOverlay: Failed to load image:", reason);
        });
    }

    [isVisibleProperty.setNative](value: boolean) {
        this.nativeObject.map = value ? this.parent.nativeView : null;
    }
    
    [isTappableProperty.setNative](value: boolean) {
        this.nativeObject.tappable = value;
    }
    
    [opacityProperty.setNative](value: number) {
        this.nativeObject.opacity = value;
    }
    
    [positionProperty.setNative](value: Coordinate) {
        this.nativeObject.position = value as Coordinate;
    }

    [zIndexProperty.setNative](value: number) {
        this.nativeObject.zIndex = value;
    }
}
