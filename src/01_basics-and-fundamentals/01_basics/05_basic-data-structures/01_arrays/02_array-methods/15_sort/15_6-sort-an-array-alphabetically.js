/**
 * Sort an Array Alphabetically using the sort Method
 *
 * The sort method sorts the elements of an array according to the callback function.
 */

function ascendingOrder(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}

console.log(ascendingOrder([1, 5, 2, 3, 4]));

function reverseAlpha(arr) {
    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    });
}

console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));

/**
 * Note
 * JavaScript's default sorting method is by string Unicode point value, which may return
 * unexpected results. Therefore, it is encouraged to provide a callback function to
 * specify how to sort the array items. When such a callback function, normally called
 * compareFunction, is supplied, the array elements are sorted according to the return
 * value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for
 * two elements a and b, then a will come before b. If compareFunction(a,b) returns a value
 * greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b)
 * returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.
 */

/**
 * Use the sort method in the alphabeticalOrder function to sort the elements of arr in
 * alphabetical order. The function should return the sorted array.
 */

function alphabeticalOrder(arr) {
    return arr.sort();
}

console.log(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']));
