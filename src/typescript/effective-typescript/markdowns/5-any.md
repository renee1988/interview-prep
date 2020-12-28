You can silence TypeScript checker with `any`.

<pre>
let age: number;
age = '12'; // ~~~ Type '"12"' is not assignable to type 'number'
age = '12' as any; // OK
</pre>

`any` eliminates many of the advantages of using TypeScript.

### There is no type safety with `any` types
In the above example, the type declaration says that `age` is a `number`, but `any` lets you assign a `string` to it. The type checker will believe that it is a `number`. Then you will have bugs as following:

<pre>
age += 1; // OK, at runtime, age is now "121"
</pre>

### `any` lets you break contracts
When you write a function, you specify a contract: if the caller gives you a certain type of input, you will produce a certain type of output. `any` allows the caller to break the contracts.

<pre>
function calculateAge(date: Date): number { ... }

let birthDate: any = '1990-01-19';
calculateAge(birthDate); // OK
</pre>

JavaScript is often willing to implicitly convert between types, a `string` sometimes works where a `Date` is expected, only to breawk in other circumstances.

### There are no language services for `any` types
When a symbol has a type, the TypeScript language services are able to provide intelligent autocomplete and contextual documentation. But for symbols with an `any` type, you are on your own.

TypeScript motto is *JavaScript that scales*. A key part of `scales` is the language services which are a core part of the TypeScript experience.

### `any` types mask bugs when you refactor code

### `any` hides your type design

### `any` undermines confidence in the type system