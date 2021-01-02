An advantage of function expressions in TypeScript is that you can apply a type declaration to the entire function at once.

<pre>
type DiceRollFn = (sides: number) => number;
const rollDice: DiceRollFn = sides => { /* ... */ };
</pre>

### Reduce repetition
If you wanted to write several functions for doing arithmetic on numbers:

<pre>
function add(a: number, b: number): number {
    return a + b;
}
function sub(a: number, b: number): number {
    return a - b;
}
function mul(a: number, b: number): number {
    return a * b;
}
function div(a: number, b: number): number {
    return a / b;
}
// Or
type BinaryFn = (a: number, b: number) => number;
const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;
</pre>

If you are a library author, consider providing type declarations for common callbacks.

### Network request handler
```
const responseP = fetch('/quote?by=Mark + Twain'); // Type is Promise<Response>
async function getQuote() {
    const response = await fetch('/quote?by=Mark + Twain');
    const quote = await response.json();
    return quote;
}
```

There is a bug in the above code: if the request fails, the response body is likely to contain an explanation like `404 Not Found` which is not a JSON object but a string.
* it is easy to forget that an error response with `fetch` does not result in a rejected `Promise`.
* `.json()` will return a rejected `Promise` with a message about invalid JSON error. This obscures the real error, which was a 404.

A better way to write the request handler:
<pre>
const checkedFetch: typeof fetch = (input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (!response.ok) {
        throw new Error('Request failed: ', response.status);
    }
    return response;
}
</pre>