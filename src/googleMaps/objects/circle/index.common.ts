import { booleanConverter, Color, Property } from "@nativescript/core";
import * as Common from "../../common";

/**
 * Represents a circle on the earth's surface (spherical cap).
 */
export abstract class CircleBase extends Common.MapObject {
    /**
     * Gets or sets the interior of the circle is painted with fillColor.
     */
    public fillColor: Color;

    /**
     * Gets or sets the tappability of the circle.
     */
    public isTappable: boolean;

	/**
	 * Gets or sets the visibility of this circle.
	 */
	public isVisible: boolean;

	/**
	 * Gets or sets the position on Earth of circle center.
	 */
    public position: Common.Coordinate;

    /**
     * Gets or sets the radius of the circle in meters; must be positive.
     */
    public radius: number;

    /**
     * Gets or sets the color of this circle's outline.
     */
    public strokeColor: Color;

    /**
     * Gets or sets the width of the circle's outline in screen points.
     */
    public strokeWidth: number;

    /**
     * Gets or sets the zIndex of this circle. Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
     */
    public zIndex: number;
}

export const fillColorProperty = new Property<CircleBase, Color>({
	name: "fillColor",
	equalityComparer: Color.equals,
    defaultValue: new Color("transparent"),
	valueConverter: (v) => new Color(v),
});
fillColorProperty.register(CircleBase);

export const isTappableProperty = new Property<CircleBase, boolean>({
	name: "isTappable",
	defaultValue: false,
	valueConverter: booleanConverter,
});
isTappableProperty.register(CircleBase);

export const isVisibleProperty = new Property<CircleBase, boolean>({
	name: "isVisible",
	defaultValue: true,
	valueConverter: booleanConverter,
});
isVisibleProperty.register(CircleBase);

export const positionProperty = new Property<CircleBase, Common.Coordinate>({
	name: "position",
    valueConverter: Common.coordinatePropertyValueConverter
});
positionProperty.register(CircleBase);

export const radiusProperty = new Property<CircleBase, number>({
	name: "radius",
	defaultValue: 0,
	valueConverter: parseFloat,
});
radiusProperty.register(CircleBase);

export const strokeColorProperty = new Property<CircleBase, Color>({
	name: "strokeColor",
	equalityComparer: Color.equals,
    defaultValue: new Color("#000000"),
	valueConverter: (v) => new Color(v),
});
strokeColorProperty.register(CircleBase);

export const strokeWidthProperty = new Property<CircleBase, number>({
	name: "strokeWidth",
	defaultValue: 1,
	valueConverter: parseFloat,
});
strokeWidthProperty.register(CircleBase);

export const zIndexProperty = new Property<CircleBase, number>({
	name: "zIndex",
	defaultValue: 0,
	valueConverter: (v) => parseInt(v),
});
zIndexProperty.register(CircleBase);