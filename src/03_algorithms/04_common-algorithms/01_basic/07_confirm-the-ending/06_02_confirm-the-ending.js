/**
 * Confirm the Ending
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 * This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
 * But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
 */

//  (using Regular Expression)
function confirmEnding(str, target) {
    let re = new RegExp(target + '$', 'i');
    return re.test(str);
}
confirmEnding('He has to give me a new name', 'name');

/**
 * Code Explanation
 * We need to make a pattern from the target variable that exists at the end of the string str.
 * Since we will use a variable that will change the pattern each time the function is called, we will use the constructor of the regular expression object new RegExp(pattern[, flags]), so we start with: new RegExp(target).
 * Then we have to check at the end of the string, so we concatenate to the target variable the $ character to match the end: new RegExp(target+'$').
 * We use the flag i to ignore the case of the pattern and we have our completed RegExp: new RegExp(target+'$','i'), or we can ommit the flag entirely.
 * Finally, we are using our regular expression with the test method to the given string, to check if the string ends with the pattern and return true or false accordingly.
 */
