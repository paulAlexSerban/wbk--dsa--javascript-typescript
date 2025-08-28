# Stacks

-   it is a collection of data and it needs to use the LIFO principle
-   LIFO (last in first out) - the last element added to the stack will be the first element removed from the stack
-   stacks are a LIFO data structure where the last value is always the first one out
-   stacks are not built in data structure in JavaScript, but are relatively simple to implement

## Where are stacks used

-   callstack - managing function invocations
-   undo / redo
-   routing (the history object) is treated like a stack

-   stacks are used to handle function invocations (the call stack), for oprtations like undo/redo,
    an for routing (remember pages you have visited and fo back/forward) and much more

## The Big O of Stacks

-   insertion `0(1)`
-   removal `0(1)`
-   searching `O(n)`
-   access `O(n)`
