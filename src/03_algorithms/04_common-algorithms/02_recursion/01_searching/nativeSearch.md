# Native Search

-   suppose you want to count the number of times a smaller string appears in a longer string
-   a straightforward approach involves checking pairs of characters individually

## Native Pseudocode

-   loop over the longer string
-   loop over the shorter string
-   if the characters do not match, break out the inner loop
-   if you complete the inner lop and find a match, increment the count of matches
-   return the count
