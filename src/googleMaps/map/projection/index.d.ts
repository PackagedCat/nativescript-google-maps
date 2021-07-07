import * as Common from "../../common";

/**
 * A projection is used to translate between on screen location
 * and geographic coordinates on the surface of the Earth (Coordinate).
 * Screen location is in screen pixels (not display pixels) with respect
 * to the top left corner of the map (and not necessarily of the whole screen).
 */
 export class Projection {
    public nativeObject: any;

    constructor(nativeObject: any) {
        this.nativeObject = nativeObject;
    }

    /**
     * Returns the geographic location that corresponds to a screen location.
     */
    public fromScreenLocation(point: Common.Point): Common.Coordinate;

    /**
     * Gets a projection of the viewing frustum for converting between screen coordinates and geo-latitude/longitude coordinates.
     */
    public getVisibleRegion(): Common.VisibleRegion;

    /**
     * Returns a screen location that corresponds to a geographical coordinate (Coordinate).
     */
    public toScreenLocation(location: Common.Coordinate): Common.Point;
}