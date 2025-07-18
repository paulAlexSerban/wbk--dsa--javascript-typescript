/**
 * Repeat a String Repeat a String
 * Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
 */

function repeatStringNumTimes(str, num) {
    let accumulatedStr = '';
    for (let i = 0; i < num; i++) {
        accumulatedStr += str;
    }
    return accumulatedStr;
}
console.log(repeatStringNumTimes('abc', 3));

/**
 * Code Explanation
 * Create an empty string variable to store the repeated word.
 * Use a for loop or for loop to repeat code as many times as needed according to num
 * Then we add the string to the variable created on step one inside of the loop.
 * At the end of the loop, return the variable for the repeated word.
 */
