/**
 * Bubble Sort
 */

/**
 * Bubble Sort Pseudocode
 * - Start looping from with a variable called i the end of the array towards the beginning
 * - Start an inner loop with a variable called j from the beginning until i - 1
 * - If arr[j] is greater than arr[j+1], swap those two values!
 * - Return the sorted array
 * @param {*} arr
 * @param {*} comparator
 * @returns
 */

function bubbleSort(arr, comparator) {
    // if no comparator function is provided, use default
    if (typeof comparator !== 'function') {
        comparator = function (a, b) {
            return a - b;
        };
    }

    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }

    return arr;
}

bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
bubbleSort([1, 2, 3]); // [1, 2, 3]
bubbleSort([]);

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
bubbleSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}

bubbleSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [
    {
        name: 'LilBub',
        age: 7,
    },
    {
        name: 'Garfield',
        age: 40,
    },
    {
        name: 'Heathcliff',
        age: 45,
    },
    {
        name: 'Blue',
        age: 1,
    },
    {
        name: 'Grumpy',
        age: 6,
    },
];

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

console.log(bubbleSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order

console.log(bubbleSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(bubbleSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(bubbleSort([1, 2, 3])); // [1, 2, 3]
console.log(bubbleSort([]));

/**
 * This function performs the bubble sort algorithm to sort the array. The bubble sort
 * algorithm repeatedly steps through the list, compares adjacent elements, and swaps them
 * if they are in the wrong order. The pass through the list is repeated until the list is sorted.
 *
 * The function takes an optional comparator function as an argument. If no comparator function is
 * provided, the default comparator sorts the elements in ascending order.
 *
 * If the comparator function returns a positive number, the elements are swapped. If it returns
 * zero or a negative number, they are not.
 *
 * We add a small optimization to the algorithm: if in a full pass through the array no swaps
 * are made (i.e., the array is already sorted), we break from the loop early.
 *
 * The time complexity of bubble sort is O(n^2), where n is the length of the array, as in the
 * worst case we need to do n passes through the array, and each pass takes O(n) time. The space
 * complexity is O(1), as we only use a fixed amount of space to store the swapped elements
 * and the loop counters.
 */
