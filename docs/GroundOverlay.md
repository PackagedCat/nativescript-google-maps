# GroundOverlay

A ground overlay is an image that is fixed to a map.

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
  bearing: number;
  ```
</td>
<td>
  Gets or sets the bearing of the ground overlay (the direction that the vertical axis of the ground overlay points) in degrees clockwise from north.
  
  The amount that the image should be rotated in a clockwise direction. The center of the rotation will be the image's anchor.
</td>
</tr>

<tr>
<td>
  <pre><code>bounds: <a href="./CoordinateBounds.md">CoordinateBounds</a>;</code></pre>
</td>
<td>
  Gets or sets the location of the anchor point.

  There are two ways to specify the position of the ground overlay:
  - Using a location: You must provide an image of the ground overlay, a Coordinate to which the anchor will be fixed and the width of the overlay (in meters). The anchor is, by default, 50% from the top of the image and 50% from the left of the image. This can be changed. You can optionally provide the height of the overlay (in meters). If you do not provide the height of the overlay, it will be automatically calculated to preserve the proportions of the image.
  - Using a Bounds: You must provide a CoordinateBounds which will contain the image.

  You must specify the position of the ground overlay before it is added to the map, otherwise an error will be thrown when the ground overlay is added to the map.
</td>
</tr>

<tr>
<td>

  ```typescript
  dimensions: Size | number;
  ```
</td>
<td>
  Sets the dimensions of the ground overlay.
</td>
</tr>

<tr>
<td>

  ```typescript
  image: string | ImageSource | ImageAsset;
  ```
</td>
<td>
  Sets the image for the Ground Overlay.

  You must specify an image before adding the ground overlay to the map; if not an error will be thrown when it is added to the map.
</td>
</tr>

<tr>
<td>

  ```typescript
  isTappable: boolean;
  ```
</td>
<td>
  Gets or sets the tappability of the ground overlay.
</td>
</tr>

<tr>
<td>

  ```typescript
  isVisible: boolean;
  ```
</td>
<td>
  Gets or sets the visibility of this ground overlay.
</td>
</tr>

<tr>
<td>

  ```typescript
  opacity: number;
  ```
</td>
<td>
  Sets the opacity of this ground overlay.

  Transparency of the ground overlay in the range [0..1] where 0 means the overlay is opaque and 1 means the overlay is fully transparent.
  
  If the specified bitmap is already partially transparent, the transparency of each pixel will be scaled accordingly (for example, if a pixel in the bitmap has an alpha value of 200 and you specify the transparency of the ground overlay as 0.25, then the pixel will be rendered on the screen with an alpha value of 150). 
  
  Specification of this property is optional and the default transparency is 0 (opaque).
</td>
</tr>

<tr>
<td>
  <pre><code>position: <a href="./Coordinate.md">Coordinate</a>;</code></pre>
</td>
<td>
  Gets or sets the location of the anchor point.

  There are two ways to specify the position of the ground overlay:
  - Using a location: You must provide an image of the ground overlay, a Coordinate to which the anchor will be fixed and the width of the overlay (in meters). The anchor is, by default, 50% from the top of the image and 50% from the left of the image. This can be changed. You can optionally provide the height of the overlay (in meters). If you do not provide the height of the overlay, it will be automatically calculated to preserve the proportions of the image.
  - Using a Bounds: You must provide a LatLngBounds which will contain the image.

  You must specify the position of the ground overlay before it is added to the map, otherwise an error will be thrown when the ground overlay is added to the map.
</td>
</tr>

<tr>
<td>

  ```typescript
  zIndex: number;
  ```
</td>
<td>
  Gets or sets the zIndex of this ground overlay.
</td>
</tr>

</table>