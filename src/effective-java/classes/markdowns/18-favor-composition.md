It is safe to use inheritance:
* within a package, subclass and superclass are all under the control of the same programmers
* when extending classes specifically designed and documented for extension

Inheriting from ordinary concrete classes across package boundaries is dangerous → **inheritance violates encapsulation**.
* If superclass changes, the subclass might break even though its code has not been touched

## Example: `HashSet` extension
Suppose that we need a way to query the HashSet as to how many elements have been added since it is created.

<pre>
// Broken - Inapproporiate use of inheritance
public class InstrumentedHashSet<E> extends HashSet<E> {
    private int addCount = 0;
    // ... constrcutors
    @Override
    public boolean add(E e) {
        addCount++;
        return super.add(e);
    }
    @Override
    public boolean addAll(Collection<? extends E> c) {
        addCount += c.size();
        return super.addAll(c);
    }
    public int getAddCount() {
        return addCount;
    }
}
// This class doesn't work:
InstrumentedHashSet<String> s = new InstrumentedHashSet<>();
s.addAll(List.of("A", "B", "C"));
// addCount is 6 instead of 3, since HashSet's addAll method is implemented
// on top of its add method.
</pre>

We can "fix" `InstrumentedHashSet` by eliminating its override of the `addAll` method. This self-use is an implementation detail, not guaranteed to hold in all implementations of all Java platform and subject to change from release to release → the resulting `InstrumentedHashSet` is fragile.

## Composition
To avoid the problem above → Composition, Instead of extending the existing class, give your new class **a private field that references an instance of the existing class**.
* The existing class becomes a component of the new class
* Each instance method in the new class calls the corresponding method on the contained instance of the existing class and returns the results → **forwarding**
  * The methods in the new class are known as **forwarding methods**.
* The new class will be stable, with no dependencies on the implementation details of the existing class.

### Composition-and -forwarding approach
This approach is broken into two pieces:
* the class itself
* a reusable forwarding class that contains all of the forwarding methods

<pre>
// Wrapper class - uses composition in place of inheritance
public class InstrumentedSet<E> extends ForwardingSet<E> {
    private int addCount = 0;
    public InstrumentedSet(Set<E> e) {
        super(s);
    }
    @Override public boolean add(E e) {
        addCount++;
        return super.add(e);
    }
    @Override public boolean addAll(Collection<? extends E> c) {
        addCount += c.size();
        return super.addAll(c);
    }
    public int getAddCount() {
        return addCount;
    }
}
// Reusable forwarding class
// Set interface captures the functionality of the HashSet class.
public class ForwardingSet<E> implements Set<E> {
    private final Set<E> s;   
    public ForwardingSet(Set<E> s) {
        this.s = s;
    }
    //...
    public boolean add(E e) {
        return s.add(e);
    }
    public boolean addAll(Collection<? extends E> c) {
        return s.addAll(c);
    }
    //...
}
</pre>

In essence, `InstrumentedSet` transforms one `Set` into another, adding the instrumentation functionality.
* Inheritance-based approach only works for a single concrete class and requires a separate constructor for each supported constructor in the superclass.
* The wrapper class can be used to instrument any `Set` implementation and will work in conjunction with any preexisting constructor.

<pre>
Set<A> a = new InstrumentedSet<>(new TreeSet<>(...));
Set<B> b = new InstrumentedSet<>(new HashSet<>(...));
</pre>

`InstrumentedSet` is a wrapper class → each `InstrumentedSet` instance contains (wraps) another `Set` instance → **Decorator pattern** → `InstrumentedSet` class “decorates” a set of by adding instrumentation.

## Disadvantages of wrapper classes

Wrapper classes are not suited for use in **callback framework**.
* In callback framework, objects pass self-references to other objects for callbacks.
  * A wrapped object doesn’t its wrapper, it passes a reference to itself (this) and callbacks elude the wrapper ([SELF problem](https://stackoverflow.com/questions/28254116/wrapper-classes-are-not-suited-for-callback-frameworks)).

## When to use inheritance?
Inheritance is only appropriate when subclass really is a **subtype** of the superclass. If you attempt to have a class B extends class A, ask yourself the question:

**“Is every B really an A?”**

If the answer is “not sure” or “no”, B should not extend A.
* Normally B should contain a private instance of A and expose a different API.
If you use inheritance where composition is appropriate, you are exposing implementation details.
* **Inheritance propagates any flaws in the superclass’s API**.