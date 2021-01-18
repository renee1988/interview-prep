## Use different variables for different types
In JavaScript it is no problem to reuse a variable to hold a differently typed value for a different purpose. In TypeScript, this results in two errors:

<pre>
let id = '12345';
fetchProduct(id);

id = 12345;
// ~~~~ '12345' is not assignable to type 'string'.
fetchProductBySerialNumber(id);
// ~~~~ Argument of type 'string' is not assignable to
//      parameter of type 'number'.
</pre>

TypeScript infers the type of `id` as `string`. You cannot assign a `number` to a `string` and hence the error.

**In TypeScript, while a variable value can change, its type generally does not.**

The common way a type can change is *to narrow*, but this involves a type getting smaller, not expanding to include new values.

How to fix the errors above?

<pre>
let id: string|number = '12345';
fetchProduct(id);

id = 12345;
fetchProductBySerialNumber(id);
</pre>

A better solution is to introduce a new variable:

<pre>
const id = '12345';
fetchProduct(id);

cosnt serial = 12345;
fetchProductBySerialNumber(serial);
</pre>
