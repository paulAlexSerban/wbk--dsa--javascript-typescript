/**
 * Chunky Monkey
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let i = 0;

    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr;
}
chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);

/**
 * Code Explanation
 * Firstly, we create two variables. newArr is an empty array which we will push to. We also have the i variable set to zero, for use in our while loop.
 * Our while loop loops until i is equal to or more than the length of the array in our test.
 * Inside our loop, we push to the newArr array using arr.slice(i, i+size). For the first time it loops, it will look something like:
 * newArr.push(arr.slice(1, 1+2))
 * After we push to newArr, we add the variable of size onto i.
 * Finally, we return the value of newArr.
 */
