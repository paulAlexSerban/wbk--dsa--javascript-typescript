/**
 * Given an array of integers, your solution find the smallest integer.
 * Assume the supplied array will not be empty.
 */

/**
 * @param {Array} args
 * @return {Number}
 */

const findSmallestInteger = (args) => {
    return Math.min(...args);
};

console.log(findSmallestInteger([78, 20, 12, 23, 32, 122]));
