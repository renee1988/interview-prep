_______________________________________________________________________________
## 3D Observables
Media Player Example: rewritten with Observables
```javascript
var authorization = player
    .init()
    .map(() => (
        // playAttempts are click events on play button.
        playAttempts
            .map(movieId => (
                player
                    // Make a request to the server to authorize the user
                    // to play the movie. If the user does not have the
                    // permission to play the movie, do nothing, move on
                    // to the next movie.
                    .authorize(movieId)
                    .catch(err => (Observable.empty))
                    // cancels is an observable of click events on cancel
                    // button of the player.
                    .takeUntil(cancels)
            ))
            .concatAll()
    ))
    .concatAll();
authorizations.forEach(
    license => player.play(license),
    error => showDialog("Sorry, cannot play right now"),
);
```
1. What collections do I have?
  * Initialize the player
  * Somebody clicks `play` on the player
  * Somebody clicks `cancel` on the player
  * Authorize a movie request (a network request)
2. What collection do I want?
  * A collection of movies to play (a collection of authorized movie IDs)

Notice that in this example, we cannot substitute `takeUntil` + `concatAll` with a `switchLatest`. Why? Because the incoming data collection/events is **NOT** the same type of the data collection/events we would want to use to switch to the new observable.
* Incoming events: clicks on `play` button.
* Events to use to switch to the new observables: clicks on `cancel` button.
