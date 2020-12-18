# Use exceptions only for exceptional conditions

<pre>
try {
    int i = 0;
    while(true) {
        range[i++].climb();
    }
} catch(ArrayIndexOutOfBoundsException e) {}
</pre>

The inifinite loop terminates by throwing, catching and ignoring an `ArrayIndexOutOfBoundsException` when it attempts to access the first array element outside the bounds of the array.

Why would someone write the code above?

Reasoning: VM checks the bounds of all array accesses, the normal loop termination test -- hidden by the compiler but still present in the for-each loop -- is redundant and should be avoided.

What is wrong with the reasoning above?
* Exceptions are designed for exceptional circumstances, there is little incetive for JVM implementors to make them as fast as explicit tests.
* Placing code inside a try-catch block inhibits certain optimizations that JVM implementations might otherwise perform.
* The standard idiom for looping through an array doesn't necessarily result in redundant checks. Many JVM implementations optimize them away.
* In fact, exception-based idiom is far slower than the standard one.

What else is wrong with the code above?
* It is not guaranteed to work. If there is a bug in the loop, the use of exceptions for *flow control* can mask the bug.
  * If a reasonable loop idiom is used, the bug would generate an uncaught exception, resulting in immediate thread termination with a full stack trace.
  * If the exception-based loop idiom is used, the bug-related exception would be caught and misinterpreted as a normal loop termination.

**Exceptions are to be used only for exceptional conditions, they should never be used for ordinary control flow.**

A class with a "state-dependent" method that can be invoked only under certain unpredictable conditions should generally have a separate "state-testing" method indicating whether it is appropriate to invoke the state-dependent method.
* Example: iterator.next() & iterator.hasNext()

An alternative to providing a separate state-testing method is to have the state-dependent method return an empty optional or a distinguished return value (`null`).

If an object is to be accessed concurrently without external synchronization or is subject to externally induced state transitions, *you must use an optional or distinguished return value*, as the object state could change in the interval between the invocation of a state-testing method and its state-dependent method.

Performance concerns may dictate that an optional or distinguished return value be used if a separate state-testing method would duplicate the work of the state-dependent method.

State-testing method is mildly preferrable to a distinguished return value.
  * Readability.
  * Incorrect use may be easier to detect.
    * if you forget to call a state-testing method, the state-dependent method will throw an exception, making the bug obvious
    * if you forget to check for a distinguished return value, the bug may be subtle
    