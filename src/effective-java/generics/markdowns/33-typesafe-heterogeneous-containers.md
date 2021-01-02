Common uses of generics include:
* Collections: `Set<T>`, `Map<K, V>`
* Single-element containers: `ThreadLocal<T>`, `AtomicReference<T>`

Sometimes you might need more flexibility, for example, a database row can have arbitrarily many columns and it would be nice to be able to access all of them in a typesafe manner.

The idea is to *parameterize the key instead of the container*.

Consider a `Favorites` class that allows its clients to store and retrieve a favorite instance of arbitrarily many types.
* `Class` object for the type will play the part of the parameterized key.
* The reason this works is that class `Class` is generic: `String.class` is of type `Class<String>`.
* When a class literal is passed among methods to communicate both compile-time and runtim type information, it is called a **type token**.

```java
// Typesafe heterogeneous container pattern - API
public class Favorites {
    public <T> void putFavorite(Class<T> type, T instance);
    public <T> T getFavorite(Class<T> type);
}
```

```java
// Typesafe heterogeneous container pattern - Client
public static void main(String[] args) {
    Favorites f = new Favorites();
    f.putFavorite(String.class, "Java");
    f.putFavorite(Integer.class, 0xcafebabe);
    f.putFavorite(Class.class, Favorites.class);
    String favString = f.getFavorite(String.class);
    int favInt = f.getFavorite(Integer.class);
    Class<?> favClass = f.getFavorite(Class.class);
    System.out.printf("%s %x %s%n", favString, favInt, favClass.getName());
}
```

A `Favorites` instance is *typesafe*.
* it will never return an `Integer` when you ask it for a `String`.
* it is also heterogeneous: unlike an ordinary map, all the keys are of different types.

```java
// Typesafe heterogeneous container pattern - Implementation
public class Favorites {
    // Every key can have a different parameterized type.
    private Map<Class<?>, Object> favorites = new HashMap<>();
    public <T> void putFavorite(Class<T> type, T instance) {
        // Achieve runtim type safety with a dynamic cast
        favorites.put(Objects.requireNonNull(type), type.cast(instance));
    }
    public <T> T getFavorite(Class<T> type) {
        return type.cast(favorites.get(type));
    }
}
```

The implementation of `getFavorite`:
1. It gets from the `favorites` map the value corresponding to the given `Class` object. This is the correct object reference to return, but it has the wrong compile-time type: it is `Object`and we need to return a value of type `T`.
2. `getFavorite` dynamically casts the object reference to the type represented by the `Class` object.
  * `Class.cast` checks that its argument is an instance of the type represented by the `Class` object (`Class<T>`). If so, returns the argument. Otherwise throws `ClassCastException`.

```java
public class Class<T> {
    T cast(Object obj);
}
```

`Favorites` class cannot be used on a non-reifiable type.
* You can store your favorite `String` or `String[]`.
* You cannot store your favorite `List<String>` or `List<Integer>`.
  * The class literal `List<String>.class` is a syntax error: `List<String>` and `List<Integer>` share the same `Class` object: `List.class`.

The type tokens used by `Favorites` are unbounded. What if you want to pass an object of type `Class<?>` to a method that requires a bounded type token?

```java
public <T extends Annotation> T getAnnotation(Class<T> annotationType);
```

```java
// Use of asSubclass to safely cast to a bounded type token
static Annotation getAnnotation(
    AnnotatedElement element,
    String annotationTypeName) {
    Class<?> annotationType = null;
    try {
        annotationType = Class.forName(annotationTypeName);
    } catch(Exception e) {
        throw new IllegalArgumentException(e);
    }
    return element.getAnnotation(annotationType.asSubclass(Annotation.class));
}
```
