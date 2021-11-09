import { Point } from "@nativescript/core/ui/core/view";
import { Coordinate, CoordinateBounds } from "../models";

export function coordinateToNativeLatLng(coordinate: Coordinate) {
    return new com.google.android.gms.maps.model.LatLng(coordinate.latitude, coordinate.longitude);
}

export function nativeLatLngToCoordinate(nativeLatLng: com.google.android.gms.maps.model.LatLng): Coordinate {
    return {
        latitude: nativeLatLng.latitude,
        longitude: nativeLatLng.longitude
    };
}

export function coordinateBoundsToNativeLatLngBounds(coordinate: CoordinateBounds) {
    return new com.google.android.gms.maps.model.LatLngBounds(
        coordinateToNativeLatLng(coordinate.southwest),
        coordinateToNativeLatLng(coordinate.northeast));
}

export function nativeLatLngBoundsToLatLngBounds(nativeLatLngBounds: com.google.android.gms.maps.model.LatLngBounds): CoordinateBounds {
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