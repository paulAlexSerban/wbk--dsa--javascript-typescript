/**
 *  JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple for loop;
 */

/**
 * Using a for loop, this function iterates through and accesses each element of the array, and subjects it to a simple test.
 * In this way, we determined which data items are greater than 10, and returned a new array, [12, 14, 80], containing those items
 * @param {Array[]} arr
 * @returns
 */

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

/**
 * (1) - Checks every parameter for the element and if is NOT there continues the code
 * (2) - Inserts the element of the array in the new filtered array
 * @param {Array[]} arr
 * @param {Number} elem
 * @returns
 */

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            // (1)
            newArr.push(arr[i]); // (2)
        }
    }
    return newArr;
}

console.log(
    filteredArray(
        [
            [3, 2, 3],
            [1, 6, 3],
            [3, 13, 26],
            [19, 3, 9],
        ],
        3
    )
);
