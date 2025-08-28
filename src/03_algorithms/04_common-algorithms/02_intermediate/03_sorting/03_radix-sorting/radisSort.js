const helpers = require('./radixHelpers');

const radixSort = (nums = []) => {
    let maxDigitCount = helpers.mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = helpers.getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

/**
 * The radixSort function takes an array of numbers arr and sorts them in ascending
 * order using the Radix Sort algorithm.
 *
 * The function works as follows:
 * It determines the maximum number of digits among all the numbers in the array using
 * the mostDigits function (which you implemented in a previous exercise).
 *
 * It then performs the sorting process for each digit position from right to left.
 * The outer loop k iterates from 0 to maxDigits - 1.
 *
 * For each digit position, it creates an array digitBuckets with 10 empty subarrays,
 * one for each possible digit (0 to 9).
 *
 * The inner loop i iterates through each number in the array. For each number, it
 * extracts the digit at the current position using the getDigit function (which you
 * implemented in a previous exercise).
 *
 * It pushes the current number into the corresponding subarray within digitBuckets
 * based on the extracted digit.
 *
 * After processing all the numbers, it flattens the digitBuckets array into a single
 * level array using the spread syntax and the concat method.
 *
 * The array is now sorted based on the current digit position. This process is
 * repeated for each digit position, ensuring that the array becomes fully sorted.
 *
 * Finally, the sorted array is returned as the result.
 * The function correctly utilizes the helper functions mostDigits and getDigit to
 * determine the number of digits and extract the digits from each number, respectively.
 */
