# JavaScript Built-in Sort

-   JS has a built in sorting method, but it does not always work as expected

```javascript
['Steele', 'Data', 'Algorithms'].sort(); // ["Algorithms", "Colt", "Data", "Steele"]
```

```javascript
[6, 4, 15, 10].sort(); // [10, 15, 4, 6]
```

-   Mdn Definition: "The default sort order is according to string Unicode code pointers"
    -   every item of the array is converted to a string and then the unicode of that is sorted

## We can tell JS how to sort ;)

-   the built-in sort method accepts an optional comparator function
-   you can use the comparator function to tell JavaSCript how you want it to sort
-   the comparator looks at pairs of elements (a and b), determines their sort order based on the return value
    -   if it returns a negative number, a should come before b
    -   if it returns a positive number, a should come after b
    -   if it returns 0, a and be are the same as fas as the sort is concerned

```javascript
function numberCompare(num1, num2) {
  return num1 - num 2
}

[6, 4, 15, 10].sort(numberCompare);
// [4, 6, 10, 15]
```
