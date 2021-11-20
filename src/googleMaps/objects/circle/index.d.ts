import { Color } from "@nativescript/core";
import { Coordinate } from "../../models";
import { CircleBase } from "./index.common";

/**
 * Represents a circle on the earth's surface (spherical cap).
 */
export class Circle extends CircleBase {
    nativeObject: any;
    protected initNativeObject(googleMap?: any);
}

export interface CircleOptions {
    /**
     * Gets or sets the interior of the circle is painted with fillColor.
     */
    fillColor?: Color;

    /**
     * Gets or sets the tappability of the circle.
     */
    isTappable?: boolean;

	/**
	 * Gets or sets the visibility of this circle.
	 */
	isVisible?: boolean;

	/**
	 * Gets or sets the position on Earth of circle center.
	 */
    position: Coordinate;

    /**
     * Gets or sets the radius of the circle in meters; must be positive.
     */
    radius: number;

    /**
     * Gets or sets the color of this circle's outline.
     */
    strokeColor?: Color;

    /**
     * Gets or sets the width of the circle's outline in screen points.
     */
    strokeWidth?: number;

    /**
     * Gets or sets the zIndex of this circle. Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
     */
    zIndex?: number;
}
