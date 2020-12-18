There are three kinds of throwables:
* checked exceptions
* runtime exceptions
* errors

## Guidance on when to apply different types of throwables

*Use checked exceptions for conditions from which the called can reasonably be expected to recover.*

By throwing a checked exception, you force the caller to handle the exception in a `catch` clause or to propagate it outward.

<pre>
public class SomeClass {
  // ...
  // ...
  public void mightThrow(...) throws SomeException {
      // ...
  }
}
</pre>

With a checked exception, the API designer presents a mandate to recover from the condition.
* User can choose to disregard the mandate by catching the exception and ignoring it, which is usually *a bad idea*.

Since checked exceptions indicate recoverable conditions, it is especiallly important for them to provide methods that furnish information to help the caller recover from the exceptional condition.

Example:

A checked exception is thrown when an attempt to make a purchase with a gift card fails due to insufficient funds.

In this case, the exception should provide an accessor method to query the amount of the shortfall.

There are two kinds of unchecked throwables:
* runtime exceptions
* errors
They behave the same, both are throwables that needn't and shouldn't be caught.
* If a program throws an unchecked exception or an error, it is the case that recovery is impossible and continued execution would do more harm than good.
* If a program does not catch such a throwable, it will cause the current thread to halt with an appropriate error message.

*Use runtime exceptions to indicate programming errors.*

It is not always clear whether you are dealing with a recoverable conditions or a programming error (e.g., resource exhaustion).

If it isn't clear whether recovery is possible, you are better off using an unchecked exception.

*Never implement any new `Error` subclasses.*
* Errors are reserved for us by the JVM to indicate resource deficiencies, invariant failures or other conditions that make it impossible to continue execution.

*All of the unchecked throwables implemented should subclass `RuntimeException`.*

It is possible to define a throwable that is not a subclass of `Exception`, `RuntimeException` or `Error`. They behave as ordinary checked exceptions (subclasses of `Exception` but not `RuntimeException`) -> Never implement it -> confuse the consumers of your API.

## Summary
* Throw checked exceptions for recoverable conditions.
* Trhow unchecked exceptions for programming errors.
* When in doubt, throw unchecked exceptions.
* Do not define any throwables that are neither checked exception nor runtime exceptions.
* Provide methods on your checked exceptions to aid in recovery.
