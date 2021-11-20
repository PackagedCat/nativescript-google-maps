import { Coordinate } from "../models";

/**
 * Contains information about a PointOfInterest that was clicked on.
 */
export interface PointOfInterest {
    /**
     * The Coordinate of the POI.
     */
    location: Coordinate;
    /**
     * The name of the POI.
     */
    name: string;
    /**
     * The placeId of the POI.
     */
    placeId: string;
}
