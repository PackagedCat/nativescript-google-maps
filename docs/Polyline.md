# Polyline

A polyline is a list of points, where line segments are drawn between consecutive points.

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
  isGeodesic: boolean;
  ```
</td>
<td>
  Gets or sets whether to draw each segment of the line as a geodesic or not.

  Indicates whether the segments of the polyline should be drawn as geodesics, as opposed to straight lines on the Mercator projection. A geodesic is the shortest path between two points on the Earth's surface. 
  
  The geodesic curve is constructed assuming the Earth is a sphere.
</td>
</tr>

<tr>
<td>

  ```typescript
  isTappable: boolean;
  ```
</td>
<td>
  Gets or sets the tappability of the polyline.
</td>
</tr>

<tr>
<td>

  ```typescript
  isVisible: boolean;
  ```
</td>
<td>
  Gets or sets the visibility of the polyline.
</td>
</tr>

<tr>
<td>
  <pre><code>path: <a href="./Coordinate.md">Coordinate</a>[];</code></pre>
</td>
<td>
  Gets or sets the path of the polyline.

  The vertices of the line. Line segments are drawn between consecutive points. A polyline is not closed by default; to form a closed polyline, the start and end points must be the same.
</td>
</tr>

<tr>
<td>

  ```typescript
  strokeColor: Color;
  ```
</td>
<td>
  Gets or sets the stroke color of the polyline.
</td>
</tr>

<tr>
<td>

  ```typescript
  strokeWidth: number;
  ```
</td>
<td>
  Gets or sets the stroke width of the polyline.

  Line segment width in screen pixels. The width is constant and independent of the camera's zoom level. The default value is 10.
</td>
</tr>

<tr>
<td>

  ```typescript
  zIndex: number;
  ```
</td>
<td>
  Gets or sets the zIndex of the polyline.
</td>
</tr>

</table>