/**
 * function search accepts a value and returns the index where the value passed to the function is located
 * if the value is not found, return -1
 */

const search = (array, val) => {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (array[middle] < val) {
            min = middle + 1;
        } else if (array[middle > val]) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
};

/**
 * binary search
 * time complexity Log(N)
 */

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
