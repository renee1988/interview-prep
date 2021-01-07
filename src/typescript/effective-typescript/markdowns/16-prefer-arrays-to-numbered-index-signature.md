JavaScript object model has its quirks, and these are important to understand since some of them are modeled by TypeScript type system.

### What is an object?
In JavaScript, an object is a collection of key/value pairs. The keys are usually strings. The values can be anything. If you try to use a more complex object as a key, it is converted into a string by calling its `toString` method:

<pre>
x = {};
x[[1, 2, 3]] = 4;
// x is assigned a value of {'1,2,3': 4}.
</pre>

`number` cannot be used as keys. If you try to use a `number` as a property name, the JavaScript runtim will convert it into a string.

<pre>
x = {1: 2, 3: 4};
// x is assigned a value of {'1': 2, '3': 4}.
</pre>

### What are arrays?
Arrays are objects. `typeof []` is `object`. The numeric indices are converted into strings.

<pre>
x = [1, 2, 3];
// x['2'] returns 3.
</pre>

If you use `Object.keys` to list the keys of an array, you will get strings back.

TypeScript attempts to bring some sanity to this by allowing numeric keys and distinguishing between these and strings. In `lib.es5.d.ts`, `Array` type declaration:

```
interface Array<T> {
    [n: number]: T;
}
```

### Index signature vs. Arrays
In most browsers and JavaScript engines, `for-in` loops over arrays are several orders of magnitude slower than `for-of` or a C-style for loop.

If you want to specify something that will be indexed using numbers, you probably want to use an Array or tuple type instead. Using `number` as an index type can create the misconception.

### `ArrayLike` type
`ArrayLike` has a `length` and numeric index signature.

```
const tupleLike: ArrayLike<string> = {
    '0': 'A',
    '1': 'B',
    '2': 'C',
    length: 3,
}; // OK.
```