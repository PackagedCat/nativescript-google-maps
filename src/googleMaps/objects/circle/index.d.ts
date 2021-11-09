import { Color } from "@nativescript/core";
import { Coordinate } from "../../models";

/**
 * Represents a circle on the earth's surface (spherical cap).
 */
export class Circle {
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
    public position: Coordinate;

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