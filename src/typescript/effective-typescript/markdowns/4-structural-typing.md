JavaScript is inherently duck typed: if you pass a function a value with all the right properties, it will not care how you made the value, it will just use it. TypeScript models this behavior.

<pre>
interface Vector2D {
    x: number;
    y: number;
}

function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
</pre>

Now you introduce a new type, named vector:
<pre>
interface NamedVector2D {
    name: string;
    x: number;
    y: number;
}
</pre>

`calculateLength` will work with `NamedVector2D` because the type has `x` and `y` properties with the correct types. TypeScript is smart enough to figure this out:

<pre>
const v: NamedVector2D = {
    name: 'some_vector',
    x: 3,
    y: 4,
};
calculateLength(v); // result is 5
</pre>

* You never declared the relationship between `Vector2D` and `NamedVector2D`.
* You did not write an alternative implementation of `calculateLength` for `NamedVector2D`.

**Structural typing**: TypeScript type system is modeling JavaScript runtime behavior, it allows `calculateLength` to be called with `NamedVector2D` because its *structure* is compatible with `Vector2D`.

### Structural typing can introduce unexpected bugs

<pre>
interface Vector3D {
    x: number;
    y: number;
    z: number;
}

function normalize(v: Vector3D) {
    const length = calculateLength(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length, // a potential bug
    }
}
</pre>

The type checker does not catch this issue, why are you alowed to call `calculateLength` with a 3D vector despite its type declaration saying that it takes 2D vectors?
* As you write functions, it is easy to imagine that they will be called with arguments having the properties you have declared *and no others*. This is known as a **sealed** or **precise** type.
* It cannot be expressed in TypeScript type system. Your types are **open**.

### Structural typing can introduce surprises with `classes`

<pre>
class C {
    foo: string;
    constructor(foo: string) {
        this.foo = foo;
    }
}
const c = new C('instance of C');
const d: C = { foo: 'object literal' }; // OK!
</pre>

Why is `d` assignable to `C`? Structure matches:
* It has a `foo` property that is a `string`.
* It has a `constructor` (from `Object.prototype`) that can be called with one argument.
