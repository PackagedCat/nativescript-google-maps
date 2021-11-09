import { ProjectionBase } from "./index.common";
import { Coordinate, Point, VisibleRegion} from "../models";
import * as Converters from "../converters/converters.android";

export class Projection extends ProjectionBase {
    public nativeObject: com.google.android.gms.maps.Projection;

    public fromScreenLocation(point: Point): Coordinate {
        return Converters.nativeLatLngToCoordinate(
            this.nativeObject.fromScreenLocation(
                Converters.pointToNativePoint(point)));
    }

    public getVisibleRegion(): VisibleRegion {
        const nativeVisibleRegion = this.nativeObject.getVisibleRegion();
        return {
            farLeft: Converters.nativeLatLngToCoordinate(nativeVisibleRegion.farLeft),
            farRight: Converters.nativeLatLngToCoordinate(nativeVisibleRegion.farRight),
            nearLeft: Converters.nativeLatLngToCoordinate(nativeVisibleRegion.nearLeft),
            nearRight: Converters.nativeLatLngToCoordinate(nativeVisibleRegion.nearRight),
        };
    }

    public toScreenLocation(location: Coordinate): Point {
        return Converters.nativePointToPoint(
            this.nativeObject.toScreenLocation(
                Converters.coordinateToNativeLatLng(location)));
    }
}
