There are two ways of assigning a value to a variable and giving it a type:

<pre>
interface Person {
    name: string;
}

// Type declaration
const alice: Person = {name: 'Alice'}; // Type is Person
// Type assertion
const bob = {name: 'Bob'} as Person; // Type is Person
</pre>

### Type declaration vs. Type assertion
* Type declaration: add this type declaration to the variable and ensures the value conform to the type.
* Type assertion: despite the type it inferred, you know better and would like the type to be `Person`.

**In general, you should prefer type declaration to type assertion.**

<pre>
const alice: Person = {}; // ~~~ Property 'name' is missing in type '{}'
const bob = {} as Person; // No error

const alice1: Person = {
    name: 'Alice',
    occupation: 'TypeScript developer',
    // ~~~ Object literal may only specify known properties and 'occupation'
    //     does not exist in type 'Person'.
};
const bob1 = {
    name: 'Bob',
    occupation: 'JavaScript developer',
} as Person; // No error
</pre>

* Type declaration verifies that the value conforms to the interface.
* Type assertion silences the type error by telling the type checker: for whatever reason, you know better than it does.

### How to use a type declaration in arrow function
```
const people = ['alice', 'bob', 'jan'].map(
    (name): Person => ({name})
);
```

### When should you use type assertion?
Type assertions make the most sense when you truly do know more about a type than TypeScript does, *typically from context that is not available to the type checker.*

For instance you know the type of a DOM element more precisely than TypeScript does:
```
document.querySelector('#my-button').addEventListener('click', e => {
    e.currentTarget // Type is EventTarget
    const button = e.currentTarget as HTMLButtonElement;
    button // Type is HTMLButtonElement
});
```

You may also run into the non-null assertion, which is so common that it gets a special syntax:
```
const elNull = document.getElementById('foo'); // Type is HTMLElement | null
const el = document.getElementById('foo')!; // Type is HTMLElement
```

Used as a prefix, `!` is boolean negation, but as a suffix, `!` is interpreted as an assertion that the value is non-null. You should treat `!` just like any other assertion: it is erased during compilation, so you should only use it if you have information that the type checker lacks and can ensure that the value is non-null.

### Limitations of type assertion
Type assertions do not let you convert between arbitrary types. The general idea is that *you can use a type assertion to convert between A and B if either is a subset of the other*.
* `HTMLElement` is a subtype of `HTMLElement | null`.
* `HTMLButtonElement` is a subtype of `EventTarget`.
* `Person` is a subtype of `{}`.

You cannot convert between `Person` and `HTMLElement`.
<pre>
interface Person {
    name: string;
}
const body = document.body;
const el = body as Person;
// ~~~ Conversion of type 'HTMLElement' to type 'Person' may be a mistake because
//     neither type sufficiently overlaps with the other. If this was intentional
//     convert the expression to 'unknown' first.
const el1 = body as unknown as Person; // OK.
</pre>
