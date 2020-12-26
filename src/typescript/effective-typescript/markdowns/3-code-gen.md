TypeScript compiler does two things:
* transpiling: converts next-generation TypeScript/JavaScript to an older version of JavaScript that works in browsers.
* type checking: checks for type errors.

These two things are **independent** from each other. **The types in your code cannot affect the JavaScript that TypeScript emits.**

## What TypeScript can and cannot do for you

### Code with type errors can produce output
Since code output is independent of type checking, it follows that code with type errors can produce output. You can think of TypeScript errors as being similar to warnings in Java or C (strict-type languages).

If you want to disable output on errors, you can use `noEmitOnError` option in TypeScript configuration settings.

### You cannot check TypeScript types at runtime
<pre>
interface Square {
    width: number;
}
interface Rectangle extends Square {
    width: number;
    height: number;
}
type Shape =  Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
        // ~~~~~ 'Rectangle' only refers to a type,
        //       but is being used as a value here.
        return shape.width * shape.height;
    }
    // ...
}
</pre>

`instanceof` check happens at **runtime**, but `Rectangle` is a type and so it cannot affect the runtime behavior of the code.
* TypeScript types are *erasable*: part of compilation to JavaScript is simply removing all the `interfaces`, `types`, and type annotations from your code. (This is similar to Java Generics.)

Some constructs introduce both a type (not available at runtime) and a value (available at runtime). The `class` keyword is one of these constructs.
* Making `Square` and `Rectangle` classes would solve the error above.

### Type operations cannot affect runtime values
<pre>
function asNumber(val: number | string): number {
    return val as number;
}
</pre>
The above code generates the following JavaScript:
<pre>
function asNumber(val) {
    return val;
}
</pre>

**There is no conversion whatsoever.** `as number` is a type operation (more precisely a type assertion), so it cannot affect the runtime behavior of your code.

### Runtime types may not be the same as declared types
`boolean` is a **declared** type, it will go away during runtime.
<pre>
function setLightSwitch(value: boolean) {
    switch(value) {
        case true:
            turnLightOn();
            break;
        case false:
            turnLightOff();
            break;
        default:
            console.log("I'm afraid I can't do that.");
    }
}
</pre>

In JavaScript, a user might call setLightSwitch with a value `ON`. For example, if the value comes from a network response, the API might change after you deploy.

### You cannot overload a function based on TypeScript types
Function overloading (like in C++ or Java) is not possible in TypeScript since the runtime behavior of your code is independent of its TypeScript types.

<pre>
function add(a: number, b: number) { return a + b; }
// ~~~~~~ Duplicate function implementation
function add(a: string, b: string) { return a + b; }
// ~~~~~~ Duplicate function implementation
</pre>

TypeScript provides a facility for overlaoding functions but it operates entirely *at the type level*. You can provide multiple declarations for a function, but only a single implementation:

<pre>
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a, b) { return a + b; }

const three = add(1, 2);
const twelve = add('1', '2');
</pre>

### TypeScript types have no effect on runtime performance
Because types and type operations are erased when you generate JavaScript, they cannot have an effect on runtime performance. TypeScript static types are **zero cost**.
* TypeScript will introducer *build-time* overhead.
* The code TypeScript emits to support older runtimes *may* incur a performance overhead vs. native implementations.
  * if you use `generator` and target ES5, which predates `generators`, then TypeScript compiler will emit some helper code to make things work.