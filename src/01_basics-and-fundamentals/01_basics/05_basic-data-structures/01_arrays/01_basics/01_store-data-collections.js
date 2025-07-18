/**
 * ARRAYS Data Structures
 *
 * One-dimensional Array
 * Meaning it only has one level, or that it does not have any other arrays nested within it
 */

let simpleArray = ['one', 2, 'three', true, false, undefined, null];

/**
 * Multi-dimensional Array
 * An array that contains other arrays.
 * Notice that this array also contains JavaScript objects
 */
let complexArray = [
    [
        {
            one: 1,
            two: 2,
        },
        {
            three: 3,
            four: 4,
        },
    ],
    [
        {
            a: 'a',
            b: 'b',
        },
        {
            c: 'c',
            d: 'd',
        },
    ],
];

/**
 * The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command.
 */
let ourArray = ['a', 'b', 'c'];
let ourVariable = ourArray[0]; // store the value of item 0 in `ourArray`
ourArray[1] = 'not b anymore'; // change the value in item 1 in `ourArray`
