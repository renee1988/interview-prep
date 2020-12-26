## TypeScript Configurations
<pre>
{
    "compileOptions": {
        "noImplicitAny": true
    }
}
</pre>

Always prefer configuration file, it ensures that your coworkers and tools all know exactly how you plan to use TypeScript.

TypeScript configuration settings control:
* where TypeScript compiler looks for the sources files
* what sort of output it generates
* there are a few control core aspects of the language itself:
  * `noImplicitAny`
  * `stricNullChecks`

### `noImplicitAny`
`noImplicitAny` controls whether variables must have known types. When `noImplicitAny` is off, the following code is valid:

<pre>
function add(a, b) {
    return a + b;
}
</pre>

which is equivalent to the following code:

<pre>
function add(a: any, b: any): any {
    return a + b;
}
</pre>

TypeScript is the most helpful when it has type information. Turn on `noImplicitAny`:
* helps TypeScript spot problems
* improves readability of your code
* enhances your development experience

### `stricNullChecks`
`stricNullChecks` controls whether `null` and `undefined` are permissible values in every type.

With `stricNullChecks` off:

<pre>
// Fine, null is a valid number
const x: number = null;
</pre>

With `stricNullChecks` on:

<pre>
// Error, type null is not assignable to type number
const x: number = null;
</pre>

`strictNullChecks` is extremely helpful for catching errors involving `null` and `undefined`.
