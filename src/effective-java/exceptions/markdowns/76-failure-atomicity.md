An object should be in a well-defined usable state after it throws an exception.
* Especially true for checked exceptions, since the caller expects to recover from the exception.

## Failure atomicity
**Failure atomicity: A failed method invocation should leave the object in the state that it was in prior to the invocation.**

### Way to achieve failure atomicity
1. Design immutable objects: if the object is immutable, failure atomicity is **free**.
* If an operation fails, the invokation will not create and return a new object.
* it will never leave an existing object in an inconsistent state. Once the object is created, it cannot be modified.

2. For mutable objects, design the mutation methods in the way that it always check parameters for validity before performing the operation.
* This will let most exceptions to get thrown before the object modification commences.
```java
// Pop operation on an array
public Object pop() {
    if (this.size == 0) {
        throw new EmptyStackException();
    }
    Object result = elements[this.size--];
    elements[this.size] = null;
    return result;
}
```
If we do not validate the `size` field first, the exception will still be thrown but the `size` field will be left out in a bad state, causing all the future method invocations on the object to fail.

3. For method parameters that cannot be checked/validated, order the computation before any modification to the object takes place.
* For example `TreeMap` (whose elements are sorted), to add an element to the `TreeMap`, the element must be of a type that can be compared using the TreeMap ordering.

4. Perform any operation on a temporary copy of the object and replace the contents of the object with the temporary copy once the operation is complete.
* For example, some sorting function copies the input list into an array prior to sorting to reduce the cost of accessing elements in the inner loop of the sort. This is done for performance, but as an additional benefit, it ensures that the input list will be untouched if the sort fails.

5. Write *recovery code* that intercepts a failure that occurs in the midst of an operation, and cause the objec to roll back its state to the point before the operation began.

## Failure Atomicity: not always achievable
When two threads attempt to modify the same object concurrently without proper synchronization, failure atomicity is not achievable in this case, the object will be left in an inconsistent state.
**It would be wrong to assume taht an object was still usable after catching a `ConcurrentModificationException`.**