import { ProjectionBase } from "./index.common";
import * as Common from "../../common";
import * as Converters from "../../converters/converters.android";

export class Projection extends ProjectionBase {
    public nativeObject: com.google.android.gms.maps.Projection;

    public fromScreenLocation(point: Common.Point): Common.Coordinate {
        return Converters.nativeLatLngToCoordinate(
            this.nativeObject.fromScreenLocation(
                Converters.pointToNativePoint(point)));
    }

    public getVisibleRegion(): Common.VisibleRegion {
        const nativeVisibleRegion = this.nativeObject.getVisibleRegion();
        return {
            farLeft: Converters.nativeLatLngToCoordinate(nativeVisibleRegion.farLeft),
            farRight: Converters.nativeLatLngToCoordinate(nativeVisibleRegion.farRight),
            nearLeft: Converters.nativeLatLngToCoordinate(nativeVisibleRegion.nearLeft),
            nearRight: Converters.nativeLatLngToCoordinate(nativeVisibleRegion.nearRight),
        };
    }

    public toScreenLocation(location: Common.Coordinate): Common.Point {
        return Converters.nativePointToPoint(
            this.nativeObject.toScreenLocation(
                Converters.coordinateToNativeLatLng(location)));
    }
}
