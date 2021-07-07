# CameraPosition

Represent a aggregates all camera position parameters such as location, zoom level, tilt angle, and bearing.

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
  bearing?: number;
  ```
</td>
<td>
  Sets the direction that the camera is pointing in, in degrees clockwise from north.
</td>
</tr>
<tr>
<td>
  <pre><code>position: <a href="./Coordinate.md">Coordinate</a>;</code></pre>
</td>
<td>
  Sets the location that the camera is pointing at.
</td>
</tr>
<tr>
<td>

  ```typescript
  tilt?: number;
  ```
</td>
<td>
  Sets the angle, in degrees, of the camera angle from the nadir (directly facing the Earth).
</td>
</tr>
<tr>
<td>

  ```typescript
  zoom?: number;
  ```
</td>
<td>
  Sets zoom level near the center of the screen.
</td>
</tr>
</table>