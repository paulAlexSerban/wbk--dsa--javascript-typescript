/**
 * sortedFrequency
 * Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
 * Constraints:
 * Time Complexity: O(log n)
 */

/**
 * sortedFrequency
 * @param {number[]} arr
 * @param {number} num
 * @returns {number}
 * @memberof DivideAndConquer
 * @example
 * sortedFrequency([1,1,2,2,2,2,3],2) // 4
 * sortedFrequency([1,1,2,2,2,2,3],3) // 1
 * sortedFrequency([1,1,2,2,2,2,3],1) // 2
 * sortedFrequency([1,1,2,2,2,2,3],4) // -1
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * Pattern used: Binary Search
 */

function sortedFrequency(arr, num) {
    let leftIdx = leftBound(arr, num);
    let rightIdx = rightBound(arr, num);

    // If number is not found in the array
    if (leftIdx === -1) return -1;

    // Frequency is the difference between right and left boundaries
    return rightIdx - leftIdx + 1;
}

function leftBound(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (left >= arr.length || arr[left] != num) return -1;
    return left;
}

function rightBound(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (right < 0 || arr[right] != num) return -1;
    return right;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1

/**
 * Here, the leftBound function finds the first occurrence of the number (if it exists) by
 * repeatedly dividing the array in half, shifting the search space to the right when the mid
 * value is less than the number and to the left when it is greater than or equal to the number.
 *
 * The rightBound function similarly finds the last occurrence of the number (if it exists),
 * but instead, it shifts the search space to the left when the mid value is greater than the
 * number and to the right when it is less than or equal to the number.
 *
 * Finally, the sortedFrequency function finds the difference between the indices returned
 * by the rightBound and leftBound functions, which is the frequency of the number in the array.
 *
 * The time complexity of this algorithm is O(log n) because it uses binary search to find
 * the boundaries of the number in the array.
 */
