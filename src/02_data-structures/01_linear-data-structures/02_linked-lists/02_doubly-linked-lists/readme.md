# Doubly Linked Lists

> spoiler: each node points in two directions

## What are doubly Doubly Linked Lists?

-   almost identical to Singly Linked Lists, except every node has another pointer, to the previous node!
-   every node points to the next node, but also to the previous, behind it
-   more memory === more flexibility (almost always a tradeoff)

## Big O of Doubly Linked Lists

-   insertion - `O(1)`
-   remove - it depends ... `O(1)` or `O(n)`
-   searching - `O(n)` - technically it is `0(n^2)`
-   access - `O(n)`

## Summary

-   Doubly Linked Lists are almost identically to Singly Liked Lists except there is an additional pointer to previous nodes
-   better than Singly Linked Lists for finding nodes and can be done in half of time
-   however, they do take up more memory considering the extra pointer
