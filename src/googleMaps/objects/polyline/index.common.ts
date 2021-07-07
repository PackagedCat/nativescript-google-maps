import { booleanConverter, Color, Property } from "@nativescript/core";
import * as Common from "../../common";

export abstract class PolylineBase extends Common.MapObject {	
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

export const isGeodesicProperty = new Property<PolylineBase, boolean>({
	name: "isGeodesic",
	defaultValue: false,
	valueConverter: booleanConverter,
});
isGeodesicProperty.register(PolylineBase);

export const isTappableProperty = new Property<PolylineBase, boolean>({
	name: "isTappable",
	defaultValue: false,
	valueConverter: booleanConverter,
});
isTappableProperty.register(PolylineBase);

export const isVisibleProperty = new Property<PolylineBase, boolean>({
	name: "isVisible",
	defaultValue: true,
	valueConverter: booleanConverter,
});
isVisibleProperty.register(PolylineBase);

export const pathProperty = new Property<PolylineBase, Common.Coordinate[]>({
	name: "path"
});
pathProperty.register(PolylineBase);

export const strokeColorProperty = new Property<PolylineBase, Color>({
	name: "strokeColor",
	equalityComparer: Color.equals,
    defaultValue: new Color("#000000"),
	valueConverter: (v) => new Color(v),
});
strokeColorProperty.register(PolylineBase);

export const strokeWidthProperty = new Property<PolylineBase, number>({
	name: "strokeWidth",
	defaultValue: 10,
	valueConverter: (v) => parseFloat(v),
});
strokeWidthProperty.register(PolylineBase);

export const zIndexProperty = new Property<PolylineBase, number>({
	name: "zIndex",
	defaultValue: 0,
	valueConverter: (v) => parseInt(v),
});
zIndexProperty.register(PolylineBase);