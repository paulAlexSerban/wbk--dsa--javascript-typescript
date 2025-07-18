# Radix Sorting

## Comparison Sorts

-   the base comparison that is done is between two items
-   we are comparing two things, that is the most that we doe at a single time

### Average Time Complexity

-   Bubble Sort - `O(n^2)`
-   Insertion Sort - `O(n^2)`
-   Selection Sort - `O(n^2)`

-   Quick Sort - `O(n log (n))`
-   Merge Sort - `O(n log (n))`

> we can do better but not by making comparisons, with Radix Sorts

## What is Radix Sort

-   a special sorting algorithm that works on lists of numbers
-   it never makes comparisons between elements
-   it exploits the fact that information about the size of a number is encoded in the number of digits
-   more digits means a bigger number

## Radix Sort Pseudocode

-   define a function that accepts a list of numbers
-   figure out how many digits the largest number has
-   loop from k = 0 up to this largest number of digits
-   for each iteration of the loop:
    -   create buckets for each digit (0 to 9)
    -   place each number in the corresponding bucket based on its kth digit
-   replace out existing array with values in our buckets starting with 0 and going up to 9
-   return list at the end

## Big O Complexity

> n = length of the array
> k = number of digits (average)

-   BEST - time complexity - `O(nk)`
-   AVERAGE - time complexity - `O(nk)`
-   WORST - time complexity - `O(nk)`
-   space complexity - `O(n + k)`
