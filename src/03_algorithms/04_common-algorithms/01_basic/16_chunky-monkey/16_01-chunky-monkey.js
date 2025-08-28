/**
 * Chunky Monkey
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));

/**
 * Code Explanation
 * Firstly, we create two empty arrays called temp and result, which we will eventually return.
 * Our for loop loops until a is equal to or more than the length of the array in our test.
 * Inside our loop, we push to temp using temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.
 * Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
 * Next, if temp isn’t an empty array, we push it to result.
 * Finally, we return the value of result.
 */
