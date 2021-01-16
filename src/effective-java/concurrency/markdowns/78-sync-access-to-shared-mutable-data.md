## Synchronize access to shared mutable data
`synchronized` ensures that only a single thread can execute a method or block at one time.

Without synchronization, the changes in one thread might not be visible to other threads.
* Synchronization prevents threads from observing an object in an inconsistent state
* Synchronization ensures that each thread entering a synchronized method or block sees the effects of all previous modifications that were guarded by the same lock.

The language spec guarantees that reading or writing a variable is **atomic** unless the variable other than a `long` or `double`, meaning reading a variable other than a `long` or `double` is guaranteed to return a value that was stored into that variable by some thread, even if multiple threads modify the variable concurrently and without synchronization.

**Syncrhonization is required for reliable communication between threads as well as for mutual exclusion.**

**Do not use `Thread.stop`** to stop one thread from another, instead, you should have the first thread poll a `boolean` field that is initally `false` but can be set to `true` by the second thread to indicate that the first thread is to stop itself.

```java
// Properly synchronized cooperative thread termination
public class StopThread {
    private static boolean stopRequested;
    private static synchronized void requestStop() {
        stopRequested = true;
    }
    private static synchronized boolean stopRequestd() {
        return stopRequested;
    }
    public static void main(String[] args) throws InterruptedException {
        Thread backgroundThread = new Thread(() -> {
            int i = 0;
            while (!stopRequested()) {
                i++;
            }
        });
        backgroundThread.start();
        TimeUnit.SECONDS.sleep(1);
        requestStop();
    }
}
```

**Synchronization is not guaranteed to work unless both read and write operations are synchronized.**

The locking in `StopThread` above can be omitted if `stopRequested` is declared `volatile`. `volatile` modifier guarantees that any thread that reads the field will see the most recently written value.

However you need to be careful when to use `volatile`. For example, `++` incremental operator is not atomic, you cannot use volatile modifier in this case. You have to use `synchronized` to lock the variable.

`java.util.concurrent.atomic` provides primitives for lock-free, thread-safe programming on single variables.

```java
// Lock-free synchronization with java.util.concurrent.atomic
private static final AtomicLong nextSerialNum = new AtomicLong();
public static long generateSerialNumber() {
    return nextSerialNum.getAndIncrement();
}
```
