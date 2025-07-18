const tools = require('../tools');
/**
 * write a function called `some`, which accept two arrays
 * the function should return true if every value in the array is corresponding to value squared in the second array
 * the frequency of the value must be the same
 */

/**
 * Solution 2 - REFACTORED
 * Time complexity = O(n)
 * NOTE: 2 separated loops are far more better that nested loops
 */

/**
 * 1. loop over every value of the array
 * 2. for each value in array one we are going to add one in the frequency counter if it is already in there or we are going to initialize it to one
 *      - we end-up with a little object which tells us how many times each thing occurs in the list
 * 3. then we look through object one if squared value of each key is available in the second array
 * 4. then we check if the values correspond
 *    - Eg. if there  are 2 2s in frequentCounter1 there must be 2 4s in frequentCounter2 we return true else false
 */

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequentCounter1 = {};
    let frequentCounter2 = {};

    for (let val of arr1) {
        // 1
        frequentCounter1[val] = (frequentCounter1[val] || 0) + 1; // 2
    }

    for (let val of arr2) {
        // 1
        frequentCounter2[val] = (frequentCounter2[val] || 0) + 1; // 2
    }

    console.log({ frequentCounter1 });
    console.log({ frequentCounter2 });

    for (let key in frequentCounter1) {
        if (!(key ** 2 in frequentCounter2)) {
            // 3
            return false;
        }

        if (frequentCounter2[key ** 2] !== frequentCounter1[key]) {
            // 4
            return false;
        }
    }
    return false;
};

// TEST
const startTimer = process.hrtime();

console.log(
    same(
        [
            1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
            1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
            1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
            1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
            1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
            1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
            1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
            1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
            1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
            1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
            1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
        ],
        [
            4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9,
            4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9,
            4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9,
            4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9,
            4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9,
            4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9,
            4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9,
            4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9,
            4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9,
            4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9,
            4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9, 4, 1, 9,
        ]
    )
); //true
console.log(same([1, 2, 3], [1, 9])); //false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be the same frequency)

tools.getProcessingTimeInMS(process.hrtime(startTimer));
