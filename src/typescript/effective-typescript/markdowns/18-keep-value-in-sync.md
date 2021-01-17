## Use Mapped Types to Keep Values in Sync
Suppose you write a UI component for drawing scatter plots. You want to redraw the chart only when you need to. You want to ignore updates on the event handlers.

```typescript
interface ScatterProps {
    // The data
    xs: number[];
    ys: number[];
    // Display
    xRange: [number, number];
    yRange: [number, number];
    color: string;
    // Event handlers
    onClick: (x: number, y: number, index: number) => void;
}
```

When adding / removing a new property to `ScatterProps`, you want the type checker to help you enforce the update to `shouldUpdate` function.

```typescript
const REQUIRES_UPDATE: {[k in keyof ScatterProps]: boolean} = {
    xs: true,
    ys: true,
    xRange: true,
    yRange: true,
    color: true,
    onClick: false,
};
function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
    let k: keyof ScatterProps;
    for (k in oldProps) {
        if (oldProps[k] !== newProps[k] && REQUIRED_UPDATE[k]) {
            return true;
        }
    }
    return false;
}
```