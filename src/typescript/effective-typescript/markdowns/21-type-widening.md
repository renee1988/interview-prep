## Understand type widening
At runtime, every variable has a single value. At static analysis time, when TypeScript is checking your code, a variable has a set of *possible* values, namely, its type.

When you initialize a variable with a constant but do not provide a type, the type checker needs to decide on one. It needs to decide on a set of possible values from the single value you specified. In TypeScript, this process is called **type widening**.

<pre>
interface Vector3D {
    x: number;
    y: number;
    z: number;
}

function getComponent(vector: Vector3D, axis: 'x' | 'y' | 'z') {
    return vector[axis];
}
</pre>

When you try to use it:

<pre>
let x = 'x';
let vec = {
    x: 10,
    y: 20,
    z: 30,
};
getComponent(vec, x);
// ~~~~ Argument of type 'string' is not assignable to
//      parameter of type 'x' | 'y' | 'z'.
</pre>

The issue here is that the type of `x` is inferred as `string`, but `getComponent` function expects a more specific type for its second argument. This is **widening** at work.

The reason the type of `x` is inferred as `string` not `x`, is because TypeScript chooses to allow code like the following:

<pre>
let x = 'x';
x = 'a';
x = 'some other random string';
</pre>

### Control the process of widening

#### `const`
If you declare a variable with `const` instead of `let`, it gets a narrower type, because `const` cannot be re-assigned.

<pre>
const x = 'x'; // type is 'x', not string
let vec = {
    x: 10,
    y: 20,
    z: 30,
};
getComponent(vec, x); // OK.
</pre>

For objects and arrays, there is still ambiguity. For example:

<pre>
const v = {
    x: 1,
};
</pre>

TypeScript widening algorithm treats each element as though it were assigned with `let`, so the type of `v` is `{x: number}`.
* This lets you reassign `v.x` to a different number but not to a `string`.
* This prevents you from adding other properties.

There are ways to override TypeScript default behavior.

<pre>
const v = {
    x: 1 as const,
    y: 2,
};
// The type of v is {x: 1; y: number;}
</pre>

<pre>
const v = {
    x: 1,
    y: 2,
} as const;
// The type of v is {readonly x: 1; readonly y: 2;}
</pre>

When you write `as const` after a value, TypeScript will infer the narrowest possible type for it. There is **no** widening.

