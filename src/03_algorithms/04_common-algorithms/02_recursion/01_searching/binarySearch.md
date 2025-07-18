# Binary Search

-   binary search is a much faster form of search
-   rather than eliminating one element at a time, you can eliminate `half` of the remaining elements at a time
-   binary search only works on sorted arrays

## Binary Search Pseudocode

-   the function accepts a sorted array and a value
-   create a left pointer at the start of the array, and a right pointer t the end of the array
-   while the left pointer comes before the right pointer:
    -   create a pointer in the middle
    -   if you find the value you want, return the index
    -   if the value is too small, move the left pointer up
    -   if the value is too large, move the right pointer down
-   if you never find the value, return `-1`

## Big O Complexity

-   worst and average case - O(log n)
-   best case - O(1)
