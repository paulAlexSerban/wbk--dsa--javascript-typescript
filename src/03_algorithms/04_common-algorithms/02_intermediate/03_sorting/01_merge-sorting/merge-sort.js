const merge = require('./merge');

const mergeSort = (arr = []) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
};

console.log(mergeSort([10, 24, 76, 72, 1, 9]));

module.exports = mergeSort;
