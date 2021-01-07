Duplication in types has many of the same problems as duplication in code.

<pre>
interface Person {
    firstName: string;
    lastName: string;
}

interface PersonWithBirthDate {
    firstName: string;
    lastName: string;
    birth: Date;
}
</pre>

What if you decide to add an optional `middleName` field to `Person`? Now `Person` and `PersonWithBirthDate` have diverged.

What is the type system equivalent of factoring out a helper function?

**The simplest way to reducer repetition is by naming your types.**

<pre>
function distance(a: {x: number, y: number}, b: {x: number, y: number}) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}
</pre>

Create a name for the type and use that:

<pre>
interface Point2D {
    x: number;
    y: number;
}

function distance(a: Point2D, b: Point2D) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}
</pre>

This is the type system equivalent of factoring out a constant instead of writing it repeatedly.

**You can also eliminate the repetition by making one interface extends the other.**

<pre>
interface Person {
    firstName: string;
    lastName: string;
}

interface PersonWithBirthDate extends Person {
    birth: Date;
}
</pre>

**Or you can use the `&` operator to extend an existing type.**

<pre>
type PersonWithBirthDate = Person & {birth: Date};
</pre>

This technique is most useful when you want to add some additional properties to a union type which you cannot extend.

You can also go the other direction. What if you have a type `State` which represents the state of an entire application, and another, `TopNavState` which represents just a part?

```
interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
    // ... 
}
interface TopNavState {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
}
interface TopNavState {
    [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k];
}
type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;
```

`Pick` is an example of *generic type*. `Pick` takes two types, `T` and `K` and returns a third type.
```
type Pick<T, K> = { [k in K]: T[k] };
```

If you define a class which can be initialized and later updated, the type for the parameter to the update method will optionally include most of the same parameters.

<pre>
interface Options {
    width: number;
    height: number;
    color: string;
    label: string;
}
interface OptionsUpdate {
    width?: number;
    height?: number;
    color?: string;
    label?: string;
}
class UIWidget {
    constructor(init: Options) { ... }
    update(options: OptionsUpdate) { ... }
}
</pre>

You can construct `OptionsUpdate` from `Options` using a mapped type and `keyof`.

```
type OptionsUpdate = {[k in keyof Options]?: Options[k]};
// Or you can use Partial
type OptionsUpdate = Partial<Options>
```

`keyof` takes a type and gives you a union of the types of its keys.

<pre>
type OptionsKeys = keyof Options;
// Type is "width" | "height" | "color" | "label".
</pre>

You may also want to define a type that matches the shape of a `value`.

<pre>
const INIT_OPTIONS = {
    width: 640,
    height: 480,
    color: 'green',
    label: 'VGA',
};
interface Options {
    width: number;
    height: number;
    color: string;
    label: string;
}

// Or you can use typeof
type Options = typeof INIT_OPTIONS;
</pre>

It is usually better to define types first and declare that values are assignable to them. This makes your types more explicit and less subject to the vagaries of widening.

Similarly you may want to create a named type for the inferred return value of a function or method.

```
function getUserInfo(userId: string) {
    return {
        userId,
        name,
        age,
        height,
        weight,
    };
}
type UserInfo = ReturnType<typeof getUserInfo>;
```

Define the generic `Pick`:

```
type Pick<T, K> = {
    [k in K]: T[k]
    // ~~~ Type K is not assignable to type string | number | symbol
}

// To fix the error above:
// K should be some subset of the keys of T.
type Pick<T, K extends keyof T> = {
    [k in K]: T[k]
}
```
