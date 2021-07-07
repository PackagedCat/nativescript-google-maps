import {
    isVisibleProperty,
    opacityProperty,
    TileOverlayBase,
    zIndexProperty
} from "./index.common";

@NativeClass
class UrlTileProviderImpl extends com.google.android.gms.maps.model.UrlTileProvider {
    private _onwer: WeakRef<TileOverlay>;

    constructor(width: number, height: number) {
        super(width, height);
        return global.__native(this);
    }

    public static initWithOwner(onwer: WeakRef<TileOverlay>, size: number) {
        const urlTileProvider = new UrlTileProviderImpl(size, size);
        urlTileProvider._onwer = onwer;
        return urlTileProvider;
    }

    public getTileUrl(x: number, y: number, zoom: number) {
        const onwer = this._onwer.get();
        if (onwer == null) {
            return null;
        }

        const url = onwer.tileProvider(x, y, zoom);
        if (url == null) {
            return null;
        }

        return new java.net.URL(url);
    }
}

export class TileOverlay extends TileOverlayBase {
    public nativeMapObject: com.google.android.gms.maps.model.TileOverlay;

    public initNativeObject(googleMap: com.google.android.gms.maps.GoogleMap) {
        if (this.tileProvider == null) {
            throw new Error("Google Maps Tile Overlay: The property \"tileProvider\" cannot be null.");
        }

        const nativeOptions = new com.google.android.gms.maps.model.TileOverlayOptions();
        nativeOptions.tileProvider(UrlTileProviderImpl.initWithOwner(new WeakRef(this), this.size));
        nativeOptions.transparency(1 - this.opacity);
        nativeOptions.visible(this.isVisible);
        nativeOptions.zIndex(this.zIndex);
        this.nativeMapObject = googleMap.addTileOverlay(nativeOptions);
    }

    public disposeNativeView() {
        this.parent.mapPromise.then(() => {
            this.nativeMapObject.remove();
        });
    }

    public get tileProvider() {
        return this._tileProvider;
    }

    public set tileProvider(value) {
        this._tileProvider = value;
        if (this.nativeMapObject != null) {
            this.nativeMapObject.clearTileCache();
        }
    }

    [isVisibleProperty.setNative](value: boolean) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setVisible(value);
        }
    }
    
	[opacityProperty.setNative](value: number) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setTransparency(value);
        }
    }

	[zIndexProperty.setNative](value: number) {
        if (this.nativeMapObject != null) {
            this.nativeMapObject.setZIndex(value);
        }
	}
}