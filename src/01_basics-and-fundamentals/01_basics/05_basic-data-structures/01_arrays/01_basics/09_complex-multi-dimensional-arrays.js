/**
 * Arrays can contain, or even be completely made up of other arrays
 * Arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on
 * In this way, an array can very quickly become very complex data structure, known as a multi-dimensional, or nested array
 */

let nestedArray = [['deep'], [['deeper'], ['deeper']], [[['deepest'], ['deepest']], [[['deepest-est?']]]]];

console.log(nestedArray[2][1][0][0][0]);

let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array', ['deep']],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]],
];
