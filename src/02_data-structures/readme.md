# Data Structures

-   data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data
-   different data structures excel at different things - some are highly specialized, while others (like arrays) are more generally ued

## Why care?

-   the more time you spend as a developer, the more likely you will need to use one of these data structures
-   you have already worked with many data structures unknowingly

# Built In Data Structures in JS (Arrays, Objects and built-in methods)

## Objectives

-   understand how objects and arrays work through the lens of Big O
-   explain why adding elements to the beginning of an array is costly
-   compare and construct the runtime for arrays and objects as built-in methods

## Objects

-   unordered structures and everything is stored in key, value pairs
-   we use objects:
    -   when you do not need order
    -   when you need fast access / insertion and removal

### Big O of Objects (object are very fast)

-   insertion - `O(1)` constant
-   removal - `O(1)` constant
-   searching - `O(n)` linear
-   access - `O(1)` constant
    > when you do not need any ordering, objects are an excellent choice

### Big O of Object methods

-   `Object.keys()` -`O(n)`
-   `Object.values()` - `O(n)`
-   `Object.entries()` - `O(n)`
-   `hasOwnProperty` - `O(1)`

## Arrays

-   ordered structures where everything is ordered
-   very useful if we need order
-   each item in a array has in index
-   if you do need order and you are trying to optimize for performance, there are other options

### When you use arrays

-   when you need order
-   when you need fast access / insertion and removal (sort of ..)

### Big O of Arrays

-   insertion - IT DEPENDS
-   removal - IT DEPENDS
-   searching - `O(n)`
-   access - `0(1)`

### Big O of Array Operations

-   `push` - `O(1)` - add at the end
-   `pop` - `O(1)` - remove from the beginning
-   `shift` - `O(n)` - add at the beginning
-   `unshift` - `O(n)` - remove from the beginning
-   `concat` - `O(n)`
-   `slice` - `O(n)`
-   `splice` - `O(n)`
-   `sort` - `O(n * log n)`
-   `forEach`, `map`, `filter`, `reduce`, etc. - `O(n)`
