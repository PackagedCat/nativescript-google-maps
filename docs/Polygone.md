# Polygon

A polygon on the earth's surface. A polygon can be convex or concave, it may span the 180 meridian and it can have holes that are not filled in.

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

  Indicates whether the segments of the polygon should be drawn as geodesics, as opposed to straight lines on the Mercator projection.
  
  A geodesic is the shortest path between two points on the Earth's surface. 
  
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
  Gets or sets the path that of the polygon.
</td>
</tr>

<tr>
<td>

  ```typescript
  strokeColor: Color;
  ```
</td>
<td>
  Gets or sets the color of the polygon's outline. The default value is black.
</td>
</tr>

<tr>
<td>

  ```typescript
  strokeWidth: number;
  ```
</td>
<td>
  Gets or sets the width of the polygon's outline in screen points.
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