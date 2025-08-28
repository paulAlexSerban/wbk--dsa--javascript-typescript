/**
 * returns the digit in a num at the given place value
 */

function getDigit(num, position) {
    return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

/**
 * The getDigit function takes a positive integer num and a position position.
 * It returns the digit in num at the given position. The position is counted from
 * right to left, starting from 0 as the rightmost digit.
 *
 * The function uses the following steps:
 * It first takes the absolute value of num using Math.abs() to handle negative numbers.
 * It divides the absolute value of num by 10 raised to the power of position using
 * Math.pow(10, position).
 * It then uses the Math.floor() function to round down the result of the division
 * to the nearest integer.
 * Finally, it uses the modulus operator % to get the remainder when dividing the
 * rounded down result by 10, effectively extracting the digit at the given position.
 * The function works correctly for positive integers and handles the cases where num
 * is negative or the position is larger than the number of digits in num.
 */

// console.log(getDigit(12345, 0));
// console.log(getDigit(12345, 1));
// console.log(getDigit(12345, 2));
// console.log(getDigit(12345, 3));
// console.log(getDigit(12345, 4));
// console.log(getDigit(12345, 5));

/**
 * returns the number of digits in num
 */
const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

/**
 * The digitCount function takes a positive integer num and returns the number of
 * digits that the integer has.
 *
 * The function uses the following steps:
 *
 * If the input num is zero, it returns 1 since zero has only one digit.
 * It takes the absolute value of num using Math.abs() to handle negative numbers.
 * It uses the Math.log10() function to calculate the logarithm base 10 of the absolute value of num.
 * The result is then rounded down to the nearest integer using Math.floor().
 * Finally, it adds 1 to account for the digit at the leftmost position.
 * The function works correctly for positive integers and handles the case where num is zero.
 */
// console.log(digitCount(1));
// console.log(digitCount(25));
// console.log(digitCount(314));

/**
 * given an array of numbers, returns the number of digits in the largest numbers in the list
 */

const mostDigits = (nums = []) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
};

/**
 * The mostDigits function takes an array of integers arr and returns the count
 * of the number of digits for the number in the array with the most digits.
 *
 * The function uses a loop to iterate through each element in the array. For each
 * element, it calculates the number of digits using the digitCount function (which
 * you implemented in the previous exercise). It then compares the current number of
 * digits with the maxDigits value and updates maxDigits if necessary to keep track
 * of the maximum number of digits seen so far.
 *
 * After iterating through all the elements, the function returns the maxDigits as the result.
 *
 * The function correctly handles empty arrays by returning 0.
 */

// console.log(mostDigits([1234, 56, 7]));
// console.log(mostDigits([1, 1, 11111, 1]));
// console.log(mostDigits([12, 43, 56, 78]));

module.exports = { getDigit, digitCount, mostDigits };
