## Understand type narrowing
The opposite of widening is narrowing. The is the process by which TypeScript goes from a broad type to a narrower one.

A common example of narrowing is `null` checking.

<pre>
const el = document.getElementById('foo'); // Type is HTMLElement | null
if (el) {
    el // Type is HTMLElement
} else {
    el // Type is null
}
</pre>

A common way to help the type checker narrow your types is by putting an explicit tag on them:

<pre>
interface UploadEvent {
    type: 'upload';
    filename: string;
    contents: string;
}
interface DownloadEvent {
    type: 'download';
    filename: string;
}
type AppEvent = UploadEvent | DownloadEvent;

function handleEvent(e: AppEvent) {
    switch(e.type) {
        case 'download':
            e; // Type is DownloadEvent
            break;
        case 'upload':
            e; // Type is UploadEvent
            break;
    }
}
</pre>

This pattern is known as a tagged union.

If TypeScript is not able to figure out a type, you can even introduce a custom function to help it out.

<pre>
function isInputElement(el: HTMLElement): el is HTMLInputElement {
    return 'value' in el;
}
</pre>

This is known as a user-defined type guard. The `el is HTMLInputElement` as a return type tells the type checker that it can narrow the type of the paramenter if the function returns `true`.

If you perform some lookups in an array, you may wind up with an array of nullable types:

```typescript
const arr1 = ['1', '2', '3', '4', '5'];
const arr2 = ['1', '2', '7'].map(
    e2 => arr1.find(e1 => e1 === e2)
); // Type is (string | undefined)[]
```

If you filter out the `undefined` values using filter, TypeScript is not able to follow along:

```typescript
const arr1 = ['1', '2', '3', '4', '5'];
const arr2 = ['1', '2', '7'].map(
    e2 => arr1.find(e1 => e1 === e2)
).filter(e2 => e2!== undefined); // Type is (string | undefined)[]
```

However if you use a type guard, it can:

```typescript
function isDefined<T>(x: T | undefined): x is T {
    return x !== undefined;
}
const arr1 = ['1', '2', '3', '4', '5'];
const arr2 = ['1', '2', '7'].map(
    e2 => arr1.find(e1 => e1 === e2)
).filter(isDefined); // Type is string[]
```

