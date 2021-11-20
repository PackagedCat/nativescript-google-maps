import * as GoogleMaps from "..";

export default {
    install(Vue) {
        Vue.registerElement("Gmap", () => GoogleMaps.GoogleMap);
        Vue.registerElement("GmapCircle", () => GoogleMaps.Circle);
        Vue.registerElement("GmapGroundOverlay", () => GoogleMaps.GroundOverlay);
        Vue.registerElement("GmapMarker", () => GoogleMaps.Marker);
        Vue.registerElement("GmapPolygon", () => GoogleMaps.Polygon);
        Vue.registerElement("GmapPolyline", () => GoogleMaps.Polyline);
        Vue.registerElement("GmapTileOverlay", () => GoogleMaps.TileOverlay);
    },
    setIosApiKey(key: string) {
        GoogleMaps.GoogleMap.setIosApiKey(key);
    }
};
