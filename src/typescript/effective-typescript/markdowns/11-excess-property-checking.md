When you assign an object literal to a variable with a declared type, *TypeScript makes sure it has the properties of that type and no others*.

<pre>
interface Room {
    numDoors: number;
    ceilingHeight: number;
}

const r: Room = {
    numDoors: 1,
    ceilingHeight: 10,
    elephant: 'present',
    // ~~~ Object literal may only specify known properties
    //     and 'elephant' does not exist in type 'Room'.
};
</pre>

This seems odd that there is an `elephant` property, this does not make much sense from a structural typing point of view (refer to item 4). The constant `r` is assignable to the `Room` type by introducing an intermediate variable:

<pre>
const obj = {
    numDoors: 1,
    ceilingHeight: 10,
    elephant: 'present',
};
const r: Room = obj; // OK.
</pre>

The type of `obj` is inferred as `{numDoors: number, ceilingHeight: number, elephant: string}`. Since this type includes a subset of the values of the `Room` type, it is assignable to `Room` and the code passes the type checker.

In the first example, you have triggered a process known as `excess property checking`, which helps catch an important class of errors that the structural type system would otherwise miss.

### Limit of excess property checking
TypeScript tries to find code that does not do what you intend.

<pre>
interface Options {
    title: string;
    darkMode?: boolean;
}

function createWindow(options: Options) {
    if (options.darkMode) {
        setDarkMode();
    }
    // ...
}

createWindow({
    title: 'Spider Solitaire',
    darkmode: true,
    // ~~~ Object literal may only specify known properties,
    //     but 'darkmode' does not exist in type 'Options'.
    //     Did you mean to write 'darkMode'?
});
</pre>

A purely structural type checker would not be able to spot this sort of error because the domain of the `Options` type is broad: it includes all objects with a `title` property that is string and any other properties, since `darkMode` is optional.

It is easy to forget how **expansive** TypeScript types can be.

<pre>
const o1: Options = document; // OK.
const o2: Options = new HTMLAnchorElement; // OK.
</pre>

Both `document` and `HTMLAnchorElement` has `title` property with `string` type. Therefore it is fine to assign them to a variable with type `Options`.

Excess property checking tries to rein this in without compromising the fundamentally structural nature of the type system. It does this by disallowing unknown properties specifically on *object literals* (called `strict object literal checking`).
* Neither `document` nor `new HTMLAnchorElement` is an object literal, so they did not trigger the checks.
* This also explains why using an intermediate variable without a type annotation makes the error go away: 
  <pre>
  const intermediate = {darkmode: true, title: 'Ski Free'};
  const o: Options = intermediate;
  </pre>
  * RHS of the first line is an object literal.
  * RHS of the second line is not an object literal.

Excess property checking does not happen when you use a type assertion:
<pre>
const o = {darkmode: true, title: 'Ski Free'} as Options; // OK.
</pre>

This is a good reason to prefer using type declaration to type assertion.

### A related check for weak types
A weak type has only optional properties:
<pre>
interface LineChartOptions {
    logscale?: boolean;
    invertedYAxis?: boolean;
    areaChart?: boolean;
}
const opts = {logScale: true};
const o: LineChartOptions = opts;
// ~~~ Type '{logScale: boolean;}' has no properties in common
//     with type 'LineChartOptions'.
</pre>

For weak types like `LineChartOptions`, TypeScript adds another check to make sure that the value type and declared type have at least one property in common.

Unlike excess property checking, it happens during **ALL** assignability checks involving weak types.
* Factoring out an intermediate variable (e.g., above example) does not bypass this check.

**Excess property checking is very limited in scope: it only applies to object literals.**