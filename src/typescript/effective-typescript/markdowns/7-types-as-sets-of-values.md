At runtime, every variable has a single value chosen from JavaScript universe. When TypeScript checks your code for errors, a variable just has a type.

**Think of the types as a set of possible values.** Also known as the domain of the type.
* Example: the `number` type can be thought of a set of all number values: 42, -32.1, etc.
* Depending on `strict NullChecks`, `null` and `undefined` may or may not be part of the set.
* The smallest set is the empty set, which contains no values: `never`
* The next smallest sets are those which contain only single values: `type One = 1; type Two = 2;`
* You can union types: `type OneTwo = One | Two;`

Almost all the type checker is doing is testing whether one set of values is a subset of another.

### `|` operator
<pre>
type A = 'A';
type B = 'B';
type AB = A | B;

const a: AB = 'A';
const c: AB = 'C';
// ~~~~ Type '"C"' is not assignable to type 'AB'.
</pre>

### `&` operator
The `&` operator computes the intersection of two types:
<pre>
interface Person {
    name: string;
}

interface LifeSpan {
    birth: Date;
    death?: Date;
}

interface PersonSpan = Person & LifeSpan;

const ps: PersonSpan = {
    name: 'John Doe',
    birth: new Date('1912/06/23'),
    death: new Date('1954/06/07'),
}; // OK
</pre>

* A value that has the properties of *both* `Person` and `LifeSpan` will belong to the intersection type.
* A value cloud have more than those three properties and still belong to the type.
* The values in an intersection type contain the union of properties in each of its constituents.

<pre>
// There are no keys that TypeScript can guarantee belong to a value in the union type.
type K = keyof (Person | LifeSpan); // Type is `never`

keyof (A&B) = (keyof A) | (keyof B);
keyof (A|B) = (keyof A) & (keyof B);

// In the above example: type K
type K = (keyof Person) & (keyof LifeSpan);
       = ['name'] & ['birth', ?'death'];
       = never;
</pre>

### `extends`
<pre>
// In the above example, type PersonSpan can also be defined as:
interface Person {
    name: string;
}

interface PersonSpan extends Person {
    birth: Date;
    death?: Date;
}
</pre>

What does `extends` mean? You can read it as `subset of`. The values of type `PersonSpan` is a subset of the values of type `Person`, meaning `PersonSpan` must have the property `name`.

```
function getKey<K extends string>(val: any, key: K) {...}
```

What does it mean to extend `string`?

**Think of it in terms of value sets**: any type whose domain is a subset of `string`.

```
getKey({}, 'x'); // OK, 'x' extends string
getKey({}, Math.random() < 0.5 ? 'a' : 'b' ); // OK, ('a' | 'b') extends string
getKey({}, 12); // ~~~ Type '12' is not assignable to parameter of type 'string'
```

```
interface Point {
    x: number;
    y: number;
}
type PointKeys = keyof Point // Type is 'x' | 'y'
function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {...}
```

### Arrays and Tuples
<pre>
const list = [1, 2]; // Type is number[]
const tuple: [number, number] = list;
// ~~~ Type 'number[]' is missing the following properties
//     from type '[number, number]': 0, 1
</pre>

The reason TypeScript complains on the above example: `number[]` is not assignable to `[number, number]` since `number[]` is not a subset of `[number, number]`.

Is a triple assignable to a pair?

Rather than modeling a pair of numbers as `{0: number, 1: number}`, TypeScript models it as `{0: number, 1: number, length: 2}`. Therefor the answer is no, a triple is not assignable to a pair.