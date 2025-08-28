/**
 *  * - Math is a built-in object that has properties and methods
 * for mathematical constants and functions. It's not a function object.
 */

/**
 * Fractions
 *
 * Random numbers are useful for creating random behavior.
 * JavaScript has a `Math.random()` function that generates a random decimal number between 0 (inclusive) and 1 (exclusive).
 * Thus `Math.random()` can return a 0 but never return a 1.
 * Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.
 */

function randomFraction() {
    return Math.random();
}

console.log('randomFraction', randomFraction());

/**
 * Whole Numbers
 *
 * It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.
 * - Use `Math.random()` to generate a random decimal.
 * - Multiply that random decimal by 20.
 * - Use another function, Math.floor() to round the number down to its nearest whole number.
 * Remember that `Math.random()` can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.
 * 1.We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number.
 */
Math.floor(Math.random() * 20); /* 1 */

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log('randomWholeNum', randomWholeNum());

/**
 * Whole Numbers with range
 * Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

  * that takes a range `myMin` and `myMax` and returns a random whole number that's greater than or equal to `myMin`, and is less than or equal to myMax, inclusive.
  * @param {*} myMin
  * @param {*} myMax
  * @returns
  */

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log('randomRange', randomRange(13, 15));

// Define our first function
function rollDie() {
    // Pick a random number from 1-6
    // - Math.random() gives us a decimal from 0-1
    // - We multiply by 6, so now we have a random number between 0 up to 6 (but not including 6).  Something likee 3.490823 or 5.991234
    // - Then we floor to remove the decimal,  leaving us with a whole number from 0-5
    //- Lastly we add one, to get a number between 1 and 6
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

// We can call functions inside of other functions!
function throwDice() {
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}

//Call it!
throwDice();
