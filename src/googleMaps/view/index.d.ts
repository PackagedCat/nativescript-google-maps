import { EventData, GestureTypes } from "@nativescript/core";
import { Projection } from "../projection";
import { Marker } from "../MapObjects/Marker";
import { Circle } from "../Circle";
import { Polygon } from "../Polygon";
import { Polyline } from "../Polyline";
import { GroundOverlay } from "../GroundOverlay";

/**
 * Represent a aggregates all camera position parameters such as location, zoom level, tilt angle, and bearing.
 */
export interface CameraPosition {
    /** 
     * Sets the direction that the camera is pointing in, in degrees clockwise from north.
     */
    bearing?: number;

    /**
     * Sets the location that the camera is pointing at.
     */
    position?: Coordinate;

    /**
     * Sets the angle, in degrees, of the camera angle from the nadir (directly facing the Earth).
     */
    tilt?: number;

    /**
     * Sets zoom level near the center of the screen.
     */
    zoom?: number;
}

export interface MapObjectEventData<T> extends EventData {
    mapObject: T;
}

export enum MapType {
    /**
     * No base map tiles.
     */
    none = 0,

    /**
     * Basic maps.
     */
    normal = 1,

    /**
     * Satellite maps with no labels.
     */
    satellite = 2,

    /**
     * Terrain maps.
     */
    terrain = 3,

    /**
     * Satellite maps with a transparent layer of major streets.
     */
    hybrid = 4
}

/**
 * Settings for the user interface of a GoogleMap.
 */
export interface UiSettings {
    /**
     * Gets or sets whether the compass is enabled/disabled.
     */
    isCompassEnabled?: boolean;

    /**
     * Gets or sets whether the indoor level picker is enabled/disabled.
     */
    isIndoorLevelPickerEnabled?: boolean;

    /**
     * Android only: Gets or sets whether the Map Toolbar is enabled/disabled.
     */
    isMapToolbarEnabled?: boolean;

    /**
     * Gets or sets whether the my-location button is enabled/disabled.
     */
    isMyLocationButtonEnabled?: boolean;

    /**
     * Gets or sets whether rotate gestures are enabled/disabled.
     */
    isRotateGesturesEnabled?: boolean;

    /**
     * Gets or sets whether scroll gestures are enabled/disabled.
     */
    isScrollGesturesEnabled?: boolean;

    /**
     * Gets or sets whether tilt gestures are enabled/disabled.
     */
    isTiltGesturesEnabled?: boolean;

    /**
     * Android only: Gets or sets whether the zoom controls are enabled/disabled.
     */
    isZoomControlsEnabled?: boolean;

    /**
     * Gets or sets whether zoom gestures are enabled/disabled.
     */
    isZoomGesturesEnabled?: boolean;
}

export class GoogleMap {
	mapPromise: Promise<any>;

    /**
     * Gets or sets the current position of the camera.
     */
    cameraPosition: CameraPosition;

    /**
     * Android only: Sets the value whether ambient-mode styling should be enabled.
     */
    isAmbientEnabled: boolean;

    /**
     * Gets or sets the value whether 3D buildings layer is enabled.
     */
    isBuildingsEnabled: boolean;

    /**
     * Gets or sets the value whether animate the movement of the camera.
     */
    isCameraAnimationEnabled: boolean;

    /**
     * Gets or sets the value whether indoor maps are currently enabled.
     */
    isIndoorEnabled: boolean;

    /**
     * Gets or sets the value whether enables or disables the my-location layer.
     */
    isMyLocationEnabled: boolean;

    /**
     * Gets or sets the value whether the map is drawing traffic data.
     */
    isTrafficEnabled: boolean;

    /**
     * Gets or sets the styling of the base map.
     */
    mapStyle: string;

    /**
     * Gets or sets the type of map that's currently displayed.
     */
    mapType: MapType;

    /**
     * Gets or sets the maximum zoom level for the current camera position. 
     * This takes into account what map type is currently being used, e.g.,
     * satellite or terrain may have a lower max zoom level than the base map tiles.
     */
    maxZoomLevel: number;

    /** 
     * Gets or sets the minimum zoom level.
     * This is the same for every location (unlike the maximum zoom level)
     * but may vary between devices and map sizes.
     */
    minZoomLevel: number;

    /**
     * Gets a Projection object that you can use to convert between screen coordinates and latitude/longitude coordinates.
     */
    projection: Projection;

    /**
     * Gets or set the user interface settings for the map.
     */
    uiSettings: UiSettings;

    /**
     * Removes all markers, polylines, polygons, overlays, etc from the map.
     */
    clear();

    static setIosApiKey(apiKey: string);

    on(eventNames: string | GestureTypes, callback: (args: EventData) => void, thisArg?: any);

    on(eventName: "cameraIdle", callback: (args: EventData) => void, thisArg?: any);
    on(eventName: "cameraMove", callback: (args: EventData) => void, thisArg?: any);
    on(eventName: "cameraMoveCanceled", callback: (args: EventData) => void, thisArg?: any);
    on(eventName: "cameraMoveStart", callback: (args: EventData) => void, thisArg?: any);

    on(eventName: "mapReady", callback: (args: EventData) => void, thisArg?: any);
    on(eventName: "mapTap", callback: (args: EventData) => void, thisArg?: any);
    on(eventName: "mapLoaded", callback: (args: EventData) => void, thisArg?: any);
    on(eventName: "mapLongTap", callback: (args: EventData) => void, thisArg?: any);

    on(eventName: "markerTap", callback: (args: MapObjectEventData<Marker>) => void, thisArg?: any);
    on(eventName: "markerDrag", callback: (args: MapObjectEventData<Marker>) => void, thisArg?: any);
    on(eventName: "markerDragEnd", callback: (args: MapObjectEventData<Marker>) => void, thisArg?: any);
    on(eventName: "markerDragStart", callback: (args: MapObjectEventData<Marker>) => void, thisArg?: any);

    on(eventName: "circleTap", callback: (args: MapObjectEventData<Circle>) => void, thisArg?: any);
    on(eventName: "polygonTap", callback: (args: MapObjectEventData<Polygon>) => void, thisArg?: any);
    on(eventName: "polylineTap", callback: (args: MapObjectEventData<Polyline>) => void, thisArg?: any);
    on(eventName: "poiTap", callback: (args: MapObjectEventData<PointOfInterest>) => void, thisArg?: any);
    on(eventName: "groundOverlayTap", callback: (args: MapObjectEventData<GroundOverlay>) => void, thisArg?: any);

    on(eventName: "myLocationButtonTap", callback: (args: EventData) => void, thisArg?: any);
    on(eventName: "myLocationTap", callback: (args: EventData) => void, thisArg?: any);

    off(eventName: "cameraIdle", callback: (args: EventData) => void, thisArg?: any);
    off(eventName: "cameraMove", callback: (args: EventData) => void, thisArg?: any);
    off(eventName: "cameraMoveCanceled", callback: (args: EventData) => void, thisArg?: any);
    off(eventName: "cameraMoveStart", callback: (args: EventData) => void, thisArg?: any);

    off(eventName: "mapReady", callback: (args: EventData) => void, thisArg?: any);
    off(eventName: "mapTap", callback: (args: EventData) => void, thisArg?: any);
    off(eventName: "mapLoaded", callback: (args: EventData) => void, thisArg?: any);
    off(eventName: "mapLongTap", callback: (args: EventData) => void, thisArg?: any);

    off(eventName: "markerTap", callback: (args: MapObjectEventData<Marker>) => void, thisArg?: any);
    off(eventName: "markerDrag", callback: (args: MapObjectEventData<Marker>) => void, thisArg?: any);
    off(eventName: "markerDragEnd", callback: (args: MapObjectEventData<Marker>) => void, thisArg?: any);
    off(eventName: "markerDragStart", callback: (args: MapObjectEventData<Marker>) => void, thisArg?: any);

    off(eventName: "circleTap", callback: (args: MapObjectEventData<Circle>) => void, thisArg?: any);
    off(eventName: "polygonTap", callback: (args: MapObjectEventData<Polygon>) => void, thisArg?: any);
    off(eventName: "polylineTap", callback: (args: MapObjectEventData<Polyline>) => void, thisArg?: any);
    off(eventName: "poiTap", callback: (args: MapObjectEventData<PointOfInterest>) => void, thisArg?: any);
    off(eventName: "groundOverlayTap", callback: (args: MapObjectEventData<GroundOverlay>) => void, thisArg?: any);

    off(eventName: "myLocationButtonTap", callback: (args: EventData) => void, thisArg?: any);
    off(eventName: "myLocationTap", callback: (args: EventData) => void, thisArg?: any);
}