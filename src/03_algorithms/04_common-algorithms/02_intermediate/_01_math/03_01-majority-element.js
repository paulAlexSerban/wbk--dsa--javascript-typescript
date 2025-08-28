/**
 * Majority Element
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 *
 * Constraints:
 * - n == nums.length
 * - 1 <= n <= 5 * 10^4
 * - -10^9<= nums[i] <= 10^9
 *
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

/**
 * Hash Table (Time: O(n), Space: O(n))
 * Here, we can use a hash table to count the occurrences of each element and then find the majority element.
 */

(() => {
    const majorityElement = (nums) => {
        const counts = {};
        const n = nums.length;

        for (let num of nums) {
            counts[num] = (counts[num] || 0) + 1;
            if (counts[num] > Math.floor(n / 2)) {
                return num;
            }
        }

        return null; // Should never reach this based on problem constraints
    };

    const nums = [2, 2, 1, 1, 1, 2, 2];
    console.log(majorityElement(nums));

    // Time complexity: O(n)
    // Space complexity: O(n)
})();

/**
 * Boyer-Moore Voting Algorithm (Time: O(n), Space: O(1))
 * This algorithm works by keeping a count of the majority element as we iterate through the array. When we see a new element, we decrement the count; when we see the majority element, we increment the count.
 */

(() => {
    const majorityElement = (nums) => {
        let count = 0;
        let candidate = null;

        for (let num of nums) {
            if (count === 0) {
                candidate = num;
            }
            count += num === candidate ? 1 : -1;
        }

        return candidate;
    };

    const nums = [2, 2, 1, 1, 1, 2, 2];
    console.log(majorityElement(nums));
})();
