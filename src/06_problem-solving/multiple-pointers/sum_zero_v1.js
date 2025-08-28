/**
 * function called `sumZero` accepts a sorted array of integers
 * the function finds the first par where the sum is 0
 * returns an array that includes both values that sum to zero or undefined if a pair does not exist
 */

const sumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
};

/**
 * time complexity - O(n^2)
 * space complexity - O(1)
 */

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
