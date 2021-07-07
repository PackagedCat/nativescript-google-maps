import { ProjectionBase } from "./index.common";
import * as Common from "../../common";

export class Projection extends ProjectionBase {
    public nativeObject: GMSProjection;

    public fromScreenLocation(point: Common.Point): Common.Coordinate {
        return this.nativeObject.coordinateForPoint(point);
    }

    public getVisibleRegion(): Common.VisibleRegion {
        return this.nativeObject.visibleRegion();
    }

    public toScreenLocation(location: Common.Coordinate): Common.Point {
        return this.nativeObject.pointForCoordinate(location);
    }
}