# VisibleRegion

Contains the four points defining the four-sided polygon that is visible in a map's camera. This polygon can be a trapezoid instead of a rectangle, because a camera can have tilt. If the camera is directly over the center of the camera, the shape is rectangular, but if the camera is tilted, the shape will appear to be a trapezoid whose smallest side is closest to the point of view.

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
  <pre><code>farLeft: <a href="./Coordinate.md">Coordinate</a>;</code></pre>
</td>
<td>
  Coordinate object that defines the far left corner of the camera.
</td>
</tr>
<tr>
<td>
  <pre><code>farRight: <a href="./Coordinate.md">Coordinate</a>;</code></pre>
</td>
<td>
  Coordinate object that defines the far right corner of the camera.
</td>
</tr>
<tr>
<td>
  <pre><code>nearLeft: <a href="./Coordinate.md">Coordinate</a>;</code></pre>
</td>
<td>
  Coordinate object that defines the bottom left corner of the camera.
</td>
</tr>
<tr>
<td>
  <pre><code>nearRight: <a href="./Coordinate.md">Coordinate</a>;</code></pre>
</td>
<td>
  Coordinate object that defines the bottom right corner of the camera.
</td>
</tr>
</table>