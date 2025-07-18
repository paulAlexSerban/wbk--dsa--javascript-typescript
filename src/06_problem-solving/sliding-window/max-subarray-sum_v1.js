/**
 * a function called maxSubarraySum - accepts an array of integers and a number called n
 * the function calculates the maximum sum of n consecutive elements in the array
 */

const maxSubarraySum = (arr, num) => {
    if (num > arr.length) {
        return null;
    }

    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;

        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
};

/**
 * time complexity O(n^2)
 */

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
