const tools = require('../../tools');
const swap = require('../swap/swap_es2015');
const mergeSort = require('./01_merge-sorting/merge-sort');

const bubbleSort = (arr) => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            // console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        // console.log("ONE PASS COMPLETE");
        if (noSwaps) break;
    }
    return arr;
};

const data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

// const startTimer = process.hrtime();
// console.log(bubbleSort(data));
// tools.getProcessingTimeInMS(process.hrtime(startTimer));

const startTimer = process.hrtime();
console.log(mergeSort(data));
tools.getProcessingTimeInMS(process.hrtime(startTimer));
