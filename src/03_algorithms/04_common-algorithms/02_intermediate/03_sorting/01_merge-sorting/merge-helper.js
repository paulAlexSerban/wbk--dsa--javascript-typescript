function merge(arr1, arr2, comparator = (a, b) => a - b) {
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

/**
 * This implementation of the merge function takes two sorted arrays, arr1 and arr2,
 * as input along with an optional comparator function. It merges the elements of both
 * arrays into a new array, merged, in sorted order according to the provided comparator.
 *
 * The function initializes two pointers, i and j, to track the current indices of arr1
 * and arr2, respectively. It compares the elements at the current indices using the
 * comparator function and pushes the smaller element into the merged array. It then
 * increments the corresponding pointer.
 *
 * After one of the arrays is fully traversed, the function appends the remaining
 * elements of the other array to the merged array.
 *
 * Finally, the merged array is returned as the result.
 *
 * Note that the input arrays arr1 and arr2 are not modified by this function. The comparator
 * function is optional and defaults to a numeric comparison ((a, b) => a - b) if not provided.
 */

var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];
console.log(merge(arr1, arr2)); // [1,2,3,4,4,5,6,8]

arr1; // [1,3,4,5];
arr2; // [2,4,6,8];

var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

console.log(merge(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

var arr5 = [3, 4, 5];
var arr6 = [1, 2];

console.log(merge(arr5, arr6)); // [1,2,3,4,5]

var names = ['Bob', 'Ethel', 'Christine'];
var otherNames = ['M', 'Colt', 'Allison', 'SuperLongNameOMG'];

function stringLengthComparator(str1, str2) {
    return str1.length - str2.length;
}

console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
