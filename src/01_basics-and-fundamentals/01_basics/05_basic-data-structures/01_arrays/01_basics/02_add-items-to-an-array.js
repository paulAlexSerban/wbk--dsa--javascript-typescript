/**
 * Arrays can be defined with a length of any number of elements, and elements can be added or removed over time;
 * In other words, arrays are mutable;
 * (1) - the `push()` method adds elements to the END of an array,
 * (2) - unshift() adds elements to the START.
 *
 * @param {Array} arr
 * @returns
 */

function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three'); // (2)
    arr.push(7, 'VIII', 9); // (1)
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
