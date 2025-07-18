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
 * Solution 4
 *
 * In this solution, we used “reduce” function to find the factorial value of the number.
 * We have created an array which has length num. And we filled all elements of the array as undefined. In this case, we have to do this because empty arrays couldn’t reducible. You can fill the array as your wish by the way. This depends on your engineering sight completely.
 * In reduce function’s accumulator is calling product this is also our final value. We are multiplying our index value with the product to find factorial value.
 * We’re setting product’s initial value to 1 because if it was zero products gets zero always.
 * Also the factorial value can’t calculate for negative numbers, first of all, we’re testing this.
 */

function factorialize(num) {
    return num < 0 ? 1 : new Array(num).fill(undefined).reduce((product, _, index) => product * (index + 1), 1);
}
factorialize(5);
