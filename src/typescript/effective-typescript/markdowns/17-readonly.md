## Use `readonly` to avoid errors associated with mutation
<pre>
function arraySum(arr: readonly number[]) {
    let sum = 0, num;
    while ((num = arr.pop()) !== undefined) {
                  // ~~~~ 'pop' does not exist on type 'readonly number[]'
        sum += num;
    }
    return sum;
}
</pre>

`readonly number[]` is a type. It is distinct from `number[]` in a few ways:
* You can read from its elements but you cannot write to them
* You can read its `length`, but you cannot set it (which would mutate the array)
* You cannot call `pop` or other methods that mutate the array

Note that `number[]` is a subtype of `readonly number[]`. You can assign a mutable array to a `readonly` array, but not vice versa.

If your function does not mutate its parameters, you should declare them `readonly`. Once you mark one function with `readonly`, you will also need to mark all the functions that it calls.

### `readonly` is shallow
If you have a `readonly` array of objects, the objects themselves are NOT `readonly`.

<pre>
const dates: readonly Date[] = [new Date()];
dates.push(new Date());
// ~~~~ Property 'push' does not exist on type 'readonly Date[]'
dates[0].setFullYear(2021); // OK
</pre>

### `Readonly` generic
```typescript
interface Outer {
    inner: {
        x: number;
    }
}
const o: Readonly<Outer> = {
    inner: {
        x: 0,
    }
};
o.inner = {x: 1};
// ~~~~ Cannot assign to 'inner' because it is a read-only property
o.inner.x = 1; // OK
```

```typescript
type T = Readonly<Outer>;
// Equivalent to:
// Type T = {
//     readonly inner: {
//         x: number;
//     };
// };
```

`readonly` modifier is on `inner` but not on `x`. There is no built-in support for deep readonly types. `DeepReadonly` generic in `ts-essentials` is one implementation of deep readonly types.

