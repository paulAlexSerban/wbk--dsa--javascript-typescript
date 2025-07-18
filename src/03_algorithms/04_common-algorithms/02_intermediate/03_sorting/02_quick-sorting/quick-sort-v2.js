/**
 * Quick Sort
 */

function quickSort(arr, comparator = (a, b) => a - b, start = 0, end = arr.length - 1) {
    if (start < end) {
        const pivotIndex = pivot(arr, comparator, start, end);
        quickSort(arr, comparator, start, pivotIndex - 1);
        quickSort(arr, comparator, pivotIndex + 1, end);
    }

    return arr;
}

function pivot(arr, comparator, start, end) {
    const pivotValue = arr[start];
    let pivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (comparator ? comparator(arr[i], pivotValue) < 0 : arr[i] < pivotValue) {
            pivotIndex++;
            swap(arr, i, pivotIndex);
        }
    }

    swap(arr, start, pivotIndex);

    return pivotIndex;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

/**
 * The quickSort function takes an array arr along with an optional comparator
 * function and optional start and end indices. It sorts the array using the Quick Sort algorithm.
 *
 * The function first checks if start is less than end, as this serves as the base case for the
 * recursive calls. If there are more than one element in the current subarray, it selects a pivot
 * index using the pivot function, partitions the array around the pivot, and recursively calls
 * quickSort on the left and right partitions.
 *
 * The pivot function, as a helper, takes an array arr along with a comparator function, start,
 * and end indices. It selects the pivot value, partitions the array such that all values less than
 * the pivot are on the left, and all values greater than the pivot are on the right. It returns
 * the index where the pivot value ends up.
 *
 * The swap function is a helper function that swaps two elements in an array given their indices.
 *
 * You can use the quickSort function to sort arrays of numbers, strings, or objects, by providing
 * an appropriate comparator function.
 */

quickSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
quickSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
quickSort([1, 2, 3]); // [1, 2, 3]
quickSort([]);

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(quickSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}

console.log(quickSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

console.log(quickSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
