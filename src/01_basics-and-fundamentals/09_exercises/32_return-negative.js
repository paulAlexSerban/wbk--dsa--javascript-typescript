/**
 * Return negative
 * Given a number and have to make it negative
 *
 * Assume the number might be negative
 *
 * Notes:
 * - the number can be negative already, in which case no change is required
 * - zero (0) is not checked for any specific sign - negative zeros make no mathematical sense
 */

/**
 * @param {Number} num
 * @returns
 */

const makeNegative = (num) => -Math.abs(num);

console.log(makeNegative(-10));
