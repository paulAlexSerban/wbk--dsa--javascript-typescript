/**
 * Contains Duplicate
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 *
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */

/**
 * Object solution
 * Approach: Iterate through the array and store each element in an object. If the element already exists in the object, return true.
 * Otherwise, add the element to the object. If the loop completes, return false.
 *
 * Time complexity: O(n) because we do a constant time check for object membership for each element in nums.
 * Space complexity: O(n) because in the worst case, the object will contain all elements in nums.
 *
 * This approach uses a JavaScript object as a hash table to keep track of the numbers encountered in the array. If a duplicate number
 * is found (a number already present in the hash table), the function returns true. If no duplicates are found, it returns false.
 * It's a solid solution with O(n) time complexity and O(n) space complexity.
 */

(() => {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    const containsDuplicate = (nums = []) => {
        // Creating an object to store the unique elements of the array.
        const uniqueNums = {};

        // Iterating through each element in the array.
        for (let i = 0; i < nums.length; i++) {
            // If the element is already present in the uniqueNums object, return true as duplicate exists.
            if (uniqueNums[nums[i]] != undefined) {
                return true;
            }

            // Otherwise, add the element to the uniqueNums object.
            uniqueNums[nums[i]] = true;
        }

        // If the loop completes, no duplicate was found, so return false.
        return false;
    };

    // Test examples
    console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
    console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
    console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true
})();

/**
 * Object solution 2
 */
(() => {
    const containsDuplicate = (nums) => {
        const uniqueNums = {};
        for (let num of nums) {
            if (uniqueNums[num]) {
                return true;
            }
            uniqueNums[num] = true;
        }
        return false;
    };

    // Test examples
    console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
    console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
    console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true
})();

/**
 * Brute force solution
 * Approach: Use two nested loops to compare every pair of numbers in nums. If any equal pair is found, return true. Otherwise, return false.
 * Time Complexity: O(n^2)
 * - because we do a linear search for each element in nums.
 * Space Complexity: O(1)
 * - because we don't use any additional data structures.
 *
 * This approach utilizes two nested loops to compare every pair of numbers in the array. It returns true if any pair is equal; otherwise, it
 * returns false. While straightforward, it is inefficient, with a time complexity of O(n^2) and is not optimal for large input arrays.
 */
console.log('Brute force solution');
(() => {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    const containsDuplicate = (nums = []) => {
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[j] == nums[i]) {
                    return true;
                }
            }
        }
        return false;
    };

    const nums = [1, 2, 3, 1];
    console.log(containsDuplicate(nums));

    const nums2 = [1, 2, 3, 4];
    console.log(containsDuplicate(nums2));
})();

/**
 * Sorting solution
 * Approach: Sort the array and check for adjacent elements if they are equal. If any are found, return true. Otherwise, return false after the loop.
 * Time Complexity:
 *  - O(n log n) for sorting, O(n) for iterating -> O(n log n)
 *  - because we sort nums and then do a linear search for each element in nums.
 * Space Complexity:
 *  - O(1) if sorting in-place, otherwise O(n)
 *  - because we don't use any additional data structures.
 *
 * The array is first sorted, and then a single loop checks adjacent elements for equality. If any pair of adjacent elements is equal, it returns
 * true; otherwise, it returns false. The time complexity is mainly determined by the sorting operation, which is typically O(n log n), making
 * this solution more efficient than the brute force method but less efficient than the hash table method.
 */
console.log('Sorting solution');
(() => {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    const containsDuplicate = (nums = []) => {
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                return true;
            }
        }
        return false;
    };

    const nums = [1, 2, 3, 1];
    console.log(containsDuplicate(nums));

    const nums2 = [1, 2, 3, 4];
    console.log(containsDuplicate(nums2));
})();

/**
 * Set solution (same logic as object solution)
 * Approach: Iterate through the array and store each element in a set. If the element already exists in the set, return true. Otherwise, add the 
 * element to the set. If the loop completes, return false.
 * Time Complexity:
 * - O(n) because we do a constant time check for set membership for each element in nums.
 * Space Complexity:
 * - O(n) because in the worst case, the set will contain all elements in nums.
 * 

 * 
 * This approach is similar to the object solution but uses a Set in JavaScript, providing better performance for some operations. This solution 
 * has a time complexity of O(n) and a space complexity of O(n) and is generally an effective and clean solution in JavaScript due to the usage of Set.
 */
console.log('Hash table solution');
(() => {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    const containsDuplicate = (nums = []) => {
        const set = new Set();
        for (const num of nums) {
            if (set.has(num)) {
                return true;
            }
            set.add(num);
        }
        return false;
    };

    const nums = [1, 2, 3, 1];
    console.log(containsDuplicate(nums));

    const nums2 = [1, 2, 3, 4];
    console.log(containsDuplicate(nums2));
})();

/**
 * Map solution
 * Approach: Similar to the first approach but using a Map, which might have better performance characteristics in some JavaScript engines.
 * Time Complexity: O(n)
 * - because we do a constant time check for map membership for each element in nums.
 * Space Complexity: O(n)
 * - because in the worst case, the map will contain all elements in nums.
 *
 * Similarly, this approach uses a JavaScript Map object instead of an ordinary object. The principles remain the same: if a duplicate is
 * found, return true; otherwise, return false. The Map object might offer better performance in some scenarios, but generally, the time and
 * space complexity remain O(n).
 */
(() => {
    const containsDuplicate = (nums) => {
        const numMap = new Map();
        for (let num of nums) {
            if (numMap.has(num)) {
                return true;
            }
            numMap.set(num, true);
        }
        return false;
    };

    const nums = [1, 2, 3, 1];
    console.log(containsDuplicate(nums));

    const nums2 = [1, 2, 3, 4];
    console.log(containsDuplicate(nums2));
})();

/**
 * In summary, depending on the specific needs and constraints of the application you are developing (for instance, whether time
 * or space complexity is a more critical concern), different solutions might be appropriate. If performance is a priority and
 * additional space usage is acceptable, the hash table solution (using an Object, Set, or Map) is typically a good choice. If
 *  minimizing additional space usage is more important, the sorting solution might be appropriate despite its higher time complexity.
 * The brute force solution is typically not recommended due to its inefficiency, particularly with larger input arrays.
 */
