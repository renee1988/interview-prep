-------------------------------------------------------------------------------
## More operators
### `mergeAll`
The second flattening strategy: `mergeAll` - **first comes, first served**
<pre>
An observable of observables:
----------------------------------------------> time axe
{
...{1},
...........{2.............3},
...............{},
....................{4}
}.mergeAll()

Resulting observable:
{...1...........2.......4....3}
</pre>
### `switchLatest`
The third and final flattening strategy: `switchLatest`
<pre>
An observable of observables:
----------------------------------------------> time axe
{
...{1},
...........{2.............3},
...............{},  // this observable triggered the unsubscription to the previous observable
....................{4}
}.switchLatest()

Resulting observable:
{...1...........2.......4}
</pre>
What `switchLatest` does is to swith to the latest observable (stream), it tells the previous observable that it does not want any more data (unsubscribe) and move on to the next observable arrived.

This is the most common flattening strategy when dealing with user interfaces.

For example, we have a submit button on a form, the user might click the submit button multiple times. Use `switchLatest` which will cancel all the ongoing requests before it heads out.
1. Map all the click events as an observable waiting for a request to come back with a response.
2. `switchLatest` will unsubscribe from the old click observable and move on the newly arrived observable.
