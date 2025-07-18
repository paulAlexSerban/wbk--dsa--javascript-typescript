# Quick Sort

-   like Merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted
-   works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
-   once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

## Pivot Helper Function

-   in order to implement merge sort, it is useful to first implement a function responsible for arranging elements in an array on either side of a pivot
-   given an array, this helper function should designate an element as the pivot
-   it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values grater than the pivot are moved to the right of the pivot
-   the order of elements on either side of the pivot does not matter
-   the helper should do this in place, that is, it should nor create a new array
-   when complete, the helper should return the index of the pivot

## Picking a pivot

-   the runtime of quick sort depends in part on how one selects the pivot
-   ideally, the pivot should be chosen so that it is roughly the median value in the data set you are sorting
-   for simplicity, we will always choose the pivot to be the first element

## Pivot Pseudocode

-   it will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length min 1, respectively)
-   grab the pivot from the start of the array
-   store the current pivot index in a variable (this will keep track of where the pivot should end up)
-   loop through the array from start until the end
    -   if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
-   swap the starting element (ie. the pivot) with the pivot index
-   return the pivot index

## Big O of Quick Sort

-   BEST - time complexity - `O(n log n)`
-   AVERAGE - time complexity - `O(n log n)`
-   WORST - time complexity - `O(n^2)`
-   space complexity - `O(log n)`
