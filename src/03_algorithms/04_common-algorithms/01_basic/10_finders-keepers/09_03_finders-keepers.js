/**
 * Finders Keepers
 * Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
 * This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
 */
function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}
console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

/**
 * Code Explanation
 * Look through the array given in the 1st paramater “arr” using the .map() method
 * Use the function in the 2nd parameter as the callback function in arr.map()
 * Acquire the index of the first number that meets the condition in the function.
 * Use that index to display the first available number that meets the condition.
 */
