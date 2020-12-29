The purpose of`varargs` is to allow clients to pass a variable number of arguments to a method, but it is a *leaky absctraction*.
* When you invoke a `varargs` method, an array is created to hold the `varargs` parameters.
* This array, which should be an implementation detail, is **visible**.

You will get confusing warnings when `varargs` parameters have generic or parameterized types.
* All generic and parameterized types are non-reifiable. If a method declares its varargs parameter to be of a non-reifiable type, the compiler generates a confusing warning on the declaration.
* If a method is invoked on `varargs` parameters whose inferred type is non-reifiable, the compiler generates a warning on the invokation.

```
warning: [unchecked] Possible heap pollution from parameterized vararg type ...
```

**Heap Pollution** occurs when a variable of a parameterized type refers to an object that is not of that type.

```java
// Mixing generics and varargs can violate type safety
static void dangerous(List<String>... stringLists) {
    List<Integer> intList = List.of(42);
    Object[] objects =  stringLists;
    objects[0] = intList; // Heap pollution
    String s = stringLists[0].get(0); // ClassCastException
}
```

**It is unsafe to store a value in a generic varargs array parameter.**

### Why is it legal to declare a method with a generic `varargs` parameter?
The methods with `varargs` parameters of generic or parameterized types can be very useful in practice, so the language designer opted to live with this inconsistency.

Java libraries export serveral such methods:
* `Arrays.asList(T... items)`
* `Collections.addAll(Collection<? super T> c, T... otherElements)`
* `EnumSet.of(E first, E... rest)`

### How to suppress the warnings?
Prior to Java 7, you had to use `@SuppressWarnings("unchecked")` to eliminate the warnings at every call site.

In Java 7, the `SafeVarargs` annotation was added to the platform, to allow the author of a method with a generic `varargs` parameter to suppress client warnings automatically.

**the `SafeVarargs` annotation constitutes a promise by the author of a method that it is typesafe.**

### How to ensure a method with a generic `varargs` parameter safe?
A method with a generic `varargs` parameter is safe:
1. If the method does not store anything into the array, which overrides the parameters: it does not store anything in the `varargs` parameter array, and
2. If it does not allow a reference to the array to escape, which would enable untrusted code to access the array: it does not make the array (or a clone) visible to untrusted code.

Note: In Java 8, `SafeVarargs` is only legal on static methods and final instance methods.
