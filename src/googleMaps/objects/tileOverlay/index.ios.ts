import {
    isVisibleProperty,
    opacityProperty,
    sizeProperty,
    TileOverlayBase,
    zIndexProperty
} from "./index.common";

@NativeClass
class CustomGMSURLTileLayer extends GMSURLTileLayer {
    private _onwer: WeakRef<TileOverlay>;

    public static initWithOwner(onwer: WeakRef<TileOverlay>) {
        const urlTileProvider = <CustomGMSURLTileLayer>CustomGMSURLTileLayer.new();
        urlTileProvider._onwer = onwer;
        return urlTileProvider;
    }

    public requestTileForXYZoomReceiver(x: number, y: number, zoom: number, receiver: GMSTileReceiver) {
        const onwer = this._onwer.get();
        if (onwer == null) {
            receiver.receiveTileWithXYZoomImage(x, y, zoom, null);
            return;
        }

        const url = onwer.tileProvider(x, y, zoom);
        if (url == null) {
            receiver.receiveTileWithXYZoomImage(x, y, zoom, null);
        }
        
        onwer._getImage(url)
            .then((imageSource) => {
                receiver.receiveTileWithXYZoomImage(x, y, zoom, imageSource.ios);
            }).catch(() => {
                receiver.receiveTileWithXYZoomImage(x, y, zoom, null);
            });
    }
}

export class TileOverlay extends TileOverlayBase {
    public nativeMapObject: GMSTileLayer;

    public createNativeView() {
        this.nativeMapObject = CustomGMSURLTileLayer.initWithOwner(new WeakRef(this));
        return super.createNativeView();
    }

    public disposeNativeView() {
        this.nativeMapObject.map = null;
    }

    public initNativeObject(googleMap: GMSMapView) {
        this.nativeMapObject.map = googleMap;
    }

    public get tileProvider() {
        return this._tileProvider;
    }

    public set tileProvider(value) {
        this._tileProvider = value;
        this.nativeMapObject.clearTileCache();
    }

    [isVisibleProperty.setNative](value: boolean) {
        this.nativeMapObject.map = value ? this.parent.nativeView : null;
    }
    
	[opacityProperty.setNative](value: number) {
        this.nativeMapObject.opacity = value;
    }

	[sizeProperty.setNative](value: number) {
        this.nativeMapObject.tileSize = value;
    }

	[zIndexProperty.setNative](value: number) {
        this.nativeMapObject.zIndex = value;
	}
}