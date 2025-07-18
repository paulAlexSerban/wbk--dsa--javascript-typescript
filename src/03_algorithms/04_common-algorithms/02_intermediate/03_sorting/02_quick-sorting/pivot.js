const swap = require('../../swap/swap_es2015');
/**
 * takes corresponding array item with start as index and returns it's index in a sorted array
 */
const pivot = (arr = [], start = 0, end = arr.length - 1) => {
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
};

module.exports = pivot;
