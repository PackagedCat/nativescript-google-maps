import { Directive, NgModule } from "@angular/core";
import { registerElement } from "@nativescript/angular";
import * as GoogleMaps from "..";

@Directive({ selector: "GMap" })
export class GMapDirective {}

@NgModule({
    declarations: [GMapDirective],
    exports: [GMapDirective]
})
export class GMapModule {}

registerElement("GMap", () => GoogleMaps.GoogleMap);
registerElement("GMapCircle", () => GoogleMaps.Circle);
registerElement("GMapGroundOverlay", () => GoogleMaps.GroundOverlay);
registerElement("GMapMarker", () => GoogleMaps.Marker);
registerElement("GMapPolygon", () => GoogleMaps.Polygon);
registerElement("GMapPolyline", () => GoogleMaps.Polyline);
registerElement("GMapTileOverlay", () => GoogleMaps.TileOverlay);
