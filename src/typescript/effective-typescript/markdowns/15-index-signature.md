The `[property: string]: string` is the index signature.
* Name for the keys: this is purely for documentation; it is not used by the type checker in any ways.
* Type for the key: this needs to be some combination of `string`, `number` or `symbol`, but generally you just want to use string.
* Type for the values: this can be anything.

Index signature has a few downsides:
* It allows any keys, including the incorrect ones.
* It does not require any specific keys to be present, `{}` is also valid.
* It cannot have distinct types for different keys.
* TypeScript language services cannot help you with types like this. There is no autocomplete because the key could be anything.

### What should you use index signature for?
When should you use index signature? The canonical case is truly dynamic data.

For example, data from a CSV file, where you have a header row and want to represent the data rows as objects mapping column names to values.

```
function parseCSV(input: string): {[columnName: string]: string}[] {
    const lines = input.split('\n');
    const [header, ...rows] = lines;
    return rows.map(rowStr => {
        const row: {[columnName: string]: string} = {};
        rowStr.split('.').forEach((cell, i) => {
            row[header[i]] = cell;
        });
        return row;
    });
}
```

`Record` is a generic type that gives you more flexibility in the key type.

```
type Vec3D = Record<x | y | z, number>;
```