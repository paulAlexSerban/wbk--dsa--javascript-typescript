/**
 * Reverse a String
 *
 * Reverse the provided string.
 * You may need to turn the string into an array before you can reverse it.
 * Your result must be a string.
 */

/**
 * Starting at the last character of the string passed to the function, you build a new string reversedStr from str.
 * During each iteration of the for loop, reversedStr gets concatenated with itself and the current character.
 * Finally, you return the final value of reversedStr.
 *
 * @param { string } str
 * @returns string
 */

function reverseString(str) {
    for (var reversedStr = '', i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
