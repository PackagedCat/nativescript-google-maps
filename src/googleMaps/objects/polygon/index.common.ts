import { booleanConverter, Color, Property } from "@nativescript/core";
import * as Common from "../../common";

export abstract class PolygonBase extends Common.MapObject {
	public static get fillPath() {
        if (global.isAndroid) {
            return [
                {
                    latitude: -179.99,
                    longitude: 89.99
                },
                {
                    latitude: -179.99,
                    longitude: 0
                },
                {
                    latitude: -179.99,
                    longitude: -89.99
                },
                {
                    latitude: 0,
                    longitude: -89.99
                },
                {
                    latitude: 179.99,
                    longitude: -89.99
                },
                {
                    latitude: 179.99,
                    longitude: 0
                },
                {
                    latitude: 179.99,
                    longitude: 89.99
                },
                {
                    latitude: 0,
                    longitude: 89.99
                },
                {
                    latitude: -179.99,
                    longitude: 89.99
                }
            ];
        }

        return [
            {
                latitude: 85,
                longitude: 180
            },
            {
                latitude: 85,
                longitude: 90
            },
            {
                latitude: 85,
                longitude: 0
            },
            {
                latitude: 85,
                longitude: -90
            },
            {
                latitude: 85,
                longitude: -180
            },
            {
                latitude: 0,
                longitude: -180
            },
            {
                latitude: -85,
                longitude: -180
            },
            {
                latitude: -85,
                longitude: -90
            },
            {
                latitude: -85,
                longitude: 90
            },
            {
                latitude: -85,
                longitude: 90
            },
            {
                latitude: -85,
                longitude: 180
            },
            {
                latitude: 0,
                longitude: 180
            },
            {
                latitude: 85,
                longitude: 180
            }
        ];
    }

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
	public holes: Common.Coordinate[][];
	
	/**
	 * Gets or sets whether to draw each segment of the line as a geodesic or not.
	 * 
	 * @summary
	 * Indicates whether the segments of the polygon should be drawn as geodesics, 
     * as opposed to straight lines on the Mercator projection. 
     * A geodesic is the shortest path between two points on the Earth's surface.
     * The geodesic curve is constructed assuming the Earth is a sphere
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

export const fillColorProperty = new Property<PolygonBase, Color>({
	name: "fillColor",
	equalityComparer: Color.equals,
    defaultValue: new Color("transparent"),
	valueConverter: (v) => new Color(v),
});
fillColorProperty.register(PolygonBase);

export const holesProperty = new Property<PolygonBase, Common.Coordinate[]>({
	name: "holes"
});
holesProperty.register(PolygonBase);

export const isGeodesicProperty = new Property<PolygonBase, boolean>({
	name: "isGeodesic",
	defaultValue: false,
	valueConverter: booleanConverter,
});
isGeodesicProperty.register(PolygonBase);

export const isTappableProperty = new Property<PolygonBase, boolean>({
	name: "isTappable",
	defaultValue: false,
	valueConverter: booleanConverter,
});
isTappableProperty.register(PolygonBase);

export const isVisibleProperty = new Property<PolygonBase, boolean>({
	name: "isVisible",
	defaultValue: true,
	valueConverter: booleanConverter,
});
isVisibleProperty.register(PolygonBase);

export const pathProperty = new Property<PolygonBase, Common.Coordinate[]>({
	name: "path"
});
pathProperty.register(PolygonBase);

export const strokeColorProperty = new Property<PolygonBase, Color>({
	name: "strokeColor",
	equalityComparer: Color.equals,
    defaultValue: new Color("#000000"),
	valueConverter: (v) => new Color(v),
});
strokeColorProperty.register(PolygonBase);

export const strokeWidthProperty = new Property<PolygonBase, number>({
	name: "strokeWidth",
	defaultValue: 1,
	valueConverter: parseFloat,
});
strokeWidthProperty.register(PolygonBase);

export const zIndexProperty = new Property<PolygonBase, number>({
	name: "zIndex",
	defaultValue: 0,
	valueConverter: (v) => parseInt(v),
});
zIndexProperty.register(PolygonBase);