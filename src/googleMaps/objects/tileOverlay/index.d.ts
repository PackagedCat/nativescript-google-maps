import { TileOverlayBase } from "./index.common";

/**
 * Represents a class of title overlay is a collection of images that are displayed on top of the base map tiles.
 */
export class TileOverlay extends TileOverlayBase {
    tileProvider: (x: number, y: number, zoom: number) => string;
    nativeObject: any;
    protected initNativeObject(googleMap?: any);
}

export interface TileOverlayOptions {
    /**
     * Gets or sets the visibility of this tile overlay.
     */
    isVisible?: boolean;
    
    /**
     * Sets the opacity of this tile overlay.
     */
    opacity?: number;

    /**
     * Gets or sets the provider of the URL images that are used in the tile overlay.
     * A URL can point to a web resource, an Android asset, or a file on the local disk.
     */
    tileProvider: (x: number, y: number, zoom: number) => string | null;
    
    /**
     * Gets or sets the size of the returned tile images from tile provider.
     * 
     * @summary
     * For best results, this should be the edge length of your custom tiles. Defaults to 256,
     * which is the traditional size of Google Maps tiles. Values less than the equivalent of 128 points
     * (e.g. 256 pixels on retina devices) may not perform well and are not recommended.
     */
     size?: number

    /**
     * Gets or sets the zIndex of this tile overlay.
     */
    zIndex?: number;
}
