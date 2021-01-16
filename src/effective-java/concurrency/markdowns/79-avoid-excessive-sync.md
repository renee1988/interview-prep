## Avoid eccessive synchronization
Excessive synchronization can cause reduced performance, deadlock, or even nondeterministic behavior.

**To avoid liveness and safety failures, never cede control to the client within a synchronized method or block.** In other words, inside a synchronized region, do not invoke a method that is designed to be overriden, or one provided by client in the form of a function object.
* From the perspective of the class with the synchronized region, such methods are *alien*.
* The class has no knowledge of what the method does and has no control over it.

### Example: Observables
```java
// Broken - invokes alien method from synchronized block
public class ObservableSet<E> extends ForwardingSet<E> {
    public ObservableSet<E>(Set<E> set) {
        super(set);
    }
    private final List<SetObserver<E>> observers = new ArrayList<>();
    public void addObserver(SetObserver<E> observer) {
        synchronized(observers) {
            observers.add(observer)
        }
    }
    public boolean removeObserver(SetObserver<E> observer) {
        synchronized(observers) {
            return observers.remove(observer);
        }
    }
    private void notifyElementAdded(E element) {
        synchronized(observers) {
            for (SetObserver<E> observer : observers) {
                observer.added(this, element);
            }
        }
    }
    @Override
    public boolean add(E element) {
        boolean added = super.add(element);
        if (added) {
            notifyElementAdded(element);
        }
        return added;
    }
    @Override
    public boolean addAll(Collection<? extends E> c) {
        boolean result = false;
        for (E element : c) {
            // Calls notifyElementAdded
            result |= add(element);
        }
        return result;
    }
}
```

Observers subscribe to notifications by invoking the `addObserver` method and unsubscribe by invoking the `removeObserver` method. In both cases, an instance of the following callback interface is passed to the method:

```java
@FunctionalInterface public interface SetObserver<E> {
    // Invoke when an element is added to the observable set
    void added(ObservableSet<E> set, E element);
}
```

The above broken sample code works fine for the following case:

```java
public static void main(String[] args) {
    ObservableSet<Integer> set = new ObservableSet<>(new HashSet<>());
    set.addObserver((s, e) -> System.out.println(e));
    for (int i = 0; i < 100; i++) {
        set.add(i);
    }
}
```

Suppose we replace the above observer with an observer that prints `Integer` value that was added to the set and removes itself if the value is `23`.

```java
set.addObserver(new SetObserver<>() {
    public void added(ObserverableSet<Integer> s, Integer e) {
        System.out.println(e);
        if (e == 23) {
            s.removeObserver(this);
        }
    }
})
```

The above code will *throw `ConcurrentModificationException`*. The problem is that `notifyElementAdded` is in the process of iterating over the `observers` list when it invokes the observer `added` method. The `added` method calls the observable set `removeObserver` which in turn calls the method `observers.remove`. We are trying to remove an element from a list in the mist of iterating over it, which is illegal.

The iteration in the `notifyElementAdded` method is in a synchronized block to prevent concurrent modification, but it does not prevent the iterating thread itself from calling back into the observerable set and modifying its `observers` list.

Suppose we replace the above observer with an observer that tries to unsubscribe but instead of calling `removeObserver` directly, it engages the services of another thread to do the deed (executor service).

```java
// Observer that uses a background thread needlessly
set.addObserver(new SetObserver<>() {
    public void added(ObserverableSet<Integer> s, Integer e) {
        System.out.println(e);
        if (e == 23) {
            ExecutorService exec = Executors.newSingleThreadExecutor();
            try {
                exec.submit(() -> s.removeObserver(this)).get();
            } catch (ExecutionException | InterruptedException ex) {
                throw new AssertionError(ex);
            } finally {
                exec.shutdown();
            }
        }
    }
})
```

The above code will cause a *deadlock*. The background thread calls `s.removeObserver`, it tries to lock `observers`, but it cannot acquire the lock since the main thread already has the lock.

### Solutions
Move alien method invocations out of synchronized blocks.

```java
private void notifyElementAdded(E element) {
    List<SetObserver<E>> snapshot = null;
    synchronized(observers) {
        snapshot = new ArrayList<>(observers);
    }
    // Alien method moved outside of synchronized block - open calls
    for (SetObserver<E> observer : snapshot) {
        observer.added(this, element);
    }
}
```

A better way to solve this problem is to use a concurrent collection `CopyOnWriteArrayList`. This `List` implementation is a variant of `ArrayList` in which all modification operations are implemented by making a fresh copy of the entire underlying array. Because the internal array is never modified, iteration requires no locking and is very fast.

For most uses, the performance of `CopyOnWriteArrayList` is very bad, but it is perfect for observer lists, which are rarely modified and often traversed.

```java
// Thread-safe observable set with CopyOnWriteArrayList
private final List<SetObserver<E>> observers = new CopyOnWriteArrayList<>();
public void addObserver(SetObserver<E> observer) {
    observers.add(observer);
}
public boolean removeObserver(SetObserver<E> observer) {
    return observers.remove(observer);
}
private void notifyElementAdded(E element) {
    for (SetObserver<E> observer : observers) {
        observer.added(this, element);
    }
}
```

#### Open Call
An alien method invoked outside of a synchronized region is known as **open call**. Open calls can greatly increase concurrency. If the alien method were invoked from a synchronized region, other threads would be denied access to the protected resource unnecessarily.

**As a rule, you should do as little work as possible inside synchronized regions.**

If you are writing a mutable class, you have two options:
* you can omit all synchronization and allow the client to synchronize externally if concurrent use is desired.
* you can synchronize internally, making the class *thread-safe*.

If a method modifies a static field, and there is any possibility that the method will be called from multiple threads, you **must** synchronize access to the field internally.