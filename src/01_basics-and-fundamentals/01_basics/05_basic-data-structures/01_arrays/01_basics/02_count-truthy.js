/**
 * Falsy
 *  undefined
 *  null
 *  '' - empty string
 *  false
 *  0
 *  NaN - Not a Number
 */

const countTruthy = (array) => {
    let count = 0;

    for (let value of array) {
        // if value is truthy
        if (value) {
            count++;
        }
        return count;
    }
};

// test cases
const arrayOne = [1, 2, 3];
const arrayTwo = [0, 1, 2, 3];

console.log(countTruthy(arrayOne));
console.log(countTruthy(arrayTwo));
