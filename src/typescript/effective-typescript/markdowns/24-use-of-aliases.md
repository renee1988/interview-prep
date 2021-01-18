## Be consistent in your use of aliases
When you introduce a new name for a value, you have created an *alias*.

<pre>
const borough = {
    name: 'Brooklyn',
    location: [40.688, -73.979],
};
const loc = borough.location;
</pre>

The changes to the properties on the alias is visible on the original value as well.

<pre>
loc[0] = 0;
// borough.location = [0, -73.979]
</pre>

### Golden rule
Consider the following example:

```typescript
interface Coordinate {
    x: number;
    y: number;
}
interface BoundingBox {
    x: [number, number];
    y: [number, number];
}
interface Polygon {
    exterior: Coordinate[];
    holes: Coordinate[][];
    bbox?: BoundingBox;
}
function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
    const box = polygon.bbox;
    if (polygon.bbox) {
        if (pt.x < box.x[0] || pt.x > box.x[1]) {
        // ~~~~ Object is possibly undefined.
            // ...
        }
    }
}
```

Why the error?

By factoring out the `box` variable, you have created an alias for `polygon.bbox`, and this has thwarted the control flow analysis.

```typescript
function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
    polygon.bbox; // Type is BoundingBox | undefined
    const box = polygon.bbox;
    box; // Type is BoundingBox | undefined
    if (polygon.bbox) {
        polygon.bbox; // Type is BoundingBox
        box; // Type is BoundingBox | undefined
    }
}
```

**If you introduce an alias, use it consistently.**
