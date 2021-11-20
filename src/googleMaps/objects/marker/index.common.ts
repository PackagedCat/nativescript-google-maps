import { booleanConverter, Color, ImageAsset, ImageSource, Property } from "@nativescript/core";
import { MapObjectBase } from "../mapObjectBase";
import { Coordinate, coordinatePropertyValueConverter, Point } from "../../models";

export abstract class MarkerBase extends MapObjectBase {
	/** 
	 * Sets the anchor point for the marker.
	 * 
	 * @summary
	 * The point on the image that will be placed at the Coordinate position of the marker.
	 * This defaults to 50% from the left of the image and at the bottom of the image.
	 */
	public anchor: Point;
	
	/**
	 * Sets the color of the default icon for the marker.
	 */
	public defaultIconColor: Color;

	/**
	 * Sets the icon for the marker.
	 * 
	 * @summary
	 * A bitmap that's displayed for the marker. If the icon is left unset, a default icon is displayed.
	 * You can specify an alternative coloring of the default icon.
	 */
	public icon: string | ImageSource | ImageAsset;
	
	/**
	 * Gets or sets the draggability of the marker.
	 */
	public isDraggable: boolean;
	
	/**
	 * Gets or sets whether this marker should be flat against the map true or a billboard facing the camera false.
	 * 
	 * @summary
	 * If the marker is flat against the map, it will remain stuck to the map as the camera rotates and tilts but
	 * will still remain the same size as the camera zooms, unlike a GroundOverlay. If the marker is a billboard,
	 * it will always be drawn facing the camera and will rotate and tilt with the camera. The default is a billboard (false)
	 */
	public isFlat: boolean;

	/**
	 * Gets or sets the visibility of this marker.
	 */
	public isVisible: boolean;

	/**
	 * Gets or sets the opacity of the marker. Defaults to 1.0.
	 */
	public opacity: number;
	
	/**
	 * Gets or sets the position of the marker.
	 */
	public position: Coordinate;

	/**
     * Gets or sets the value indicates that the default behavior should not occur.
	 * 
	 * @summary
	 * If false the camera to move to the marker and an info window to appear.
	 * Default false.
     */
	public preventDefaultBehavior: boolean;
	
	/** 
	 * Gets or sets the rotation of the marker in degrees clockwise about the marker's anchor point.
	 * 
	 * @summary
	 * The rotation of the marker in degrees clockwise about the marker's anchor point.
	 * The axis of rotation is perpendicular to the marker. A rotation of 0 corresponds
	 * to the default position of the marker. When the marker is flat on the map, the default position
	 * is North aligned and the rotation is such that the marker always remains flat on the map.
	 * When the marker is a billboard, the default position is pointing up and the rotation is such
	 * that the marker is always facing the camera. The default value is 0.
	 */
	public rotation: number;
	
	/**
	 * Gets or sets the snippet of the marker.
	 * 
	 * @summary
	 * Additional text that's displayed below the title. You can change this value at any time.
	 */
	public snippet: string;
	
	/**
	 * Gets or sets the title of the marker.
	 * 
	 * @summary
	 * A text string that's displayed in an info window when the user taps the marker.
	 * You can change this value at any time.
	 */
	public title: string;
	
	/**
	 * Gets or sets the zIndex of the marker.
	 * 
	 * @summary
	 * The draw order for the marker. The markers are drawn in order of the zIndex,
	 * with the highest zIndex marker drawn on top. By setting the zIndex property for each marker,
	 * you can control which tap target your user is most likely to hit. The default value is 0.
	 */
	public zIndex: number;

    // TODO: infoWindowAnchors: Xy;
    // TODO: showInfoWindow();
}

export const anchorProperty = new Property<MarkerBase, Point>({
    name: "anchor",
    defaultValue: {
        x: 0,
        y: 0
    },
    equalityComparer: (point1, point2) => {
        return point1.x == point1.x && point1.y == point2.y;
    },
    valueConverter: (v) => {
        const splitedValue = v.split(",");
        if (splitedValue.length > 1) {
            return {
                x: parseFloat(splitedValue[0]),
                y: parseFloat(splitedValue[1])
            };
        }

        return {
            x: 0,
            y: 0
        };
    },
});
anchorProperty.register(MarkerBase);

export const defaultIconColorProperty = new Property<MarkerBase, Color>({
    name: "defaultIconColor",
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v),
});
defaultIconColorProperty.register(MarkerBase);

export const iconProperty = new Property<MarkerBase, any>({ 
    name: "icon" 
});
iconProperty.register(MarkerBase);

export const isDraggableProperty = new Property<MarkerBase, boolean>({
    name: "isDraggable",
    defaultValue: false,
    valueConverter: booleanConverter,
});
isDraggableProperty.register(MarkerBase);

export const isFlatProperty = new Property<MarkerBase, boolean>({
    name: "isFlat",
    defaultValue: false,
    valueConverter: booleanConverter,
});
isFlatProperty.register(MarkerBase);

export const isVisibleProperty = new Property<MarkerBase, boolean>({
    name: "isVisible",
    defaultValue: true,
    valueConverter: booleanConverter,
});
isVisibleProperty.register(MarkerBase);

export const opacityProperty = new Property<MarkerBase, number>({
    name: "opacity",
    defaultValue: 1,
    valueConverter: parseFloat,
});
opacityProperty.register(MarkerBase);

export const positionProperty = new Property<MarkerBase, Coordinate>({
    name: "position",
    defaultValue: {
        latitude: 0,
        longitude: 0
    },
    valueConverter: coordinatePropertyValueConverter
});
positionProperty.register(MarkerBase);

export const preventDefaultBehaviorProperty = new Property<MarkerBase, boolean>({
    name: "preventDefaultBehavior",
    defaultValue: false,
    valueConverter: booleanConverter,
});
preventDefaultBehaviorProperty.register(MarkerBase);

export const rotationProperty = new Property<MarkerBase, number>({
    name: "rotation",
    defaultValue: 0,
    valueConverter: (v) => parseFloat(v),
});
rotationProperty.register(MarkerBase);

export const snippetProperty = new Property<MarkerBase, string>({
    name: "snippet"
});
snippetProperty.register(MarkerBase);

export const titleProperty = new Property<MarkerBase, string>({
    name: "title"
});
titleProperty.register(MarkerBase);

export const zIndexProperty = new Property<MarkerBase, number>({
    name: "zIndex",
    defaultValue: 0,
    valueConverter: (v) => parseInt(v),
});
zIndexProperty.register(MarkerBase);
