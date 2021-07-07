import {
    booleanConverter,
    Builder,
    EventData,
    Label,
    Placeholder,
    Property,
    View
} from "@nativescript/core";
import { KeyedTemplate, Template } from "@nativescript/core/ui/core/view";
import * as Common from "../../common";
import { Projection } from "../projection";

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

export abstract class GoogleMapBase extends View {
    //#region Events name

    public static cameraIdleEvent = "cameraIdle";
    public static cameraMoveEvent = "cameraMove";
    public static cameraMoveCanceledEvent = "cameraMoveCanceled";
    public static cameraMoveStartEvent = "cameraMoveStart";

    public static mapReadyEvent = "mapReady";
    public static mapTapEvent = "mapTap";
    public static mapLoadedEvent = "mapLoadedEvent";
    public static mapLongTapEvent = "mapLongTap";

    public static markerTapEvent = "markerTap";
    public static markerDragEvent = "markerDrag";
    public static markerDragEndEvent = "markerDragEnd";
    public static markerDragStartEvent = "markerDragStart";

    public static circleTapEvent = "circleTap";
    public static polygonTapEvent = "polygonTap";
    public static polylineTapEvent = "polylineTap";
    public static poiTapEvent = "poiTap";
    public static groundOverlayTapEvent = "groundOverlayTap";

    public static myLocationButtonTapEvent = "myLocationButtonTap";
    public static myLocationTapEvent = "myLocationTap";

    //#endregion
    
	// TODO: get rid of such hacks.
	public static knownFunctions = ["infoWindowTemplateSelector", "itemIdGenerator"]; //See component-builder.ts isKnownFunction
    
    protected _mapObjects = new Array<Common.MapObject>();

    // Android only: Need for await map initialization
    // to set properties of google map and map objects
    public mapPromise: Promise<any>;
    protected mapPromiseResolve: (value?: any) => void;
    protected mapPromiseReject: (reason?: any) => void;

    
    //#region Info window templates

    public _defaultInfoWindowTemplate: KeyedTemplate = {
		key: "default",
		createView: () => {
			if (this.infoWindowTemplate) {
				return Builder.parse(this.infoWindowTemplate, this);
			}

			return undefined;
		},
	};

	public _infoWindowTemplatesInternal = new Array<KeyedTemplate>(this._defaultInfoWindowTemplate);
	private _infoWindowTemplateSelector: (item: any, index: number, items: any) => string;
	private _infoWindowTemplateSelectorBindable = new Label();
	private _itemIdGenerator: (item: any, index: number, items: any) => number = (_item: any, index: number) => index;
    
	public get itemIdGenerator(): (item: any, index: number, items: any) => number {
		return this._itemIdGenerator;
	}

	public set itemIdGenerator(generatorFn: (item: any, index: number, items: any) => number) {
		this._itemIdGenerator = generatorFn;
	}

	public get infoWindowTemplateSelector(): string | ((item: any, index: number, items: any) => string) {
		return this._infoWindowTemplateSelector;
	}

	public set infoWindowTemplateSelector(value: string | ((item: any, index: number, items: any) => string)) {
		if (typeof value === "string") {
			this._infoWindowTemplateSelectorBindable.bind({
				sourceProperty: null,
				targetProperty: "templateKey",
				expression: value,
			});
			this._infoWindowTemplateSelector = (item: any, index: number, items: any) => {
				item["$index"] = index;

				if (this._infoWindowTemplateSelectorBindable.bindingContext === item) {
					this._infoWindowTemplateSelectorBindable.bindingContext = null;
				}

				this._infoWindowTemplateSelectorBindable.bindingContext = item;

				return this._infoWindowTemplateSelectorBindable.get("templateKey");
			};
		} else if (typeof value === "function") {
			this._infoWindowTemplateSelector = value;
		}
	}

	// private _getDataItem(index: number): any {
	// 	const thisItems = <ItemsSource>this.items;
	// 	return thisItems.getItem ? thisItems.getItem(index) : thisItems[index];
	// }

	// public _getMarkerInfoWindowTemplate(index: number): KeyedTemplate {
	// 	let templateKey = "default";
	// 	if (this._infoWindowTemplateSelector) {
	// 		const dataItem = this._getDataItem(index);
	// 		templateKey = this._infoWindowTemplateSelector(dataItem, index, this.items);
	// 	}

	// 	for (let i = 0, length = this._infoWindowTemplatesInternal.length; i < length; i++) {
	// 		if (this._infoWindowTemplatesInternal[i].key === templateKey) {
	// 			return this._infoWindowTemplatesInternal[i];
	// 		}
	// 	}

	// 	// This is the default template
	// 	return this._infoWindowTemplatesInternal[0];
	// }

	// public _prepareItem(item: View, index: number) {
	// 	if (item != null) {
	// 		item.bindingContext = this._getDataItem(index);
	// 	}
	// }

    //#endregion

    /**
     * Gets or sets the current position of the camera.
     */
    public cameraPosition: Common.CameraPosition;

    /**
     * Removes all markers, polylines, polygons, overlays, etc from the map.
     */
    public abstract clear();
    
    /**
     * Android only: Sets a contentDescription for the map.
     */
    public contentDescription: string;

    /**
     * Android only: Sets the value whether ambient-mode styling should be enabled.
     */
    public isAmbientEnabled: boolean;

    /**
     * Gets or sets the value whether 3D buildings layer is enabled.
     */
    public isBuildingsEnabled: boolean;

    /**
     * Animates the movement of the camera
     */
    public isCameraAnimationEnabled: boolean = true;

    /**
     * Gets or sets the value whether indoor maps are currently enabled.
     */
    public isIndoorEnabled: boolean;

    /**
     * Gets or sets the value whether enables or disables the my-location layer.
     */
    public isMyLocationEnabled: boolean;

    /**
     * Gets or sets the value whether the map is drawing traffic data.
     */
    public isTrafficEnabled: boolean;

	public infoWindowTemplate: Template;

	public infoWindowTemplates: Array<KeyedTemplate>;

    /**
     * Gets or sets the styling of the base map.
     */
    public mapStyle: string;

    /**
     * Gets or sets the type of map that's currently displayed.
     */
    public mapType: MapType;

    /**
     * Gets or sets the maximum zoom level for the current camera position. 
     * This takes into account what map type is currently being used, e.g.,
     * satellite or terrain may have a lower max zoom level than the base map tiles.
     */
    public maxZoomLevel: number;

    /** 
     * Gets or sets the minimum zoom level.
     * This is the same for every location (unlike the maximum zoom level)
     * but may vary between devices and map sizes.
     */
    public minZoomLevel: number;

    /**
     * Returns a Projection object that you can use to convert between screen coordinates and latitude/longitude coordinates.
     */
    public abstract projection: Projection;

    /**
     * Gets or set the user interface settings for the map.
     */
    public uiSettings: UiSettings;

    constructor() {
        super();
        this.mapPromise = new Promise((resolve, reject) => {
            this.mapPromiseResolve = resolve;
            this.mapPromiseReject = reject;
        });
    }

	public _addChildFromBuilder(name: string, value: any) {
        // Adding Placeholder need for Vue where if no items exists in <template>
        // than it replaces that place with Placeholder
        if (value instanceof Placeholder || value instanceof Common.MapObject) {
            this._addView(value);
        }

		if (value instanceof Common.MapObject) {
            this._mapObjects.push(value);
		}
    }

    public _removeViewFromNativeVisualTree(view: Common.MapObject) {
        super._removeViewFromNativeVisualTree(view);
        for (let i = 0; i < this._mapObjects.length; i++) {
            const mapObject = this._mapObjects[i];
            if (mapObject == view) {
                this._mapObjects.splice(i, 1);
                break;
            }
        }
    }
    
    public eachChild(callback: (child: Common.MapObject) => boolean) {
        for (const child of this._mapObjects) {
            if (!callback(child)) {
                break;
            }
        }
    }

    // Wrapper for prevent exception on Android
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public static setIosApiKey(key: string) {
        //
    }
}

/** Represents the camera position property of each GoogleMap instance. */
export const cameraPositionProperty = new Property<GoogleMapBase, Common.CameraPosition>({
	name: "cameraPosition",
    defaultValue: {
        position: {
            latitude: 0,
            longitude: 0
        },
        zoom: 0
    },
	valueConverter: (value) => {
        return {
            position: Common.coordinatePropertyValueConverter(value)
        };
    }
});
cameraPositionProperty.register(GoogleMapBase);

/** Represents the content description property of each GoogleMap instance. */
export const contentDescriptionProperty = new Property<GoogleMapBase, string>({
	name: "contentDescription"
});
contentDescriptionProperty.register(GoogleMapBase);

/** Represents the ambient enabled property of each GoogleMap instance. Using just for converting value. */
export const isAmbientEnabledProperty = new Property<GoogleMapBase, boolean>({
	name: "isAmbientEnabled",
	defaultValue: false,
	valueConverter: booleanConverter,
});
isAmbientEnabledProperty.register(GoogleMapBase);

/** Represents the buildings enabled property of each GoogleMap instance. */
export const isBuildingsEnabledProperty = new Property<GoogleMapBase, boolean>({
	name: "isBuildingsEnabled",
	defaultValue: false,
	valueConverter: booleanConverter,
});
isBuildingsEnabledProperty.register(GoogleMapBase);

/** Represents the camera animation enabled property of each GoogleMap instance. */
export const isCameraAnimationEnabledProperty = new Property<GoogleMapBase, boolean>({
	name: "isCameraAnimationEnabled",
	defaultValue: true,
	valueConverter: booleanConverter,
});
isCameraAnimationEnabledProperty.register(GoogleMapBase);

/** Represents the indoor enabled property of each GoogleMap instance. */
export const isIndoorEnabledProperty = new Property<GoogleMapBase, boolean>({
	name: "isIndoorEnabled",
	defaultValue: false,
	valueConverter: booleanConverter,
});
isIndoorEnabledProperty.register(GoogleMapBase);

/** Represents the my location enabled property of each GoogleMap instance. */
export const isMyLocationEnabledProperty = new Property<GoogleMapBase, boolean>({
	name: "isMyLocationEnabled",
	defaultValue: false,
	valueConverter: booleanConverter,
});
isMyLocationEnabledProperty.register(GoogleMapBase);

/** Represents the traffic enabled property of each GoogleMap instance. */
export const isTrafficEnabledProperty = new Property<GoogleMapBase, boolean>({
	name: "isTrafficEnabled",
	defaultValue: false,
	valueConverter: booleanConverter,
});
isTrafficEnabledProperty.register(GoogleMapBase);

/**
 * Represents the item template property of each GoogleMap instance.
 */
 export const infoWindowTemplateProperty = new Property<GoogleMapBase, Template>({
	name: "infoWindowTemplate"
});
infoWindowTemplateProperty.register(GoogleMapBase);

/** Represents the info window template property of each GoogleMap instance. */
export const infoWindowTemplatesProperty = new Property<GoogleMapBase, Array<KeyedTemplate>>({
	name: "infoWindowTemplates"
});
infoWindowTemplatesProperty.register(GoogleMapBase);

/** Represents the content description property of each GoogleMap instance. */
export const mapStyleProperty = new Property<GoogleMapBase, string>({
	name: "mapStyle"
});
mapStyleProperty.register(GoogleMapBase);

/** Represents the map type property of each GoogleMap instance. */
export const mapTypeProperty = new Property<GoogleMapBase, MapType>({
    name: "mapType",
    defaultValue: MapType.normal,
	valueConverter: (value) => MapType[value.toLowerCase()]
});
mapTypeProperty.register(GoogleMapBase);

/** Represents the maximal zoom level property of each GoogleMap instance. */
export const maxZoomLevelProperty = new Property<GoogleMapBase, number>({
	name: "maxZoomLevel",
    defaultValue: 21,
	valueConverter: parseFloat
});
maxZoomLevelProperty.register(GoogleMapBase);

/** Represents the minimal zoom level property of each GoogleMap instance. */
export const minZoomLevelProperty = new Property<GoogleMapBase, number>({
	name: "minZoomLevel",
    defaultValue: 0,
	valueConverter: parseFloat
});
minZoomLevelProperty.register(GoogleMapBase);

/** Represents the UI settings property of each GoogleMap instance. */
export const uiSettingsProperty = new Property<GoogleMapBase, UiSettings>({
	name: "uiSettings",
    defaultValue: {
        isCompassEnabled: false,
        isIndoorLevelPickerEnabled: false,
        isMapToolbarEnabled: false,
        isMyLocationButtonEnabled: false,
        isRotateGesturesEnabled: true,
        isScrollGesturesEnabled: true,
        isTiltGesturesEnabled: true,
        isZoomControlsEnabled: false,
        isZoomGesturesEnabled: true
    }
});
uiSettingsProperty.register(GoogleMapBase);