/**
 * Truncate a String
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
 */
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
}
truncateString('A-tisket a-tasket A green and yellow basket', 8);
/**
 * Code Explanation
 * This solution is very similar to basic solution.
 * To determine the new string, we use a ternary operator.
 * In our ternary operation, if str.length is larger than num, we return a new string which is slice of our string starting at character 0, and ending at num and the '...' is appended to the end of our new string.
 * If str.length is less than or equal to num, we return the string without any truncation.
 * NOTE In order to understand the above code, you need to understand how a Ternary Operator works.
 * The Ternary Operator is frequently used as a shortcut for the if statement and follows this format: condition ? expr1 : expr2. If the condition evaluates to true, the operator returns the value of expr1.
 * Otherwise, it returns the value of expr2.
 */
