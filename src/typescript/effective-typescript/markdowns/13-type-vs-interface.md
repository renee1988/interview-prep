There are two ways to define a named type in TypeScript:
<pre>
type TState = {
    name: string;
    capital: string;
}
</pre>

<pre>
interface IState = {
    name: string;
    capital: string;
}
</pre>

### Similarities between `type` and `interface`
* You can use an index signature with both `interface` and `type`
  <pre>
  type TDict = {[key: string]: string};
  interface IDict { [key: string]: string;
  }
  </pre>
* You can define function type with either `interface` or `type`
  <pre>
  type TFn = (x: number) => string;
  interface IFn {
      (x: number): string;
  }
  </pre>
  * the type alias looks more natureal for this straightforward function type.
* Both `type` and `interface` can be generic
  ```
  type TPair<T> = {
      first: T;
      second: T;
  };
  interface IPair<T> {
      first: T;
      second: T;
  }
  ```
* An `interface` can extend a `type` and a `type` can extend an `inteface`.
  <pre>
  interface IStateWithPop extends TState {
      population: number;
  }
  type TStateWithPop = IState & {population: number;};
  </pre>
  * an `interface` cannot extend a complex type like a union type. If you want to do that, you need to use `type` and `&`.
* A class can implement either an `interface` or a simple type.

### Differences between `type` and `interface`
* There is union `type` but no union `interface`. An interface cannot extend `AorB`.
  <pre>
  type AorB = A | B;
  </pre>
* **A `type` is in general more capable than an `interface`.**
  * it can be a union.
  * it takes advantages of more advanced features like mapped or conditional types.
  * it can more easily express tuple and array types:
    <pre>
    type Pair = [number, number];
    type NamedNums = [string, ...number[]];
    </pre>
* An `interface` can be argumented, a `type` cannot: declaration merging

```
interface IState {
    name: string;
    capital: string;
}
interface IState {
    population: number;
}

const wyoming: IState = {
    name: 'Wyoming',
    capital: 'Cheyenne',
    population: 500_000,
};
```

* TypeScript uses merging to get different types for the different versions of JavaScript standard library.

### When to use `type` or `interface`
* Are you publishing type declarations for an API? If so, it might be helpful for your users to beable to merge in new fields via an `interface` when the API changes.
* You should also take into account of consistency: are you working in a codebase that consistently uses `type`? If so, you probably would prefer using `type`.