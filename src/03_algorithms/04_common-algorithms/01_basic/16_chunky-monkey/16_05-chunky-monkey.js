/**
 * Chunky Monkey
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
    if (arr.length <= size) {
        return [arr];
    } else {
        return [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size));
    }
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 2));
/**
 * Code Explanation
 * Array smaller than size is returned nested.
 * For any array larger than size, it is split in two. First segment is nested and concatenated with second segment which makes a recursive call.
 */
