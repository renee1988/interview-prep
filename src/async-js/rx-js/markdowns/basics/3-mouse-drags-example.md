-------------------------------------------------------------------------------
## Mouse Drags Collection

<pre>
const getElementDrags = el => {
    ["mousedown", "mousemove", "mouseup"].forEach(key => {
        el[`${key}Stream`] = Observable.fromEvent(el, key);
    });
    return el.mousedownStream
        .map(mousedownEvent => {
            el.mousemoveStream.takeUtil(el.mouseupStream)
        })
        .concatAll();
}
getElementDrags(image).forEach(pos => {
    image.position = pos;
});
</pre>
