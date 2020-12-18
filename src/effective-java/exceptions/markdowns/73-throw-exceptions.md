## Exception translation
**Higher layers should catch lower-level exceptions and in their place, throw exceptions that can be explained in terms of the higher-level abstraction.**
<pre>
try {
    // ...
} catch (LowerLevelException e) {
    trhow new HigherLevelException(...);
}
</pre>

Example: `get` method of `AbstractSequentialList` which is an implementation of `List`.
<pre>
pulbic E get(int index) {
    ListIterator<E> i = listInterator(index);
    try {
        return i.next();
    } catch (NoSuchElementException e) {
        throw new IndexOutOfBoundsException("Index: " + index);
    }
}
</pre>

## Exception chaining
Exception chaining is useful when the lower-level exception might be helpful to someone debugging the problem that caused the higher-level exception.
<pre>
try {
    // ...
} catch (LowerLevelException lowerLevelCause) {
    throw new HigherLevelException(lowerLevelCause);
}
</pre>
<pre>
// Exception with chaining-aware constructor
class HigherLevelException extends Exception {
    HigherLevelException(Throwable cause) {
        super(cause);
    }
}
</pre>
* Most standard exceptions have chaining-aware constructors.
* You can set the cause using `Throwable.initCause` for exceptions that do not have chainging-aware constructors.

## Best practices
1. The best way to deal with exceptions from lower layers is **to avoid them**, by ensuring that lower-level methods succeed.
2. If (1) is not possible, the next best thing is to have the higher layer silently work around these exceptions, insulating the caller of the higher-level method from lower-level problems.