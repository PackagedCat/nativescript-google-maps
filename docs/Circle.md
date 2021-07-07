# Circle

A circle on the earth's surface (spherical cap).

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
  fillColor: Color;
  ```
</td>
<td>
  Gets or sets the interior of the circle is painted with fillColor.
</td>
</tr>

<tr>
<td>

  ```typescript
  isTappable: boolean;
  ```
</td>
<td>
  Gets or sets the tappability of the circle.
</td>
</tr>

<tr>
<td>

  ```typescript
  isVisible: boolean;
  ```
</td>
<td>
  Gets or sets the visibility of this circle.
</td>
</tr>

<tr>
<td>
  <pre><code>position: <a href="./Coordinate.md">Coordinate</a>;</code></pre>
</td>
<td>
  Gets or sets the position on Earth of circle center.
</td>
</tr>

<tr>
<td>

  ```typescript
  radius: number;
  ```
</td>
<td>
  Gets or sets the radius of the circle in meters; must be positive.
</td>
</tr>

<tr>
<td>

  ```typescript
  strokeColor: Color;
  ```
</td>
<td>
  Gets or sets the color of this circle's outline.
</td>
</tr>

<tr>
<td>

  ```typescript
  strokeWidth: number;
  ```
</td>
<td>
  Gets or sets the width of the circle's outline in screen points.
</td>
</tr>

<tr>
<td>

  ```typescript
  zIndex: number;
  ```
</td>
<td>
  Gets or sets the zIndex of this circle. Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
</td>
</tr>

</table>