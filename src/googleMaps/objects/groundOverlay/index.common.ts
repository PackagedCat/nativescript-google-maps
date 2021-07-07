import { booleanConverter, ImageAsset, ImageSource, Size, Property } from "@nativescript/core";
import * as Common from "../../common";

/**
 * Represents a class of ground overlay is an image that is fixed to a map
 */
export abstract class GroundOverlayBase extends Common.MapObject {
    /**
     * Gets or sets the bearing of the ground overlay
     * (the direction that the vertical axis of the ground overlay points) in degrees clockwise from north.
     * 
     * @summary
     * The amount that the image should be rotated in a clockwise direction. The center of the rotation will be the image's anchor.
     */
    public bearing: number;

    /**
     * Gets or sets the location of the anchor point.
     * 
     * @summary
     * There are two ways to specify the position of the ground overlay:
     * - Using a location: You must provide an image of the ground overlay, 
     *  a Coordinate to which the anchor will be fixed and the width of the overlay (in meters).
     *  The anchor is, by default, 50% from the top of the image and 50% from the left of the image.
     *  This can be changed. You can optionally provide the height of the overlay (in meters).
     *  If you do not provide the height of the overlay, it will be automatically calculated to preserve the proportions of the image.
     * - Using a Bounds: You must provide a CoordinateBounds which will contain the image.
     * 
     * @note
     * You must specify the position of the ground overlay before it is added to the map,
     * otherwise an error will be thrown when the ground overlay is added to the map.
     */
    public bounds: Common.CoordinateBounds;

    /**
     * Sets the dimensions of the ground overlay.
     */
    public dimensions: Size | number;
    
    /**
     * Sets the image for the Ground Overlay.
     * 
     * @note
     * You must specify an image before adding the ground overlay to the map;
     * if not an error will be thrown when it is added to the map.
     */
	public image: string | ImageSource | ImageAsset;

    /**
     * Gets or sets the tappability of the ground overlay.
     */
    public isTappable: boolean;

    /**
     * Gets or sets the visibility of this ground overlay.
     */
    public isVisible: boolean;
    
    /**
     * Sets the opacity of this ground overlay.
     */
    public opacity: number;

    /**
     * Gets or sets the location of the anchor point.
     * 
     * @summary
     * There are two ways to specify the position of the ground overlay:
     * - Using a location: You must provide an image of the ground overlay, 
     *  a Coordinate to which the anchor will be fixed and the width of the overlay (in meters).
     *  The anchor is, by default, 50% from the top of the image and 50% from the left of the image.
     *  This can be changed. You can optionally provide the height of the overlay (in meters).
     *  If you do not provide the height of the overlay, it will be automatically calculated to preserve the proportions of the image.
     * - Using a Bounds: You must provide a LatLngBounds which will contain the image.
     * 
     * @note
     * You must specify the position of the ground overlay before it is added to the map,
     * otherwise an error will be thrown when the ground overlay is added to the map.
     */
    public position: Common.Coordinate;
    
    /**
     * Gets or sets the zIndex of this ground overlay.
     */
    public zIndex: number;
}

export const bearingProperty = new Property<GroundOverlayBase, number>({
	name: "bearing",
	defaultValue: 0,
	valueConverter: parseFloat,
});
bearingProperty.register(GroundOverlayBase);

export const dimensionsProperty = new Property<GroundOverlayBase, Size | number>({
	name: "dimensions",
	valueConverter: (value) => {
        const splitedValue = value.split(",");
        if (splitedValue.length < 0) {
            throw new Error("GMapGroundOverlay: Invalid dimensions property");
        }

        if (splitedValue.length < 2) {
            return parseFloat(value);
        }
        
        return {
            height: parseFloat(splitedValue[1]),
            width: parseFloat(splitedValue[0])
        };
    }
});
dimensionsProperty.register(GroundOverlayBase);

export const boundsProperty = new Property<GroundOverlayBase, Common.CoordinateBounds>({
	name: "bounds"
});
boundsProperty.register(GroundOverlayBase);

export const imageProperty = new Property<GroundOverlayBase, any>({ 
    name: "image" 
});
imageProperty.register(GroundOverlayBase);

export const isTappableProperty = new Property<GroundOverlayBase, boolean>({
	name: "isTappable",
	defaultValue: false,
	valueConverter: booleanConverter,
});
isTappableProperty.register(GroundOverlayBase);

export const isVisibleProperty = new Property<GroundOverlayBase, boolean>({
	name: "isVisible",
	defaultValue: true,
	valueConverter: booleanConverter,
});
isVisibleProperty.register(GroundOverlayBase);

export const opacityProperty = new Property<GroundOverlayBase, number>({
	name: "opacity",
	defaultValue: 0,
	valueConverter: parseFloat,
});
opacityProperty.register(GroundOverlayBase);

export const positionProperty = new Property<GroundOverlayBase, Common.Coordinate>({
	name: "position",
    valueConverter: Common.coordinatePropertyValueConverter
});
positionProperty.register(GroundOverlayBase);

export const zIndexProperty = new Property<GroundOverlayBase, number>({
	name: "zIndex",
	defaultValue: 0,
	valueConverter: (v) => parseInt(v),
});
zIndexProperty.register(GroundOverlayBase);