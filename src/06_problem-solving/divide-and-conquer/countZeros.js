/**
 * Given an array of 1s and 0s which has all 1s first followed by all 0s, write a
 * function called countZeroes, which returns the number of zeroes in the array.
 */

/**
 * countZeroes
 * @param {number[]} arr
 * @returns {number}
 * @memberof DivideAndConquer
 * @example
 * countZeroes([1,1,1,1,0,0]) // 2
 * countZeroes([1,0,0,0,0]) // 4
 * countZeroes([0,0,0]) // 3
 * countZeroes([1,1,1,1]) // 0
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * Pattern used: Binary Search
 */

function countZeroes(arr) {
    // start with the entire array
    let left = 0;
    let right = arr.length - 1;

    // If the first element is 0, return the length of array (all elements are 0s)
    if (arr[0] === 0) return arr.length;

    // while the search space is still open
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // If mid element is 0 and the previous (mid - 1) is 1,
        // then we have found the transition point (from 1 to 0)
        if (arr[mid] === 0 && arr[mid - 1] === 1) {
            return arr.length - mid; // as we have all 0s from mid to end
        } else if (arr[mid] === 1) {
            // if mid element is 1, move left pointer to mid + 1
            left = mid + 1;
        } else {
            // if mid element is 0, move right pointer to mid - 1
            right = mid - 1;
        }
    }

    // If no zeroes found, return 0
    return 0;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
