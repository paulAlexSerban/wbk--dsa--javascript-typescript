# Big O Notation

## Objectives

-   motivate the need for something like Big O Notation
-   describe what Big O Notation is
-   simplify Big O Expressions
-   define "time complexity" and "space complexity"
-   evaluate the time complexity and space complexity of different algorithms using Big O Notation
-   describe what a logarithm is

## What is it?

-   for every problem that is solved by algorithms, there are multiple solutions, but how do we know which works?
-   Big O Notation helps us find which solution is best ;)
-   Bit O Notation is a way of generating code and talking about in and comparing code and its performance to other
-   Big O Notation gives us a numeric representation of the performance of the code

## Who cares?

-   it is important to have a precise vocabulary to talk about how our code performs
-   useful for discussing trade-offs between different approaches
-   when your code slows down or crashes, identifying parts of the code tat are inefficient can help us find pain points in out application
-   it comes-up in coding interviews

## What does better mean?

-   faster? - **Time Complexity**
    1. The problem with time
    -   different machines will record different times
    -   the same machine will record deferent times
    -   for fast algorithms, speed measurements may not be precise enough
-   less memory-intensive? - **Space complexity**
-   more readable?

### Time complexity

-   how we can analyze the runtime of an algorithm as the size of the inputs increases

    > instead of counting seconds, we should count the number of simple operations the computer has to perform

-   time might be always be different because of the state of the machine, but the bigger difference will be because of the number of operations
-   depending on what we count, the number of operations can be as low as `2n` or as high as `5n + 2` - but regardless of the exact number, the exact number of operations grows roughly proportionally with `n`

#### Tools to use:

-   graphic performance tracker - https://rithmschool.github.io/function-timer-demo/

#### Intro to Big O

-   "Big O Notation" is a way to formalize fuzzy counting
-   it allows us to talk formally about how runtime algorithm grows as the input grows
-   we do not care about the other details, only the broad trend

##### Definition

-   we say an algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant time `f(n)`, as `n` increases

    -   `f(n)` could be linear: `f(n) = n` - as n scales the runtime scales as well
    -   `f(n)` could be quadric: `f(n) = n * n` - as the n grows, the runtime squares
    -   `f(n)` could be constant: `f(n) = 1` - as n grows it does not have an impact
    -   `f(n)` . could be something entirety different
        > when n grows, what is teh chart going tool like

-   when we talk about the Big O we talk about the worst case scenario, we talk about the upper bound for runtime

##### Simplifying Big O expressions

-   when determining the time complexity of an algorithm, there are some helpful rule of thumbs for Big O expressions - these rules of thumb are consequences of the definition of Big O notation

1. Constants do not matter

-   O(2n) -> O(n)
-   O(500) -> O(1)
-   O(13(n _ n)) -> O(n _ n)

2. Smaller Terms do not matter

-   O(n + 10) -> O(n)
-   O(1000n + 50) -> O(n)
-   O((n _ n) + 5n + 8) -> O(n _ n)

##### Big O Shorthands

-   when analyzing the complexity with Big O, things can get complicated
-   there are some rules of thumb
    -   these rules will not ALWAYS work, but re a helpful starting point:

1. arithmetic operations are constants - constant time
2. variable assignment is constant - constant time
3. accessing elements in an array (by index) or object (by key) is constant - constant time
4. in a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

### Space complexity

-   how much additional memory do we need to allocate in order to run the code
-   auxiliary space complexity refers to space required by the algorithm, not including space taken up by the inputs - technically we talk about auxiliary space complexity

#### Space complexity in JS

-   most primitives (booleans, numbers, undefined, null) are constant space - `O(1)`
-   strings require `O(n)` space (where `n` is the string length)
-   reference types are generally `O(n)`, where n is the length (for arrays), or the number of keys (for objects)

## Logarithms

-   most common complexity : `O(1)`, `O(n)`, `O(n^2)`
-   some more complex math expressions - most of the times the more complex ones are logarithms

### What si a log

-   the inverse of an exponentiation
    Eg. `log2(8) = 3`
    -   2 to what power equals 8 -> `2 ^ 3 = 8`
-   `log2(value) = exponent` -> `2 ^ exponent = value`
-   we will omit the 2 -> `log === log2`
-   as a rule of thumb:
    -   the logarithm of a number roughly measures the number of times you can divide that number by 2 before you get the value that is less than or equal to one

#### Time complexity

-   logarithmic time complexity is great - `O(log n)` - almost constant

### Who cars?

-   certain searching algorithms have time complexity
-   efficient sorting algorithms involve logarithms
-   recursion sometimes involves logarithmic space complexity

## Summary

-   we use the Big O Notation to analyze the performance of an algorithm
-   the Big O Notation can give us a hight level of understanding of the time or space complexity fo an algorithm
-   Big O Notation does not care about precision, only about general trends (linear, quadric, constant)
-   the time and space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
-   the Big O Notation is everywhere, so practice is needed
