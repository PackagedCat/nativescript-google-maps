# Projection

A projection is used to translate between on screen location and geographic coordinates on the surface of the Earth. Screen location is in screen pixels (not display pixels) with respect to the top left corner of the map (and not necessarily of the whole screen).

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
  <pre><code>fromScreenLocation(point: <a href="./Point.md">Point</a>): <a href="./Coordinate.md">Coordinate</a>;</code></pre>
</td>
<td>
  Returns the geographic location that corresponds to a screen location.
</td>
</tr>
<tr>
<td>
  <pre><code>getVisibleRegion(): <a href="./VisibleRegion.md">VisibleRegion</a>;</code></pre>
</td>
<td>
  Returns a projection of the viewing frustum for converting between screen coordinates and geo-latitude/longitude coordinates.
</td>
</tr>
<tr>
<td>
  <pre><code>fromScreenLocation(point: <a href="./Coordinate.md">Coordinate</a>): <a href="./Point.md">Point</a>;</code></pre>
</td>
<td>
  Returns a screen location that corresponds to a geographical coordinate (Coordinate).
</td>
</tr>
</table>