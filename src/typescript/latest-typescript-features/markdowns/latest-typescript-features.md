## Latest JavaScript Features

### Optional Chaining
```ts
// Example:
let x: {
    user: {    
        name: string;
        address?: {
            street: string;
            city: string;
        };
    }
} = undefined as any;

// Optional Chaining
// "?" adds a condition to the following code:
// If x.user.address exists, log the city
// otherwise, log undefined
console.log(x.user.address?.city);
```

### Nullish Coalescing
```ts
class Foo {
    #name: string;
    // `constructor(public name?: string)` is a shorthand
    // for having a class member field `name`.
    constructor(rawName?: string) {
        // Nullish coalescing: `??`
        // If the `rawName` is *null* or *undefined*, fall back to the value 'no name'.
        // IMPORTANT: `??` is different from `||`
        // If we use `||` here, we will run into surprises of falsy values
        // (e.g., empty strings or 0's, they are not Nullish).
        this.#name = rawName ?? 'no name';
    }

    log() {
        console.log(this.#name);
    }
}
```

### Private Fields
`\#some_variable` vs `private some_variable`
* `private some_variable`: when someone sets a debugging breakpoint within the class, they can still see `some_variable` as a memeber field of this class.
* `\#some_variable`: when some sets a debugging breakpoint within the class, they *cannot* see `\#some_variable`.
* Prefixing a member variable with `\#` turns the member variable *truly* private.
* Child classes will not have access or know this member variable, it is not inherited.

## Latest TypeScript Features

### Inference Class Field Types
Types for class fields that are assigned in constructor are inferred, and no longer need an explicit type declaration.

### Tuple Types
```ts
type Foo<T extends any[]> = [boolean, ...T, boolean];
```

#### Labeled Tuple Types
```ts
type Address = [
    streetNumber: number,
    city: string,
    state: string,
    postalCode: number,
];

function printAddress(...address: Address) {
    // ...
}
```
* The IDE displays the labeled types, it makes the function signature much easier to understand.
* If you are serializing data (e.g., getting API responses), this saves a lot of space.
  * Imagine you are getting 50KB of JSON data from an API call. The tuple representation is a more compact way to represent the same data than an object.

### Type Aliases and Interfaces
```ts
// Old way of defining a JSON array
type JSONValue = string|number|boolean|null|JSONArray|JSONObject;
interface JSONObject = {
    [k: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {}
```
#### Recursive Type Aliases
```ts
type JSONValue =
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | {\[k: string\]: JSONValue;};
```

### Template Typed Literals
```ts
type Corner = \`${\\"top\\" | \\"bottom\\"}-${\\"left\\" | \\"right\\"}\`;
```
The type `Corner` can only have values: "top-left", "top-right", "bottom-left" and "bottom-right".

### Error and Assertion Handling

#### @ts-expect-error
* `// @ts-expect-error` suppresses the type errors.
```ts
// @ts-expect-error
const num: number = \\"hello\\";
```
* `// @ts-ignore` suppresses the type errors.
```ts
// @ts-ignore
const num: number = \\"hello\\";
```
* ts-ignore vs. ts-expect-error
  * Always use ts-expect-error over ts-ignore
  * If later on the type is corrected from string to number, ts-expect-error will show error: Unused @ts-expect-error directive.
  * @ts-expect-error: the following line of code has error but I choose to suppress the error. This brings attention to the developer that the bypass is no longer necessary.
  * @ts-ignore: if the following line of code has any type of errors, supporess it. The code can perfectly be fine and have no errors.

#### Type `unknown` on `catch` Clause
* Big improvement over `any`
* Forces you to deal with `instanceof Error` properly
```ts
function somethingRisky() {}
try {
    somethingRisky();
} catch(error: unknown) {
    if (error instanceof Error) {
        console.log(error.stack);
    } else {
        console.log(error);
    }
}
```

#### Assertion Functions
```ts
function isError(error: any): error is Error {
    return error instanceof Error;
}
```
* The return type of the function above is not only a boolean but an indication of whether the value is of type `Error`.

With the new assertion function feature:
```ts
function assertIsError(error: any): asserts error is Error {
    if (!(error instanceof Error)) {
        throw new Error(`Not an error: ${error}`);
    }
}

try {
    somethingRisky();
} catch (error: unknown) {
    assertIsError(error);
    console.log(error.stack);
}
```

#### Import Types
```ts
import type {someFunction} from \\"./util\\";
```
The code above only imports the type information of `someFunction`.

If you are using module bundlers like WebPack, you know that WebPack analyzes the code you import as a mechanism to split your code (so that you don't need to send code you don't need on page load).

Type imports is a way that we can refer to a type in a module without actually importing the entire function, this will not trigger additional code to be included in your bundle.