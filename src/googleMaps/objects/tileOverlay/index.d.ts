import * as Common from "../../common";

 export class TileOverlay extends Common.MapObject {
    /**
     * Gets or sets the visibility of this tile overlay.
     */
    public isVisible: boolean;
    
    /**
     * Sets the opacity of this ground overlay.
     */
    public opacity: number;

    /**
     * Gets or sets the provider of the URL images that are used in the tile overlay.
     * A URL can point to a web resource, an Android asset, or a file on the local disk.
     */
    public tileProvider: (x: number, y: number, zoom: number) => string | null;
    
    /**
     * Gets or sets the size of the returned tile images from tile provider.
     * 
     * @summary
     * For best results, this should be the edge length of your custom tiles. Defaults to 256,
     * which is the traditional size of Google Maps tiles. Values less than the equivalent of 128 points
     * (e.g. 256 pixels on retina devices) may not perform well and are not recommended.
     */
     public size: number

    /**
     * Gets or sets the zIndex of this ground overlay.
     */
    public zIndex: number;
}