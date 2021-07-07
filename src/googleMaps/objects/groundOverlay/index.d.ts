import { GroundOverlayBase } from "./index.common";
import * as Common from "../../common";

export class GroundOverlay extends GroundOverlayBase {
    /**
     * Gets or sets the bearing of the ground overlay
     * (the direction that the vertical axis of the ground overlay points) in degrees clockwise from north.
     * 
     * @summary
     * The amount that the image should be rotated in a clockwise direction. The center of the rotation will be the image's anchor.
     */
    bearing: number;

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
    bounds: Common.CoordinateBounds;

    /**
     * Sets the dimensions of the ground overlay.
     */
    dimensions: Size | number;
    
    /**
     * Sets the image for the Ground Overlay.
     * 
     * @note
     * You must specify an image before adding the ground overlay to the map;
     * if not an error will be thrown when it is added to the map.
     */
	image: string | ImageSource | ImageAsset;

    /**
     * Gets or sets the tappability of the ground overlay.
     */
    isTappable: boolean;

    /**
     * Gets or sets the visibility of this ground overlay.
     */
    isVisible: boolean;
    
    /**
     * Sets the opacity of this ground overlay.
     * 
     * @summary
     * Transparency of the ground overlay in the range [0..1]
     * where 0 means the overlay is opaque and 1 means the overlay is fully transparent.
     * If the specified bitmap is already partially transparent, the transparency
     * of each pixel will be scaled accordingly (for example, if a pixel in the bitmap
     * has an alpha value of 200 and you specify the transparency of the ground overlay as 0.25,
     * then the pixel will be rendered on the screen with an alpha value of 150).
     * Specification of this property is optional and the default transparency is 0 (opaque).
     */
    opacity: number;

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
    position: Common.Coordinate;
    
    /**
     * Gets or sets the zIndex of this ground overlay.
     */
    zIndex: number;
}