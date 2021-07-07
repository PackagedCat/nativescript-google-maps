# A Google Maps Plugin for NativeScript

## WORK IN PROGRESS!

Add your plugin badges here. See [nativescript-urlhandler](https://github.com/hypery2k/nativescript-urlhandler) for example.

Then describe what's the purpose of your plugin. 

In case you develop UI plugin, this is where you can add some screenshots.

## Installation

```javascript
ns plugin add nativescript-gmaps
```

Setting the Google Maps API key

### Android

In your `App_Resources/Android/AndroidManifest.xml` file put in the `<application>` section the following line replacing "GOOGLE_MAPS_API_KEY" with the Google Maps API key from the Google Developers Console:

```xml
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="GOOGLE_MAPS_API_KEY" />
```

### iOS

On iOS you just need call `setIosApiKey` with the API key before using Google Maps:

#### NativeScript/Angular
	
```javascript
import { GoogleMaps } from "nativescript-google-maps";

GoogleMap.setIosApiKey("GOOGLE_MAPS_API_KEY");
```

#### Vue
	
```javascript
import Vue from "nativescript-vue";
import GoogleMaps from "nativescript-google-maps/vue";

GoogleMaps.setIosApiKey("GOOGLE_MAPS_API_KEY");

Vue.use(GoogleMaps);
```

## Basic usage 

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

## API & Examples

[GoogleMap](./docs/GoogleMap.md)

[Circle](./docs/Circle.md)

[GroundOverlay](./docs/GroundOverlay.md)

[Marker](./docs/Marker.md)

[Polygon](./docs/Polygon.md)

[Polyline](./docs/Polyline.md)
    
## License

Apache License Version 2.0, January 2004
