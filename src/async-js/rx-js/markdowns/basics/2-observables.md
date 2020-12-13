-------------------------------------------------------------------------------
## Observerables & Observers

**Observable === Collection + Time**

An Observable is a collection of which items are arrives over time.

### Why is Observable so powerful?
Observables can model:
* Events
* Async server requests
* Animations
* Ported to many languages
  * C
  * .NET
  * JavaScript
  * Java (Netflix)
  * Objective-C

### Events to observables
We need to take all of these async APIs (e.g., DOM events) and adapt them into Observables.
```javascript
// fromEvent takes a DOM object and a DOM event and adapt them into an Observable
const mouseMoves = Observable.fromEvent(element, "mousemove");
```

### Event subscription
```javascript
// Subscribe in the traditional way
const handler = (event) => console.log(event);
document.addEventListener("mousemove", handler);
// Unsubscribe in the tranditional way
document.removeEventListener("mousemove", handler);
```

Use `Obserable.forEach`:
```javascript
// Subscribe
const subscription = mouseMoves.forEach(console.log);
// Unsubscribe
subscription.dispose();
```
Note: the difference between `Obserable.forEach` and `Array.forEach` is `Obserable.forEach` returns a subscription object.
* Each iteration of `Array.forEach` completes synchronously (immediately). `Array.forEach` runs through the entire array with the given callback function and then **finish**.
* Observable is a collection that arrives **over time**. When you `forEach` over an `Observable`, as the items arrive over time, the callback function gets invoked.
* When you do not care about the data from the `Observable` any more, you need a way to unsubscribe to the `Observable`.

Expanded `Observable.forEach`:
```javascript
const subscription = mouseMoves.forEach(
    // Observer object
    {
        // next data | required: receiving data
        onNext: event => console.log(event),
        // error | optional: error out
        onError: error => console.error(error),
        // completed | optional: no more data is arriving
        onCompleted: () => console.log("done!")
    }
);
```

### Observable metaphor
The fundatmental difference between Observable & Observer and Iterator patterns is **who is in control**.
* is the puller in control -> Iterator, the consumer is in control.
* is the pusher in control -> Observable & observer, the producer is in control.

### Converting events to observables
```javascript
Observale.fromEvent = function(domElement, eventName) {
    // returning Observable object
    return {
        forEach: function(observer) {
            const handler = (event) => observer.onNext(event);
            element.addEventListener(eventName, handler);
            return {
                dispose: function() {
                    element.removeEventListener(eventName, handler);
                }
            }
        }
    };
};
```

## Flatten an Observable of Observables
Assume and use `{...}` to present an Observable for now:
{
    ...{1},
    .........{2................3},
    ...................{},
    ..............{4},
}

### `concatAll`
`concatAll` strategy is to always make sure that the elements come out in the order of the collections they are inside of. It is consistent with `Array.concat`, it goes from top to bottom, left to right.

{
    ...{1},
    .........{2................3},
    ...................{},
    ..............{4},
}.concatAll()

Outcome:
---> {...1.........2................3...4}

**Cold Observable**: a cold observable will not do anything until somone calls `forEach` on it. The above example is a Cold Observable.
**Hot Observable**: e.g., mousemove events, a hot data source, it is going whether you are listening or not.

`concatAll` is one of the strategies dealing with concurrency (or race conditions).
You do not use `concatAll` when dealing with infinite streams. For instance, in the above example, the second observable (or data stream) never ends, then `concatAll` will never reach the third data stream.

**DOM events are hot observables and have no notion of completion.**

If there is an error happened between 2 and 3 in the above example, the resulting data stream will not have 3 and 4.
