/**
 * Selection sort
 */

function selectionSort(arr, comparator) {
    // if no comparator function is provided, use default
    if (typeof comparator !== 'function') {
        comparator = function (a, b) {
            return a - b;
        };
    }

    for (let i = 0; i < arr.length; i++) {
        let smallestIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (comparator(arr[j], arr[smallestIdx]) < 0) {
                smallestIdx = j;
            }
        }
        if (smallestIdx !== i) {
            // Swap
            let temp = arr[i];
            arr[i] = arr[smallestIdx];
            arr[smallestIdx] = temp;
        }
    }

    return arr;
}

selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
selectionSort([1, 2, 3]); // [1, 2, 3]
selectionSort([]);

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
selectionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}

selectionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

selectionSort(moarKittyData, oldestToYoungest); // sorted by age in descending order

/**
 * In this function, we iterate over the array from the beginning. For each element, we consider
 * it the smallest value initially. We then iterate over the rest of the array. If we find an e
 * lement that is smaller (according to the comparator function), we update our smallestIdx.
 * Once we've looked at every element for a given iteration of the outer loop, if the smallestIdx
 * is not the element we started with, we swap the two values.
 *
 * This continues until we've iterated over the entire array, at which point the array will be
 * sorted according to the provided comparator function (or the default comparator, if none was provided).
 *
 * The time complexity of selection sort is O(n^2), where n is the length of the array. This is because
 * we need to do n iterations of the outer loop, and for each of these iterations we may need to look
 * at n - i elements in the inner loop. The space complexity is O(1), because we only use a fixed
 * amount of space to store our indices and the temporary value for the swap.
 */
