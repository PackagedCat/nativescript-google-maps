import { Point } from "@nativescript/core/ui/core/view";

/**
 * Represent a pair of latitude and longitude coordinates, stored as degrees.
 */
export interface Coordinate {
    /**
     * Latitude, in degrees.
     */
    latitude: number;

    /**
     * Longitude, in degrees.
     */
    longitude: number;
}

/**
 * Represent a latitude/longitude aligned rectangle.
 */
export interface CoordinateBounds {
    /**
     * Northeast corner of the bound.
     */
    northeast: Coordinate;

    /**
     * Southwest corner of the bound.
     */
    southwest: Coordinate;
}

/**
 * Contains the four points defining the four-sided polygon that is visible in a map's camera.
 * This polygon can be a trapezoid instead of a rectangle, because a camera can have tilt.
 * If the camera is directly over the center of the camera, the shape is rectangular,
 * but if the camera is tilted, the shape will appear to be a trapezoid whose smallest side is closest to the point of view.
 */
export interface VisibleRegion {
    /**
     * Coordinate object that defines the far left corner of the camera.
     */
    farLeft: Coordinate;

    /**
     * Coordinate object that defines the far right corner of the camera.
     */
    farRight: Coordinate;

    /**
     * Coordinate object that defines the bottom left corner of the camera.
     */
    nearLeft: Coordinate;

    /**
     * Coordinate object that defines the bottom right corner of the camera.
     */
    nearRight: Coordinate;
}

export function coordinatePropertyValueConverter(value: string): Coordinate {
    const splitedValue = value.split(",");
    if (splitedValue.length < 2) {
        throw new Error("Invalid position property of GMapMarker");
    }

    return {
        latitude: parseFloat(splitedValue[0]),
        longitude: parseFloat(splitedValue[1])
    };
}

export { Point };