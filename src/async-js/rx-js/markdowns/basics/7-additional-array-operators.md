### `concatAll`
TBD

### `concatMap`
TBD

### `reduce`
```javascript
Array.prototype.reduce = function(combiner, initialValue) {
    var counter, accumulatedValue;
    if (this.length === 0) {
        return this;
    }
    if (arguments.length === 1) {
        counter = 1;
        accumulatedValue = this[0];
    } else if (arguments.length >= 2) {
        counter = 0;
        accumulatedValue = initialValue;
    } else {
        throw "Invalid argument";
    }
    while(counter < this.length) {
        accumulatedValue = combiner(accumulatedValue, this[counter]);
        counter++;
    }
    return [accumulatedValue];
}
```

Note that in this definition of `reduce`, we return an array with a single value which is the accumulated value (the result of `reduce`).
* Better compatability: you can chain this result with all the other operations `map`, `filter`, `concatAll`, `concatMap`.
* `[].reduce` will return an empty array instead of an JS error.
* In asynchronous programming, always think of the source as a stream. When you apply `reduce` to an `Observable` (an asynchronous collection that arrives over time), you cannot return a single value from a return of an `Observable`, you would have to **block**, you would have to wait until the `Observable` to complete.