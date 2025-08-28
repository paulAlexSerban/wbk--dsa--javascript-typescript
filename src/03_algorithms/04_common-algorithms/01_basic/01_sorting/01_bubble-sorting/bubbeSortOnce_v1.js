const swap = require('../../swap/swap_es2015');

const bubbleSortOnce = (arr) => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        console.log('ONE PASS COMPLETE');
        break;
    }
    return arr;
};

console.log('sorted once: ', bubbleSortOnce([37, 45, 29, 8, 3, -11, 200]));
