# GoogleMap

[API](https://github.com/EddyVerbruggen/nativescript-feedback)

[Examples](https://github.com/EddyVerbruggen/nativescript-feedback)


## API

### Properties

<table>
<tr>
<th>
    Name
</th>
<th>
    Default
</th>
<th>
    Description
</th>
</tr>
<tr>
<td>

  ```typescript
  cameraPosition: CameraPosition;
  ```
</td>
<td>

  ```javascript
  {
    position: {
      latitude: 0,
      longitude: 0
    },
    zoom: 0
  }
  ```
</td>
<td>
  Gets or sets the current position of the camera.
</td>
</tr>
<tr>
<td>

  ```typescript
  isAmbientEnabled: boolean;
  ```
</td>
<td>

  `false`
</td>
<td>
  Android only: Sets the value whether ambient-mode styling should be enabled.
</td>
</tr>
<tr>
<td>

  ```typescript
  isBuildingsEnabled: boolean;
  ```
</td>
<td>

  `false`
</td>
<td>
  Gets or sets the value whether 3D buildings layer is enabled.
</td>
</tr>
<tr>
<td>

  ```typescript
  isCameraAnimationEnabled: boolean;
  ```
</td>
<td>

  `true`
</td>
<td>
  Gets or sets the value whether animate the movement of the camera.
</td>
</tr>
<tr>
<td>

  ```typescript
  isIndoorEnabled: boolean;
  ```
</td>
<td>

  `false`
</td>
<td>
  Gets or sets the value whether indoor maps are currently enabled.
</td>
</tr>
<tr>
<td>

  ```typescript
  isMyLocationEnabled: boolean;
  ```
</td>
<td>

  `false`
</td>
<td>
  Gets or sets the value whether enables or disables the my-location layer.
</td>
</tr>
<tr>
<td>

  ```typescript
  isTrafficEnabled: boolean;
  ```
</td>
<td>

  `false`
</td>
<td>
  Gets or sets the value whether the map is drawing traffic data.
</td>
</tr>
<tr>
<td>

  ```typescript
  mapStyle: string;
  ```
</td>
<td>

  `false`
</td>
<td>
  Gets or sets the styling of the base map.
</td>
</tr>
<tr>
<td>

  ```typescript
  mapType: MapType;
  ```
</td>
<td>

  `MapType.normal`
</td>
<td>
  Gets or sets the type of map that's currently displayed.
</td>
</tr>
<tr>
<td>

  ```typescript
  maxZoomLevel: number;
  ```
</td>
<td>
  21
</td>
<td>
  Gets or sets the maximum zoom level for the current camera position. This takes into account what map type is currently being used, e.g., satellite or terrain may have a lower max zoom level than the base map tiles.
</td>
</tr>
<tr>
<td>

  ```typescript
  minZoomLevel: number;
  ```
</td>
<td>
  0
</td>
<td>
  Gets or sets the minimum zoom level. This is the same for every location (unlike the maximum zoom level) but may vary between devices and map sizes.
</td>
</tr>
<tr>
<td>
  <pre><code>projection: <a href="./Projection.md">Projection</a>;</code></pre>
</td>
<td>
  
</td>
<td>
  Gets a Projection object that you can use to convert between screen coordinates and latitude/longitude coordinates.
</td>
</tr>
<tr>
<td>

  ```typescript
  uiSettings: UiSettings;
  ```
</td>
<td>
  
  ```javascript
  {
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
  ```
</td>
<td>
  Gets or set the user interface settings for the map.
</td>
</tr>
</table>

### Methods

<table>
<tr>
<th>
  Name
</th>
<th>
  Description
</th>
</tr>
<tr>
<td>
  clear();
</td>
<td>
  Removes all markers, polylines, polygons, overlays, etc from the map.
</td>
</tr>
</table>

## Examples

### NativeScript

```xml
<Page
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:gmap="nativescript-google-maps">
    <GridLayout>
        <gmap:GoogleMap
            cameraPosition="-33.852,151.211">
            <gmap:Marker
                position="-33.852,151.211"/>
        </GoogleMap>
    </GridLayout>
</Page>
```

### Vue
	
```vue
<template>
    <Page>
        <GridLayout>
            <GoogleMap
                :cameraPosition="cameraPosition">
                <GMapMarker
                    :position="markerPosition"/>
            </GoogleMap>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";

export default Vue.extend({
    data() {
        return {
            cameraPosition: {
                latitude: -33.852,
                longitude: 151.211,
                zoom: 18
            },
            markerPosition: {
                latitude: -33.852,
                longitude: 151.211
            }
        }
    }
});
</script>
```