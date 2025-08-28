/**
 * Factorialize a Number
 *
 * Return the factorial of the provided integer.
 * If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 * Factorials are often represented with the shorthand notation n!
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 * Only integers greater than or equal to zero will be supplied to the function.
 */

/**
 * Solution 2
 * => using recursion (normal)
 *
 * Notice at the first line we have the terminal condition, i.e a condition to check the end of the recursion.
 * If num == 0, then we return 1, i.e. effectively ending the recursion and informing the stack to propagate this value to the upper levels.
 * If we do not have this condition, the recursion would go on until the stack space gets consumed, thereby resulting in a stack overflow.
 */

function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}
factorialize(5);
