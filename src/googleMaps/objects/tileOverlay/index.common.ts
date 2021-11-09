import { booleanConverter, Property } from "@nativescript/core";
import { MapObjectBase } from "../mapObjectBase";

/**
 * Represents a class of title overlay is a collection of images that are displayed on top of the base map tiles.
 */
export abstract class TileOverlayBase extends MapObjectBase {
    protected _tileProvider: (x: number, y: number, zoom: number) => string | null;

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
    public abstract tileProvider: (x: number, y: number, zoom: number) => string | null;
    
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

export const isVisibleProperty = new Property<TileOverlayBase, boolean>({
    name: "isVisible",
    defaultValue: true,
    valueConverter: booleanConverter,
});
isVisibleProperty.register(TileOverlayBase);

export const opacityProperty = new Property<TileOverlayBase, number>({
    name: "opacity",
    defaultValue: 1,
    valueConverter: parseFloat,
});
opacityProperty.register(TileOverlayBase);

export const sizeProperty = new Property<TileOverlayBase, number>({
    name: "size",
    defaultValue: 256,
    valueConverter: (v) => parseInt(v),
});
sizeProperty.register(TileOverlayBase);

export const zIndexProperty = new Property<TileOverlayBase, number>({
    name: "zIndex",
    defaultValue: 0,
    valueConverter: (v) => parseInt(v),
});
zIndexProperty.register(TileOverlayBase);