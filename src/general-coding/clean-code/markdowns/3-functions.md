## Functions
In order to make sure our functions are doing *one thing*, we need to make sure that the statements within our function are all at the same level of abstraction.

We want the code to read like a top-down narrative. We want every function to be followed by those at the next level of abstraction.

We cannot always avoid switch statements, but we can make sure that each switch statement is buried in a low-level class and is never repeated.

When a function needs more than 2-3 arguments, it is likely that some of those arguments outght to be wrapped into a class of their own.

<pre>
Circle makeCircle(double x, double y, double radius);
Circle makeCircle(Point center, double radius);
</pre>

Choosing good names for a function can go a long way toward explaining the intent of the function and the order and intent of the arguments.

**The function and arguments should form a very nice verb/noun pair.**

Avoid side effects in functions.
* Side effects are lies, your function promises to do one thing, but it also does other *hidden* things.
  * Sometimes it will make unexpected changes to the variables of its own class.
  * Sometimes it will make them to the parameters passed into the function or to system globals.

Avoid using output arguments.
<pre>
public void appendFooter(StringBuffer report) { ... }

appendFooter(r);
</pre>

Doe this function append `r` as the footer to something? Or does it append some footer to `r`? This requires the reader to check the function implementation.
