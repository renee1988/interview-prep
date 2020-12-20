Static utility methods that operate on parameterized types are generic.
* All of the algorithm methods in `Collections` are generic: e.g., `binarySearch` and `sort`.
* The type parameter list, which declares the type parameters, goes between a method modifiers and its return type.
Example of a generic method:
```java
// Generic method
public static <E> Set<E> union(Set<E> s1, Set<E> s2) {
    Set<E> result = new HashSet<>(s1);
    result.addAll(s2);
    return result;
}
```
Example of a program exercising the generic method:
```java
pulbic static void main(String[] args) {
    Set<String> guys = set.of("Tom", "John", "Harry");
    Set<String> stooges = set.of("Larry", "Moe", "Harry");
    Set<String> aflCio = union(guys, stooges);
    System.out.println(aflCio);
}
```

### Generic singleton factory
There are times that you need to create an object that is immutable but applicable to many different types.

Since generics are implemented by **erasure**, you can use a single object for all required type parameterizations, but you need to write a *static factory method* to repeatedly dole out the object for each requested type parameterization. <- Generic Singleton Factory.
```java
// Generic singleton factory pattern
private static UnaryOperator<Object> IDENTITY_FN = (t) -> t;
@SuppressWarnings("unchecked")
public static <T> UnaryOperator<T> identityFunction() {
    return (UnaryOperator<T>) IDENTITY_FN;
}
```
* It would be wastful to create a new identity function object for each type, since it is stateless, generic singleton factory is suffice.
* The cast from `UnaryOperator<Object>` to `UnaryOperator<T>` will cause an unchecked cast warning, but we know IDENTITY_FN is returning the value of T directly, it is type safe.

### Recursive type bound
It is relatively rare for a type parameter to be bounded by some expression involving the type parameter itself, which is called **recursive type bound**.
* a common use of recursive type bounds is in connection with the `Comparable` interface.
```java
public interface Comparable<T> {
    int compareTo(T o);
}
```
Every element in a comparable collection is comparable to every other element in the collection <- **mutually comparable**.
```java
// Using a recursive type bound to express mutual comparability
public static <E extends Comparable<E>> E max(Collection<E> collection);
```
* The type bound `<E extends Comparable<E>>` is read as `any type E that can be compared to itself`.