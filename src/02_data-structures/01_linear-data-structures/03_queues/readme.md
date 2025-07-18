# Queues

## What is a queue?

-   it is a data-structure in which you can add and remove data, and that is based on the principle of FIFO (First In First Out)

In JavaScript, a queue is a data structure in which elements are inserted at the end (back) and are removed from the beginning (front).
The queue follows the FIFO (First-In-First-Out) principle, meaning the first element that was inserted into the queue is the first one to be removed.

JavaScript does not have a built-in queue data structure, but a queue can be easily implemented using an array. Here's a simple example of how you can create a queue in JavaScript using an array:

```js
let queue = [];

// Insert elements at the end of the queue
queue.push('element1');
queue.push('element2');

// Remove elements from the front of the queue
let element1 = queue.shift(); // returns "element1"
let element2 = queue.shift(); // returns "element2"
```

Note that the push method adds elements to the end of the array, and the shift method removes elements from the beginning of the array.

It's also important to be aware that manipulating the beginning of an array (like with shift operation) can be inefficient in JavaScript because all the other elements have to be re-indexed. If you have a performance-critical application that requires extensive use of a queue, you might want to use a more efficient data structure or library.

## Big O of Queues

-   Insertion - O(1)
-   Removal - O(1)
-   Searching - O(N)
-   Access - O(N)

## Summary

-   Queues are a FIFO data structure, all elements are first in first out
-   Queues are useful for processing tasks and are foundational for more complex data structures
-   Insertion and removal can be done in O(1)
