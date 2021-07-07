import { Color } from "@nativescript/core";
import { PolylineBase } from "./index.common";
import * as Common from "../../common";

export class Polyline extends PolylineBase {	
	/**
	 * Gets or sets whether to draw each segment of the line as a geodesic or not.
	 * 
	 * @summary
	 * Indicates whether the segments of the polyline should be drawn as geodesics,
	 * as opposed to straight lines on the Mercator projection. A geodesic is the shortest
	 * path between two points on the Earth's surface. The geodesic curve is constructed
	 * assuming the Earth is a sphere.
	 */
	public isGeodesic: boolean;

    /**
     * Gets or sets the tappability of the polyline.
     */
	public isTappable: boolean;

	/**
	 * Gets or sets the visibility of the polyline.
	 */
	public isVisible: boolean;

	/**
	 * Gets or sets the path of the polyline.
	 * 
	 * @summary
	 * The vertices of the line. Line segments are drawn between consecutive points.
	 * A polyline is not closed by default; to form a closed polyline,
	 * the start and end points must be the same.
	 */
	public path: Common.Coordinate[];

	/**
	 * Gets or sets the stroke color of the polyline.
	 */
	public strokeColor: Color;

	/**
	 * Gets or sets the stroke width of the polyline.
	 * 
	 * @summary
	 * Line segment width in screen pixels. 
	 * The width is constant and independent of the camera's zoom level.
	 * The default value is 10.
	 */
	public strokeWidth: number;

	/**
	 * Gets or sets the zIndex of the polyline.
	 */
	public zIndex: number;
}