/**
 * pop() removes an element from the end of an array,
 * shift() removes an element from the beginning
 *
 * @param {Array} arr
 * @returns
 */

function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

/**
 * splice() - remove any number of consecutive elements from anywhere in an array.
 * splice() can take up to three parameters, you can use the third parameter, comprised of one or more element(s), to add to the array
 */

function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
