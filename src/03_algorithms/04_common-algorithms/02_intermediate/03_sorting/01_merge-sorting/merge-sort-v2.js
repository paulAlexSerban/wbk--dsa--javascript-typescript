/**
 * Merge Sort
 */

function mergeSort(arr, comparator = (a, b) => a - b) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), comparator);
    const right = mergeSort(arr.slice(mid), comparator);

    return merge(left, right, comparator);
}

function merge(arr1, arr2, comparator) {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (comparator(arr1[i], arr2[j]) <= 0) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
mergeSort([1, 2, 3]); // [1, 2, 3]
mergeSort([]);

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}

console.log(mergeSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order

/**
 * The mergeSort function takes an array arr and an optional comparator function as parameters.
 * It recursively divides the array into halves until each subarray contains only one element.
 * Then, it merges the sorted subarrays using the merge function and returns the sorted and merged
 * array.
 *
 * The merge function, which you implemented in the previous exercise, takes two sorted arrays arr1
 * and arr2, along with a comparator function. It merges the elements of both arrays into a new
 * array, merged, in sorted order according to the provided comparator.
 *
 * The mergeSort function and the merge function work together to perform the merge sort algorithm.
 *
 * The comparator function is optional and defaults to a numeric comparison ((a, b) => a - b) if not provided.
 *
 * You can use the mergeSort function to sort arrays of numbers, strings, or objects, by providing an
 * appropriate comparator function.
 */
