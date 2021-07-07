import * as GoogleMaps from "..";

export default {
    install(Vue) {
        Vue.registerElement("GMap", () => GoogleMaps.GoogleMap);
        Vue.registerElement("GMapCircle", () => GoogleMaps.Circle);
        Vue.registerElement("GMapGroundOverlay", () => GoogleMaps.GroundOverlay);
        Vue.registerElement("GMapMarker", () => GoogleMaps.Marker);
        Vue.registerElement("GMapPolygon", () => GoogleMaps.Polygon);
        Vue.registerElement("GMapPolyline", () => GoogleMaps.Polyline);
        Vue.registerElement("GMapTileOverlay", () => GoogleMaps.TileOverlay);
    },
    setIosApiKey(key: string) {
        GoogleMaps.GoogleMap.setIosApiKey(key);
    }
};
