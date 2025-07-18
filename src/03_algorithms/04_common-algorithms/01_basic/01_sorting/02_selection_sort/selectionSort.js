const swap = require('../swap/swap_es2015');

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        console.log('***********************');
        console.log(arr);
        console.log('Swapping to: ');
        // swap lowest
        if (i != lowest) swap(arr, i, lowest);
        console.log(arr);
        console.log('***********************');
    }
    return arr;
};

console.log(selectionSort([34, 22, 10, 19, 17]));
console.log(selectionSort([22, 12, 1, 4, 55, 19, 20]));
console.log(selectionSort([32, 23, 1, 11, 12, 13, 44]));
