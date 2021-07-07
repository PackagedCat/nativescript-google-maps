import { Point } from "@nativescript/core/ui/core/view";
import * as Common from "../common";

export function coordinateToNativeLatLng(coordinate: Common.Coordinate) {
    return new com.google.android.gms.maps.model.LatLng(coordinate.latitude, coordinate.longitude);
}

export function nativeLatLngToCoordinate(nativeLatLng: com.google.android.gms.maps.model.LatLng): Common.Coordinate {
    return {
        latitude: nativeLatLng.latitude,
        longitude: nativeLatLng.longitude
    };
}

export function coordinateBoundsToNativeLatLngBounds(coordinate: Common.CoordinateBounds) {
    return new com.google.android.gms.maps.model.LatLngBounds(
        coordinateToNativeLatLng(coordinate.southwest),
        coordinateToNativeLatLng(coordinate.northeast));
}

export function nativeLatLngBoundsToLatLngBounds(nativeLatLngBounds: com.google.android.gms.maps.model.LatLngBounds): Common.CoordinateBounds {
    return {
        southwest: nativeLatLngToCoordinate(nativeLatLngBounds.southwest),
        northeast: nativeLatLngToCoordinate(nativeLatLngBounds.northeast),
    };
}

export function pointToNativePoint(point: Point) {
    return new android.graphics.Point(point.x, point.y);
}

export function nativePointToPoint(nativePoint: android.graphics.Point): Point {
    return {
        x: nativePoint.x,
        y: nativePoint.y
    };
}

export function nativeCameraPositionToCameraPosition(nativeCameraPosition: com.google.android.gms.maps.model.CameraPosition): Common.CameraPosition {
    return {
        bearing: nativeCameraPosition.bearing,
        position: nativeLatLngToCoordinate(nativeCameraPosition.target),
        tilt: nativeCameraPosition.tilt,
        zoom: nativeCameraPosition.zoom
    };
}