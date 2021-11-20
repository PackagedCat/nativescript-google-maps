import { ImageAsset, ImageSource, Utils, ViewBase } from "@nativescript/core";

/**
 * Represents base class for the map objects
 */
export abstract class MapObjectBase extends ViewBase {
	public parent: any;
	
    public abstract nativeObject: any;

    /**
     * Get or sets any user data
     */
	public userData: any = null;

	public createNativeView() {
	    this._suspendNativeUpdatesCount -= 2097152;

	    this.parent.mapPromise.then((googleMap) => {
	        this.initNativeObject(googleMap);
	    }).catch((reason: any) => {
	        console.error((typeof this) + ": ", reason);
	    });

	    return null;
	}

    protected abstract initNativeObject(googleMap?: any);
    
    protected _getImage(value: string | ImageSource | ImageAsset): Promise<ImageSource> {
        if (typeof value === "string" || value instanceof String) {
            value = value.trim();

            if (Utils.isFontIconURI(value)) {
                const fontIconCode = value.split("//")[1];
                if (fontIconCode !== undefined) {
                    const font = this.style.fontInternal;
                    const color = this.style.color;
                    return Promise.resolve(ImageSource.fromFontIconCodeSync(fontIconCode, font, color));
                }
            } else if (Utils.isDataURI(value)) {
                const base64Data = value.split(",")[1];
                if (base64Data !== undefined) {
                    return ImageSource.fromBase64(base64Data);
                }
            } else if (Utils.isFileOrResourcePath(value)) {
                if (value.indexOf(Utils.RESOURCE_PREFIX) === 0) {
                    const resPath = value.substr(Utils.RESOURCE_PREFIX.length);
                    return ImageSource.fromResource(resPath);
                } else {
                    return ImageSource.fromFile(value);
                }
            } else {
                return ImageSource.fromUrl(value);
            }
        } else if (value instanceof ImageSource) {
            return Promise.resolve(value);
        } else if (value instanceof ImageAsset) {
            return ImageSource.fromAsset(value);
        }
        
        return Promise.resolve(new ImageSource(value));
    }
}