/**
 * Write a function that takes an array of numbers and returns the sum of the numbers.
 * The numbers can be negative or non-integer. If the array does not contain any
 * numbers than you should return 0.
 *
 * Assumption
 * - you can assume that you are only given numbers
 * - you cannot assume the size of the array
 * - you can assume that you do get an array and if the array is empty, return 0
 */

/**
 * @param {Array} numbers
 * @returns sum of each item in numbers
 */

const sum = (numbers = []) => {
    return numbers.reduce((total, currVal) => total + currVal, 0);
};

console.log(sum([11, -13, 20, 1000]));
