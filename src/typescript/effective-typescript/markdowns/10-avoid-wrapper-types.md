In additio to object, JavaScript has 7 types of primitive values:
* string
* number
* boolean
* null
* undefined
* symbol
* bigint

Primitives are distinguished from objects by being *immutable* and not *having methods*.

You may argue that `string` does have methods, which is wrong. `string` primitive type does not have methods, JavaScript defines a `String` object type that does have methods. **JavaScript freely converts between these types.** When you access a method like `charAt` on a `string` primitive, JavaScript wraps it in a `String` object, calls the method and then throws the object away.

<pre>
const originalCharAt = String.prototype.charAt;
String.prototype.charAt = function(pos) {
    // *this* value here is a String object wrapper.
    console.log(this, typeof this, pos);
    return originalCharAt.call(this, pos);
}

console.log('primitive'.charAt(3));

// Output:
[String: 'primitive'] 'object' 3
m
</pre>

The implicit conversion to object wrapper types explains an add phenomenon in JavaScript:
<pre>
> x = 'hello';
> x.language = 'English';
'English'
> x.language
undefined
</pre>

`x` is converted to a `String` instance, the `language` property is set on that instance, and then the instance is thrown away.

These object wrapper types exist as a convenience to provide methods on the primitive values and to provide static methods, but there is usually no reason to instantiate them directly.

TypeScript models this distinction by having distinct types for the primitives and their object wrappers.
* `string` and `String`
* `number` and `Number`
* `boolean` and `Boolean`
* `symbol` and `Symbol`
* `bigint` and `BigInt`

When you try to pass a `String` object to a method that expects a `string`:
<pre>
function isGreeting(phrase: String) {
    return ['hello', 'good day']
        .includes(phrase);
        // ~~~ Argument of type 'String' is not
        //     assignable to parameter of type
        //     'string'.
        // 'string' is a primitive, but 'String'
        // is a wrapper object; prefer using 
        // 'string' when possible.
}
</pre>

**`string` is assignable to `String`, but `String` is not assignable to `string`.**