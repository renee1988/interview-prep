## Avoid cluttering your code with inferable types
In TypeScript many annotations are unnecessary, declaring types for all your variables is conterproductive and is considered poor style.

For example, do not write `let x: number = 12;`. You should write `let x = 12;`. The type of `x` can be inferred to `number`. The explicit type annotation is redundant in this case.

TypeScript infers something more precise than you expect.

<pre>
const axis1: string = 'x'; // Type is string
const axis2 = 'y'; // Type is 'y'
</pre>

`y` is a more precise type for the `axis` variable.

Allows types to be inferred can also facilitate refactoring.

<pre>
interface Product {
    id: number;
    name: string;
    price: number;
}
function logProduct(product: Product) {
    const id: number = product.id;
    const name: string = product.name;
    const price: number = product.price;
    // ...
}
</pre>

At some point, you realize that product IDs can be strings in addition to numbers. If you change the type of `id` in `Product`. In the above example, because it includes explicit annotations on all the variables in `logProduct`, there will be type errors during this refactoring.

### When to specify type
There are a few situations where you may want to specify a type even where it can be inferred.

#### Object literal
<pre>
const elmo: Product = {
    name: 'test_product_name',
    id: 'abc',
    price: 10,
};
</pre>

When you specify a type on a definition like this, you enable excess property checking.

#### Function return types
You may want to annotate the function return types even when it can be inferred to ensure that the implementation errors do not leak out into uses of the function.