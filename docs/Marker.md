# Marker

An icon placed at a particular point on the map's surface. A marker icon is drawn oriented against the device's screen rather than the map's surface; i.e., it will not necessarily change orientation due to map rotations, tilting, or zooming.

### Properties

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

  ```typescript
  anchor: Point;
  ```
</td>
<td>
  Sets the anchor point for the marker.

  The point on the image that will be placed at the Coordinate position of the marker. This defaults to 50% from the left of the image and at the bottom of the image.
</td>
</tr>

<tr>
<td>

  ```typescript
  defaultIconColor: Color;
  ```
</td>
<td>
  Sets the color of the default icon for the marker.
</td>
</tr>

<tr>
<td>

  ```typescript
  icon: string | ImageSource | ImageAsset;
  ```
</td>
<td>
  Sets the icon for the marker.

  A bitmap that's displayed for the marker. If the icon is left unset, a default icon is displayed. You can specify an alternative coloring of the default icon.
</td>
</tr>

<tr>
<td>

  ```typescript
  isDraggable: boolean;
  ```
</td>
<td>
  Gets or sets the draggability of the marker.
</td>
</tr>

<tr>
<td>

  ```typescript
  isFlat: boolean;
  ```
</td>
<td>
  Gets or sets whether this marker should be flat against the map true or a billboard facing the camera false.

  If the marker is flat against the map, it will remain stuck to the map as the camera rotates and tilts but will still remain the same size as the camera zooms, unlike a GroundOverlay. If the marker is a billboard, it will always be drawn facing the camera and will rotate and tilt with the camera. The default is a billboard (false).
</td>
</tr>

<tr>
<td>

  ```typescript
  isVisible: boolean;
  ```
</td>
<td>
  Gets or sets the visibility of this marker.
</td>
</tr>

<tr>
<td>

  ```typescript
  opacity: number;
  ```
</td>
<td>
  Gets or sets the opacity of the marker. Defaults to 1.0.
</td>
</tr>

<tr>
<td>
  <pre><code>position: <a href="./Coordinate.md">Coordinate</a>;</code></pre>
</td>
<td>
  Gets or sets the position of the marker.
</td>
</tr>

<tr>
<td>

  ```typescript
  preventDefaultBehavior: boolean;
  ```
</td>
<td>
  Gets or sets the value indicates that the default behavior should not occur.

  If false the camera to move to the marker and an info window to appear. Default false.
</td>
</tr>

<tr>
<td>

  ```typescript
  rotation: number;
  ```
</td>
<td>
  Gets or sets the rotation of the marker in degrees clockwise about the marker's anchor point.

  The rotation of the marker in degrees clockwise about the marker's anchor point. The axis of rotation is perpendicular to the marker. A rotation of 0 corresponds to the default position of the marker. When the marker is flat on the map, the default position is North aligned and the rotation is such that the marker always remains flat on the map. When the marker is a billboard, the default position is pointing up and the rotation is such that the marker is always facing the camera. The default value is 0.
</td>
</tr>

<tr>
<td>

  ```typescript
  snippet: string;
  ```
</td>
<td>
  Gets or sets the snippet of the marker.

  Additional text that's displayed below the title. You can change this value at any time.
</td>
</tr>

<tr>
<td>

  ```typescript
  title: string;
  ```
</td>
<td>
  Gets or sets the title of the marker.

  A text string that's displayed in an info window when the user taps the marker. You can change this value at any time.
</td>
</tr>

<tr>
<td>

  ```typescript
  zIndex: number;
  ```
</td>
<td>
  Gets or sets the zIndex of the marker.

  The draw order for the marker. The markers are drawn in order of the zIndex, with the highest zIndex marker drawn on top. By setting the zIndex property for each marker, you can control which tap target your user is most likely to hit. The default value is 0.
</td>
</tr>

</table>