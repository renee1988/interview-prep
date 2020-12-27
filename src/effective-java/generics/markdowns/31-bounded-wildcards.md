Parameterized types are *invariant*.
* For two distinct types `Type1` and `Type2`, `List<Type1>` is neither a subtype nor a supertype of `List<Type2>`.
* Although it is counterintuitive that `List<String>` is not a subtype of `List<Object>`.

Consider the `Stack` class:

```java
public class Stack<E> {
    public Stack();
    public void push(E e);
    public E pop();
    public boolean isEmpty();
}
```

Add a method that takes a sequence of elements and pushes them onto the stack:

```java
public void pushAll(Iterable<E> src) {
    for (E e : src) {
        push(e);
    }
}
```

This compiles fine, but the following code will not work as expected:

```java
Stack<Number> numberStack = new Stack();
Iterable<Integer> integers = ...;
numberStack.pushAll(integers); // Compilation error
```

To get away from this error: **bounded wildcard type**

```java
// The input parameter is an iterable of some subtype of E
// Wildcard type for a parameter that serves as an E producer
public void pushAll(Iterable<? extends E> src) {
    for (E e : src) {
        push(e);
    }
}
```

Add a method that pops each element off the stack and adds the elements to the given collection.

```java
public void popAll(Collection<E> dst) {
    while (!isEmpty()) {
        dts.add(pop());
    }
}
```

Again this compiles file, but the following code will not work as expected:

```java
Stack<Number> numberStack = new Stack();
Collection<Object> objects = ...;
numberStack.popAll(objects); // Compilation error
```

`popAll` should not be `collection of type E` but `collection of some supertype of E`.

```java
// Wildcard type for a parameter that serves as an E consumer
public void popAll(Iterable<? super E> dst) {
    while (!isEmpty()) {
        dts.add(pop());
    }
}
```

**For maximum flexibility, use wildcard types on input parameters that represent producers or consumers.**
* if an input parameter is both a producer and a consumer, then wildcard types will not help you. You will need an exact type match.
* **PECS** stands for producer-extends, consumer-super.
  * if a parameterized type represents a `T` producer, use `<? extends T>`.
  * if a parameterized type represents a `T` consumer, use `<? super T>`.

**Do not use wildcard types as return types.**
* it will force the users of this method to use wildcard types in client code.

Revise the declaration of `max` method in Item 30:
```java
// Original version
public static <T extends Comparable<T>> T max(List<T> list)
// Revised version
public static <T extends Comparable<? super T>> T max(List<? extends T> list)
```
* Comparables are always *consumers*. You should always prefer to use `Comparable<? super T>`.

