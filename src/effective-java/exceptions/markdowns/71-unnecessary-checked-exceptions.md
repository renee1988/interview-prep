If a method throws checked exceptions, the code that invokes it must handle them in one or more catch blocks, or declare that it throws them and let them propagate outward.

**Checked exceptions put a burden on the user of the API.**

**Methods throwing checked exceptions cannot be used directly in streams.**

Use checked exceptions if the exceptional condition cannot be prevented by proper use of the API *and* the programmer using the API can take some useful action once confronted with the exception.

Otherwise use unchecked exceptions.

## How to eliminate checked exceptions?
* The easist way to eliminate checked exceptions is to **return an optional of the desired result type**. The shortcoming of this solution is that you can't provide additional details on why it fails perform the desired computation.

* You can always turn a checked exception into an unchecked exception. 
<pre>
// Invocation with checked exception
try {
    // ...
} catch(SomeCheckedException e) {
    // ...
}
</pre>
<pre>
// Invocation with state-testing method and unchecked exception
if (someConditionCheck) {
    fn();
} else {
    // Handle exceptional condition
}
// Alternative: if the programmer knows the call will succeed, or
// is content to let the thread terminate if it fails:
fn();
</pre>

## Summary
* If callers won't be able to recover from failures, throw unchecked exceptions.
* If recovery may be possible and you want to force the callers to handle exceptional conditions:
  * consider returning an optional first
  * only if this would not provide sufficient information on the failure, throw checked exception.