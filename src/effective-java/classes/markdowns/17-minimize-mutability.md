## Advantages of Immutability

An **immutable** class is simply a class whose **instances cannot be modified**
* All of the information contained in each instance is fixed for the lifetime of the object, so no changes can ever be observed.
* Examples in Java platform libraries: String, boxed primitive classes (Boolean, Integer, Float, Double, etc.)

To make a class immutable:
* Don’t provide methods that modify the object’s state (mutators, setters)
* Ensure that the class can’t be extended.
  * Prevents subclasses from compromising the immutable behavior of the class.
  * Makes the class **`final`**.
* Make all fields **`private`**
* Ensure exclusive access to any mutable components.
  * If your class has any fields that refer to mutable objects, ensure that clients of the class cannot obtain references to these objects.
  * Make defensive copies in constructors, accessors and readObject methods.

<pre>
// Example: immutable class
public final class Complex {
    private final double re;
    private final double im;
    ...
    // Functional approach: instead of modifying this instance,
    // create and return a new Complex instance.
    public Complex plus(Complex c) {
        return new Complex(re + c.re, im + c.im)
    }
}
</pre>

* Immutable objects are simple, it can be in only one state.
* **Immutable objects are inherently thread-safe, they require no synchronization**.
  * They can’t be corrupted by multiple threads accessing them concurrently.
  * They can be shared freely.
* Immutable classes should encourage clients to reuse existing instances wherever possible (reducing memory footprint and garbage collection costs).
  * You can provide public static final constants for commonly used values.
  * An immutable class can provide static factories that cache frequently requested instances to avoid creating new instances when existing ones would do.
* You need not and should not provide a clone method or copy constructor on an immutable class.
  * String class does have a copy constructor, but you should not use it.
* Immutable objects make great building blocks for other objects.
  * **Immutable objects make great map keys and set elements**.

## Disadvantages of Immutability
**Immutable classes require a separate object for each distinct value.**
* Creating these objects can be very costly, especially if they are large.
* Example: change its lower-order bit of a million-bit BigInteger.

The performance problem is magnified if you perform a multistep operation that generates a new object at every step, eventually discarding all objects except the final result.

## Design alternatives

* Instead of making an immutable class final, you can make all of its constructors private or package-private, and add public static factories in place of the public constructors.
* It allows the use of multiple package-private implementation classes
* Some immutable classes have one or more non-final fields in which they cache the results of expensive computations the first time they are needed. This trick works precisely because the object is immutable, which guarantees that the computation would yield the same result if it were repeated.

Note: constructors should create fully initialized objects with all of their invariants established.
* Do not provide a public initialization method separate from the constructor or static factory unless there is a compelling reason to do so.