# Problem Solving Patterns

-   define what an algorithm is
-   devise a plan to solve algorithms
-   compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

## What is an algorithm?

-   a process or a set of steps to accomplish a certain task

## Why do we need to know these?

-   almost everything that you do in programming involves some kind of algorithms!
-   it is the foundational for being successful problem solving developer
-   INTERVIEWS are mostly about algorithms

## How do you improve?

-   devise a plan for solving problems
-   master common problem solving patterns
    > there is no simple, foolproof, magical, miraculous, fail-safe approach

## Problem Solving is about:

-   understand the problem
-   explore concrete examples
-   break it down
-   solve/simplify
-   look back and refactor

### Understand the Problem

1. can I restate the problem in my own words?
2. what are the inputs that go into the problem?
3. what are the outputs that should come from the solution to the problem?
4. can the outputs be determined from the inputs?in other words, do I have enough information to solve the problem? (you ay not be able to answer this question until you set about solving the problem)
5. how should I label the important pieces of data that are a part of the problem?

### Explore Concrete Examples

-   comping up with examples can help you understand the problem later
-   examples also provide sanity checks that your solution works how it should
-   user stories
-   unit tests

1. start with simple examples
2. progress to mode complex examples
3. explore examples with empty inputs
4. explore examples with invalid inputs

### Break It Down

-   explicitly write out the steps you need to take
    -   this forces you to think about the code you wil write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (eg. language syntax) as well

### Solve / Simplify

-   find the core difficulty in what you are trying to do
-   temporary ignore that difficulty
-   write a simplified solution
-   then incorporate that difficulty back in

### Look Back and Refactor

1. can you check the result?
2. can you derive the result differently?
3. can you understand it a glance?
4. can you use the result or method for some other problem?
5. can you improve the performance of your solution?
6. can you think of other ways to refactor?
7. how have other people solved this problem?

## Problem Solving Patterns

### Frequency Counter

-   uses objects or sets to collect values and their frequencies of values, and you need to compare them to see if they have similar values, if their anagrams or anything else ... any time you compare two pieces of value and frequencies of certain piece happen
-   this can often AVOID the need for nested loops or Big O such as `O(n^2)` operations with arrays / strings, and usually the Big O is `O(n)`

### Multiple Pointers

-   creating pointers or values that correspond to an index ot position and move towards the beginning, end or middle based on a certain condition
-   very efficient for solving problems with minimal space complexity as well

### Sliding Window

-   involves creating a WINDOW which can either be an array or number from one position to another
-   depending on a certain condition, the WINDOW either increases or closes (and a new window is created)
-   very useful for keeping track of a subset of data in an array/string etc.

### Divide and Conquer

-   involves dividing a data set into smaller chunks and then repeating a process with a subset of data
-   this pattern can tremendously decrease time complexity

### Dynamic Programming

### Greedy Algorithms

### Backtracking
