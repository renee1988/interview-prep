The stack trace contains the **string** representation of the exception thrown (by invoking `toString` method on the exception object).
* It typically consists of the exception class name and its **detail message**.
* It is crucial that the exception `toString` method return as much information as possible concerning the cause of the failure.

**To capture a failure, the detial message should contain the values of all the parameters and fields that contributed tot he exception.**

Example `IndexOutOfBoundsException` should contain the lower and upper bound, and index value that fialed to lie between the bouinds.

**Do not include passwords, encryption keys and the like in the detail message.**

To ensure the exceptions contain adequate failure-capture information in their detail message, require the information in their constructors.