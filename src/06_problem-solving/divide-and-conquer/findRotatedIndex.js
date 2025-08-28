/**
 * Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer.
 * The function should return the index of num in the array. If the value is not found, return -1.
 */

/**
 * findRotatedIndex
 * @param {number[]} arr
 * @param {number} num
 * @returns {number}
 * @memberof DivideAndConquer
 * @example
 * findRotatedIndex([3,4,1,2],4) // 1
 * findRotatedIndex([6,7,8,9,1,2,3,4],8) // 2
 * findRotatedIndex([6,7,8,9,1,2,3,4],3) // 6
 * findRotatedIndex([37,44,66,102,10,22],14) // -1
 * findRotatedIndex([6,7,8,9,1,2,3,4],12) // -1
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * Pattern used: Binary Search
 */

function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr);

    if (pivot > 0 && num >= arr[0] && num <= arr[pivot]) {
        return binarySearch(arr, num, 0, pivot);
    } else {
        return binarySearch(arr, num, pivot + 1, arr.length - 1);
    }
}

function findPivot(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) {
            return mid;
        } else if (arr[left] <= arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function binarySearch(arr, num, left, right) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1

/**
 * In this code:
 *
 * The findPivot function finds the pivot where the array was rotated. This is the
 * point where an element greater than its next element exists.
 * The binarySearch function performs binary search within the given left and right bounds.
 * The findRotatedIndex function first finds the pivot. If the target number is within the
 * range from the first element to the element at the pivot, it performs binary search
 * within this range. Otherwise, it performs binary search in the remaining part of the array.
 * The time complexity of this algorithm is O(log n) because both the pivot finding and the
 * binary search operations are performed in logarithmic time. The space complexity is O(1)
 * because we're only using a fixed amount of space to store our variables; it doesn't scale
 * with the size of the input array.
 */
