_______________________________________________________________________________
**Do NOT unsubscribe from events, complete them when another event fires.**

In most of the cases, these are the two operators you will need.
1. takeUntil
2. switchLatest

## Case study: Netflix Search
Auto-complete search box: hard to build from scratch.
* input race conditions
Example:
1. you type `a` -> a network request, A, sent to query all the result with `a`
2. you type `b` -> a network request, B, sent to query all the result with `ab`
There is no guarantee that the response of `A` comes back before the response of `B`. In result, we might end up showing the results from `A` on top of the results from `B`, which is undesirable.
* user types too fast

### Sample Code in Netflix
```javascript
var searchResultSets = keyPresses
    .throttle(250)
    // Here we are turning 1D observable into a 2D observables
    // (an observable of observables), since each keypress event
    // is mapped to an observable that is the network request we
    // send to search the items with the current input value (a
    // string with the accumulated key presses).
    .map(key => (
        // getJSON returns an observable with the results we
        // get back from the server. It is an observable with
        // one response value in it.
        getJSON("/searchResults?q=" + input.value)
            .retry(3)
            // We take the data from the network response until
            // another keypress event is fired.
            .takeUntil(keyPresses)
    ))
    .concatAll();
searchResultSets.forEach(
    resultSet => updateSearchResults(resultSet),
    error => showMessage("the server appears to be down."),
);
```
<pre>
data stream:
------------------------------------------------------ time axis
                keypresses: ........a.........b......
 network response with "a": ..................x
(The response is not yet coming back, key "b" is pressed. Since we
have takeUntil listen on keypress on the network response data stream,
we unsubscribe the network response for "a" data stream)
network response with "ab": ........................result
</pre>
When solving this type of problems, we begin with describing the solution in four steps:
1. What collection/data stream/observable do I have?
2. What collection/data stream/observable do I want?
3. How do I get from the collection I have to the collection I want?
4. What am I going to do with the data coming out the collection I want?

For an auto-complete search box:
1. Collections I have:
  * DOM events, in particular, keypress events.
  * Network requests we send, each one of the requests is an observable / data collection with the response come back from the server.
2. Collection I want: the results from the network requests
3. Transform the keypresses into network requests and then into network respoonse collections
4. Loop through the results with `forEach` and do something with it or error out

In the code sample above, `switchLatest` is the more appropriate operator, but the `takeUntil` + `concatAll` is simulating what `switchLatest` does:
Every time when a new observable comes along (a new keypress mapped to a new network request to the server), the old observable (the old network request) gets completed, and move on and switch to the new observable.
```javascript
// Simplified version
var searchResultSets = keyPresses
    .throttle(250)
    .map(key => (
        getJSON("/searchResults?q=" + input.value).retry(3)
    ))
    .switchLatest();
```
Since you cannot cancel a `Promise`, it is a hot observable meaning once you declare and initiate a `Promise`, it will start working. A cold observable does not do anything on creation (lazy initialization).

With `Promise`, you cannot retry an operation (in this case it is a network request), you cannot cancel an operation. With observable, you can trigger the network request as many times as you want -> `Observable.retry`.