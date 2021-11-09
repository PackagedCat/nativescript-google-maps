import { ProjectionBase } from "./index.common";
import { Coordinate, Point, VisibleRegion} from "../models";

export class Projection extends ProjectionBase {
    public nativeObject: GMSProjection;

    public fromScreenLocation(point: Point): Coordinate {
        return this.nativeObject.coordinateForPoint(point);
    }

    public getVisibleRegion(): VisibleRegion {
        return this.nativeObject.visibleRegion();
    }

    public toScreenLocation(location: Coordinate): Point {
        return this.nativeObject.pointForCoordinate(location);
    }
}