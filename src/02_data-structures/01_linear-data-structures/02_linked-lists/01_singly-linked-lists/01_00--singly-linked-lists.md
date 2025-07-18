# Singly Linked Lists

## What is it?

-   a data structure that contains a head, tail and length property
-   linked lists consist of nodes, and each node has a value and a pointer to another node or null

## Singly Linked Lists VS Arrays

### Lists

-   do not have indexes
-   connected via nodes with next pointer
-   random access is not allowed

### Arrays

-   indexed in order
-   insertion and deletion can be expensive
-   can quickly be access at a specific index

## Big O of Singly Linked Lists

-   insertion - `O(1)`
-   remove - it depends ... `O(1)` or `O(n)`
-   searching - `O(n)`
-   access - `O(n)`

## Summary

-   Singly linked lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
-   arrays contain a built in index whereas Linked Lists fo not
-   the idea of a list data structures that consists of nodes is the foundation for other data structures like Stacks and Queues
