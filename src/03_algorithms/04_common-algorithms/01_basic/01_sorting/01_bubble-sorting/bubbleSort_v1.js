const swap = require('../swap/swap_es2015');

const bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            // console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
        // console.log("ONE PASS COMPLETE");
    }
    return arr;
};

console.log('sorted: ', bubbleSort([37, 45, 29, 8, 3, -11, 200]));
console.log('sorted: ', bubbleSort([37, 29, 8, 45]));
console.log('sorted: ', bubbleSort([29, 8, 37, 45]));
