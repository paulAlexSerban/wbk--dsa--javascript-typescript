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

const fizzBuzz = (input) => {
    if (typeof input !== 'number') {
        return 'Not a number';
    }
    if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz';
    }
    if (input % 3 === 0) {
        return 'Fizz';
    }
    if (input % 5 === 0) {
        return 'Buzz';
    }
    return input;
};

// if number is divisible by 3 => Fizz
console.log(fizzBuzz(6));
// if number is divisible by 5 => Buzz
console.log(fizzBuzz(5));
// if number is divisible by 3 and 5 => FizzBuzz
console.log(fizzBuzz(15));

// if number is NOT divisible by 3 NOR 5 => the input number
console.log(fizzBuzz(7));

// if a string is passed => 'Not a number'
console.log(fizzBuzz('7'));
