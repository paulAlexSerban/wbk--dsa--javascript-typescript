/**
 * Pivot Helper
 */

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
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

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strLength(a, b) {
    return a.length - b.length;
}

console.log(pivot(arr1)); // 3
console.log(pivot(arr2)); // 4
console.log(pivot(arr3, strLength)); // 1

arr1.slice(0, 3).sort((a, b) => a - b); // [2, 3, 4]
arr1.slice(3).sort((a, b) => a - b); // [5, 7, 8, 9, 10, 20]

arr2.slice(0, 4).sort((a, b) => a - b); // [0, 2, 4, 5]
arr2.slice(4).sort((a, b) => a - b); // [8, 10, 11, 12, 13, 16]

arr3.slice(0, 1).sort(strLength); // ["Blue"]
arr3.slice(1).sort(strLength); // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]

/**
 * The pivot function takes an array arr along with an optional comparator function and optional
 * start and end indices. It chooses a pivot value from the array (in this case, the first element)
 * and partitions the array such that all values less than the pivot are moved to the left, and all
 * values greater than the pivot are moved to the right.
 *
 * The function initializes the pivotIndex to start and iterates through the array from start + 1
 * to end. If an element is less than the pivot value (determined by the comparator function if
 * provided, or by a simple comparison if not), it increments the pivotIndex and swaps the current
 * element with the element at the pivotIndex position.
 *
 * After iterating through the array, the function swaps the pivot value with the element at the
 * pivotIndex position, so that the pivot value is now in its final sorted position.
 *
 * The function then returns the pivotIndex as the result.
 *
 * The swap function is a helper function that swaps two elements in an array given their indices.
 *
 * You can use the pivot function as a helper in implementing other sorting algorithms, such as Quick Sort.
 */
