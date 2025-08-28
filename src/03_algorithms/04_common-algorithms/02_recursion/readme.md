# Recursion

-   it is a different way of writing solution besides the iterative way

## What is recursion?

-   it is just a process that calls itself

### Where is it?

-   `JSON.parse/ JSON.stringify`
-   `document.getElementById()` and DOM traversal algorithms
-   Object traversal
-   it is sometimes a cleaner alternative to iteration

## The Call-stack

-   in almost all programming languages, there is a build in data structure that manages what happens when functions are invoked - in JavaScript it is named the call stack
-   it is a stack data structure
-   any time a function is invoked it is placed (pushed) on top of he call stack
-   ehn JavaScript sees the return keyword or when the function ends, the compiler will remove (pop) the function from the call stack

## Why do we care?

-   usually, functions are being pushed on the call stack and popped of when they are done
-   when we write recursive functions, we keep pushing new functions onto the call stack

## Hwo recursive functions work

-   invoke the same function with a different input until you reach your base case!
    > Base Case:
    >
    > -   the condition when the recursion ends
    > -   this is the most important concept to understand

## Part of a recursive function

-   base case
-   different input

## Where things go wrong in a recursive algorithm

-   you do not have a base case or the base case is wrong
-   you forget to return or you return the wrong thing
-   you get into a stack overflow (in Chrome it caps at 10.000 calls)
