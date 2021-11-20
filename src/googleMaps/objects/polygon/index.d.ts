import { Color } from "@nativescript/core";
import { Coordinate } from "../../models";
import { PolygonBase } from "./index.common";

export class Polygon extends PolygonBase {
    nativeObject: any;
    protected initNativeObject(googleMap?: any);
}

export class PolygonOptions {
    /**
     * Gets or sets the interior of the polygon is painted with fillColor.
     */
    fillColor?: Color;

    /**
     * Gets or sets the holes of the polygon.
     * 
     * @summary
     * A hole is a region inside the polygon that is not filled.
     * A hole is specified in exactly the same way as the outline.
     * A hole must be fully contained within the outline.
     * Multiple holes can be specified, however overlapping holes are not supported.
     */
	holes?: Coordinate[];
	
	/**
	 * Gets or sets whether to draw each segment of the line as a geodesic or not.
	 * 
	 * @summary
	 * Indicates whether the segments of the polygon should be drawn as geodesics, 
     * as opposed to straight lines on the Mercator projection. 
     * A geodesic is the shortest path between two points on the Earth's surface.
     * The geodesic curve is constructed assuming the Earth is a sphere.
	 */
	isGeodesic?: boolean;

	/**
     * Gets or sets the tappability of the polyline.
     */
	isTappable?: boolean;

	/**
	 * Gets or sets the visibility of the polyline.
	 */
	isVisible?: boolean;

	/**
     * Gets or sets the path that of the polygon.
     */
	path: Coordinate[];

    /**
     * Gets or sets the color of the polygon's outline. The default value is black.
     */
    strokeColor?: Color;

    /**
     * Gets or sets the width of the polygon's outline in screen points.
     */
    strokeWidth?: number;

	/**
	 * Gets or sets the zIndex of the polyline.
	 */
	zIndex?: number;
}