/**
 * Finders Keepers
 * Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
 * This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
 */

//  Recursive Solution

const findElement = (arr, func) => (arr.length && !func(arr[0]) ? findElement(arr.slice(1), func) : arr[0]);

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
