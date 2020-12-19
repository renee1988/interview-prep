* unchecked cast warnings
* unchecked method invocation warnings
* unchecked conversion warnings
* unchecked parameterized varag type warnings

```java
// warning: unchecked conversion
// required: Set<Lark>
// found:    HashSet
Set<Lark> exaltation = new HashSet();
```
Fix for the above code:
```java
// <> diamond operator tells the compiler to infer
// the correct actual type parameter.
Set<Lark> exaltation = new HashSet<>();
```

**Eliminate every unchecked warnings that you can.**
* if you eliminate all the unchecked warnings, you are assured your code is **typesafe**,
* **typesafe** means you will not get a `ClassCastException` at runtime.
* if you cannot eliminate a warning but you can prove that the code that provoked the warning is typesafe, then suppress the warning with an `@SuppressWarnings("unchecked")` annotation.
  * always use the `SuppressWarnings` annotation on the smallest scope possible.
  * it is illegal to put a `SuppressWarnings` annotation on the return statement because it is not a declaration. You might need to declare a local variable to hold the return value and annotate its declaration.
* every time you use `@SuppressWarnings("unchecked")` annotation, add a comment saying why it is safe to do so.