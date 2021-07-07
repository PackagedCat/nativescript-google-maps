import { Color } from "@nativescript/core";
import { PolygonBase } from "./index.common";
import * as Common from "../../common";

export class Polygon extends PolygonBase {
    public static fillPath: string;

    /**
     * Gets or sets the interior of the polygon is painted with fillColor.
     */
    public fillColor: Color;

    /**
     * Gets or sets the holes of the polygon.
     * 
     * @summary
     * A hole is a region inside the polygon that is not filled.
     * A hole is specified in exactly the same way as the outline.
     * A hole must be fully contained within the outline.
     * Multiple holes can be specified, however overlapping holes are not supported.
     */
	public holes: Common.Coordinate[];
	
	/**
	 * Gets or sets whether to draw each segment of the line as a geodesic or not.
	 * 
	 * @summary
	 * Indicates whether the segments of the polygon should be drawn as geodesics, 
     * as opposed to straight lines on the Mercator projection. 
     * A geodesic is the shortest path between two points on the Earth's surface.
     * The geodesic curve is constructed assuming the Earth is a sphere.
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
     * Gets or sets the path that of the polygon.
     */
	public path: Common.Coordinate[];

    /**
     * Gets or sets the color of the polygon's outline. The default value is black.
     */
    public strokeColor: Color;

    /**
     * Gets or sets the width of the polygon's outline in screen points.
     */
    public strokeWidth: number;

	/**
	 * Gets or sets the zIndex of the polyline.
	 */
	public zIndex: number;
}