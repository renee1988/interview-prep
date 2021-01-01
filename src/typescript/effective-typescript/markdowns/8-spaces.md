A symbol in TypeScript exists in one the two spaces:
* Type space
* Value space

The same name can refer to different things depending on which space it is in:
```
interface Cylinder {
    radius: number;
    height: number;
}
const Cylinder = (radius: number, height: number) => ({radius, height});
```

* Interface `Cylinder` is a symbol in *type* space.
* const `Cylinder` is a symbol with the same name in *value* space.

<pre>
function calculateVolume(shape: unknown) {
    if (shape instanceof Cylinder) {
        shap.radius
        // ~~~ Property 'radius' does not exist on type '{}'
    }
}
</pre>

Why does the above line generate a type checking error? `instanceof Cylinder` refers to the function, not the type.
* The code intends the `instanceof` to check whether the shape was of the `Cylinder` **type**.
* `instanceof` is a JavaScript runtime operator, and it operates on **values**.

**Generally the symbols after a `type` or `interface` are in type space while those introduced in a `const` or `let` declaration are values.**

The `class` and `enum` constructs introduce both a type and a value. TypeScript type introduced by a `class` is based on its shape (its properties and methods) while the vlaue is the constructor.
<pre>
class Cylinder {
    radius = 1;
    height = 1;
}

function calculateVolume(shape: unknown) {
    if (shape instanceof Cylinder) {
        shape // OK type is Cylinder
        shape.radius // OK, type is number
    }
}
</pre>

There are many operators and keywords that mean different things in a type or vlaue context.

### `typeof`
<pre>
interface Person {
    first: string;
    last: string;
}
const p: Person = {first: 'John', last: 'Doe'};
function email(p: Person, subject: string, body: string): Response { ... }

type T1 = typeof p; // Type is Person
type T2 = typeof email; // Type is (p: Person, subject: string, body: string) => Response

const v1 = typeof p; // Value is 'object'
const v2 = typeof email; // Value is 'function'
</pre>

In contrast to the infinite variety of TypeScript types, there are only six runtime types in JavaScript:
* `string`
* `number`
* `boolean`
* `undefined`
* `object`
* `function`

The `class` keyword introduces both a value and a type:
<pre>
const v = typeof Cylinder; // Type is function
type T = typeof Cylinder // Type is Cylinder
</pre>

### `[]` property accessor
While `obj['field']` and `obj.field` are equivalent in value space, they are not in type space.

<pre>
const first: Person['first'] = p['first'];
</pre>

`Person['first']` is a `type` here, `string`.

<pre>
type PersonEl = Person['first' | 'last']; // Type is string
type Tuple = [string, number, Date];
type TupleEl = Tuple[number] // Type is string | number | Date
</pre>

### Other constructs that have different meanings in type and value spaces
* `this` in value space is JavaScript `this` keyword. As a type, `this` is the TypeScript type of `this`.
* In value space `&` and `|` are bitwise AND and OR. In type space, they are intersection and union operators.
* `const` introduces a new variable but `as const` changes the inferred type of a literal or literal expression.
* `extends` can define a subclass (`class A extends B`) or a subtype (`interface A extends B`) or a constraint on a generic type (`Generic<T extends number>`).
* `in` can either be part of a loop (`for (key in object)`) or a mapped type.
