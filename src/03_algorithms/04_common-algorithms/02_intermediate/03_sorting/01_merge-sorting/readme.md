# Merge Sort

-   it is a combination of two things - merging and sorting
-   exploits the fact that arrays of 0 or 1 element are always sorted
-   works by decomposing an array into smaller arrays of 0 or 1 elements, than building up a newly sorted array

## Tips

-   in order to implement merge sort, it is useful to first implement a function responsible for merging two sorted arrays
-   given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays
-   this function should run in `O(n + m)` time and `O(n + m)` space and should not modify the parameters passed to it

## Merge Pseudocode

-   create an empty array, take a look ar the smallest values in each input array
-   while there are still values we have not looked at ...
    -   if the value in the first array is smaller than the value in the second array, push the value in the first array into our result and move on to the next value in the first array
    -   of the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    -   once we exhaust one array, push in al remaining values from the other array

## Merge-Sort Pseudocode

-   break up the array into halves until you have arrays that are empty or have one element
-   once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length array
-   once the array has been merged back together, return the merged (and sorted!) array

## Big O of MergeSort

-   BEST - time complexity - `O(n log n)`
-   AVERAGE - time complexity - `O(n log n)`
-   WORST - time complexity - `O(n log n)`
-   space complexity - `O(n)`
