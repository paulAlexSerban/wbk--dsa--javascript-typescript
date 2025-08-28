/**
 * Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:
 * - If i is a multiple of both 3 and 5, print FizzBuzz.
 * - If i is a multiple of 3 (but not 5), print Fizz.
 * - If i is a multiple of 5 (but not 3), print Buzz.
 * - If i is not a multiple of 3 or 5, print the value of i.
 *
 * Function Description
 * It should print the appropriate response for each value i in the set {1, 2, ... n} in ascending order, each on a separate line.
 */

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
