# Bubble Sort

-   not that efficient and not commonly used

## Main idea:

-   a sorting algorithms whee the largest values bubble up to the top!

## Pseudocode

-   start looping from a variable called `i` the end of the array towards the beginning
-   start an inner loop with a variable called `j` from the beginning until `i - 1`
-   if `arr[j]` is greater than `arr[j + 1]`, swap those two values!
-   return the sorted array;

## Time complexity

-   in general is `O(n^2)`
    -   because we have a nested loop
    -   we roughly make a comparison fio each item of the array
    -   when `noSwap` is implemented at one point the time complexity is `0(n)`
