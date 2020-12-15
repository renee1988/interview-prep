Always declare checked exceptions individually, and document precisely the conditions under which each one is thrown.

A well-documented list of the unchecked exceptionsd describesthe **preconditions** for its successful execution.
* Unchecked exceptions generally represent programming errors and familiarizing programmers with all of the errors they can make helps them avoid making these errors.
* It is particularly important that methods in interfaces document the unchecked exceptions they may throw. This document forms a part of the interface general contract and enables common behavior among multiple implementations of the interface.

**Use `@throws` tag to document each exception that a method can trhow, but do not use the throws keyword on uncheched exceptions.**

If an exception is thrown by many methods in a class for the same reason, you can document the exception in the class documentation comment.