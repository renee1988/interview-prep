## Generics Definition
A class or an interface whose declaration has one or more type parameters is a **generic** class or interface.

Example: `List` interface has a single type parameter, representing its element type.
* `List<E>`: a `List` of element with type `E`

Generic classes and interfaces are known as **generic types**
* Each generic type defines a set of parameterized types
* `List<String>` is a parameterized type representing a list whose elements are of type `String`.

Each generic type defines a **raw type**.
* A raw type of `List<E>` is `List`.
* A raw type behaves as if all of the generic type information were erased from teh type delaration.
* It exists for compatibility with pre-generic code.

## Raw type example
<pre>
// Raw Collection type - DON'T DO THIS
private final Collection stamps = ...;
</pre>

If you use this declaration and then accidentally put an element of type `Coin` into the `stamps` collection, it will compile and run without error.
<pre>
stamps.add(new Coin(...));
</pre>

You do not get an error until you try to retrieve the `coin` from `stamps`:
<pre>
for (Iterator i = stamps.iterator(); i.hasNext()) {
    // Throws ClassCastException
    Stamp stamp = (Stamp) i.next();
}
</pre>

## Use generics
With generics, the type declaration contains the information:
<pre>
private final Collection<Stamp> stamps = ...;
</pre>
* From this declartion, the compiler knows that stamps should contain only `Stamp` instances. If not, the code will fail at the compilation time.

**If you use raw types, you lose all the safety and expressiveness benefits of generics.**

## Exceptions
* You must use raw types in class literals.
* Since generic type information is erased at runtime, it is illegal to use the `instanceof` operator on parameterized types other than unbounded wildcard types.
<pre>
if (o instanceof Set) {
    Set<?> s = (Set<?>) o;
}
</pre>