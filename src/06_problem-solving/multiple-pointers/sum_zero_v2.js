/**
 * function called `sumZero` accepts a sorted array of integers
 * the function finds the first par where the sum is 0
 * returns an array that includes both values that sum to zero or undefined if a pair does not exist
 */

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
};

/**
 * time complexity - O(n)
 * space complexity - O(1)
 */

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
