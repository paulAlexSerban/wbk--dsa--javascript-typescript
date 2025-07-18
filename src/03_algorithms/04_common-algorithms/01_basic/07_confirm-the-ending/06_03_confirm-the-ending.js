/**
 * Confirm the Ending
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 * This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
 * But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
 */

function confirmEnding(str, target) {
    return str.slice(-target.length) === target;
}

confirmEnding('He has to give me a new name', 'name');
/**
 * Code Explanation
 * If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.
 */
