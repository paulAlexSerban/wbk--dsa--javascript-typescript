/**
 * Object Literal Declarations Using Object Property Shorthand
 *
 * ES6 adds some nice support for easily defining object literals.
 */
/**
 *  Consider the following code:
 */

//  const getMousePosition = (x, y) => ({
//    x: x,
//    y: y
//  });

/**
 * `getMousePosition` is a simple function that returns an object containing two properties.
 * ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x.
 * You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:
 */

const getMousePosition = (x, y) => ({ x, y });

const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender,
    };
};

// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
// The "old" way:
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg
//   }
// }

const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    // Using the new shorthand property syntax:
    return {
        max,
        min,
        sum,
        avg,
    };
};
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

function pick(arr) {
    //return random element from arr
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    const value = pick(values);
    const suit = pick(suits);
    return {
        value,
        suit,
    };
}
