### Arrays are **covariant**
What does covariant mean? Example: if `Sub` is a subtype of type `Super`, then the array type `Sub[]` is a subtype of the array type `Super[]`.

Generics are **invariant**. Example: for any two distinct types `Type1` and `Type2`, `List<Type1>` is neither a subtype nor a supertype of `List<Type2>`.

```java
// Fails at runtime:
Object[] objectArray = new Long[1];
// Throws an ArrayStoreException:
objectArray[0] = "I do not fit in";
```
```java
// Will not compile, incompatible types
List<Object> objectList = new ArrayList<Long>();
objectList.add("I do not fit in");
```
Either way you cannot put a `String` into a `Long` container.
* With array, you find out the mistake at **runtime**.
* With list, you find out at **compile time**.

### Arrays are **reified**
What does reified mean? Array knows and enforces its element type at **runtime**.

Generics are implemented by **erasure**, which means they enforce their type constraints only at **compile time** and discard (or *erase*) their element type information at runtime.
* Erasure is what allows generic types to interoperate freely with legacy code that did not use generics, ensuring a smooth transition to generics in Java 5.

Due to these two fundamental differences between arrays and generics, arrays and generics do not mix well.
```java
// Illegal array creation expressions:
new List<E>[]
new List<String>[]
new E[]
// All of the above will result in generic array creation errors
// at compile time.
```

> Why is it illegal to create a generic array?
**Because it is not typesafe.**