## Building Blocks

Async seems hard:
* Race conditions: you can start two actions, they are running concurrently, expecting one will be finished before the other, or *enforce* it to finish before the other.
* Memory leaks: attaching a DOM event but forgetting to detach it from the DOM.
* Complex state machines
* Uncaught async errors
* Callback hell
* Code is hard to understand and debug in general
<pre>
function play(movieId, cancelButton, callback) {
    // movieTicket and playErrors are your \\"states\\" to
    // track and manage.
    var movieTicket, playError;
    var tryFinish = function() {
        if (playError) {
            callback(null, playError);
        } else if (movieTicket && player.initialized) {
            callback(null, ticket);
        }
    };
    // Here is a bug: the click event is not detached anywhere.
    cancelButton.addEvent(\\"click\\", function() {
        playError = "cancelled";
    });
    if (!player.initialized) {
        player.init(function(error) {
            playerError = error;
            tryFinish();
        });
    }
    authorizeMovie(function(error, ticket)) {
        playError = error;
        movieTicket = ticket;
        tryFinish();
    });
}
</pre>

### Functions
Async Programming without *loops*. You cannot repeat asynchronous function with a loop.

#### `forEach`
`forEach` takes in a function and applies the function to each of the items in an array.
<pre>
[1, 2, 3].forEach(x => console.log(x));
</pre>
#### `map`
`map` takes in a function and applies it to every item in an array creating a new value and put it into a new array. **`map` does not mutate the original array.**
<pre>
[1, 2, 3].map(x => x + 1);
</pre>
#### `filter`
`filter` takes in a test function and applies it to every item in an array, only the items that pass the test would make it into the new array `filter` returns.
<pre>
[1, 2, 3].filter(x => x > 1);
</pre>
#### `concatAll`
`concatAll` takes in a multi-dimensional array and flattens it into a single-dimensional array.
<pre>
[[1], [2, 3], [], [4]].concatAll();
</pre>
Note: `concatAll` is not available in native JavaScript.
#### Example: Mouse Drag Collection
<pre>
const getElementDrags = elmt => elmt.mouseDowns
    .map(mouseDown => (
        // Think of takeUntil as filter, it maps a mouseDown
        // event to a mouseMove until a mouseUp event happens.
        document.mouseMoves.takeUntil(document.mouseUps)
    ))
    .concatAll();
getElementDrags(image).forEach(pos => image.position = pos);
</pre>
### Events
**Events and Arrays are both collections.**

Then why cannot we program them the same way?
#### Iterator vs. Observer
##### How does iterator work?
There are a PRODUCER and a CONSUMER. The consumer requests/**pulls** information one at a time from the producer until the producer has no item left.
<pre>
const iterator = [1, 2, 3].iterator();
// Interface of an iterator
console.log(iterator.next());
// print: {value: 1, done: false}
</pre>
Note: `map`, `filter` and `concatAll` can be implemented using an iterator.
#### Observables & Observers
The main usage of this deisgn pattern is building user interfaces. If you have a change to your data model, how do you communicate it with your views and visa versa?
<pre>
document.addEventListener(\\"mousemove\\", function(event) {
    console.log(event);
});
</pre>
The best example of this design pattern is **DOM events**: you can add a function to a data producer and instead of the consumer pulling the data out of the producer, the producer **pushes** the data to the consumers.
#### Summary
* Iterators and observables both **progressively** send information to the consumers.
* Iterators and observables are symmetrical, except there is no way defined for Observable design pattern to indicate the data stream ends or errors out.
  * in JavaScript world, we do not just handle DOM events, we handle data streams that end all the time.

We have defined so many Push APIs that helps handle or inidicate the completion/error of the data stream:
* Websockets
* Server-sent events
* Node streams
* ...