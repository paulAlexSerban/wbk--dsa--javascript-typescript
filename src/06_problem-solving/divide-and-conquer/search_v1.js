/**
 * function search accepts a value and returns the index where the value passed to the function is located
 * if the value is not found, return -1
 */

const search = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
};

/**
 * linear search
 * time complexity O(n)
 */

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
