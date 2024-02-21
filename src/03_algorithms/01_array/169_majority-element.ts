/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 *
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 *
 * Constraints
 * n == nums.length
 * 1 <= n <= 5 * 104
 * -109 <= nums[i] <= 109
 *
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

const majorityElementV1 = (nums: number[]): number => {
    let count = 0;
    let candidate = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += num === candidate ? 1 : -1;
    }

    return candidate;
};

function majorityElementV2(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}

function majorityElementV3(nums: number[]): number {
    let map = new Map<number, number>();
    let half = Math.floor(nums.length / 2);
    for (const num of nums) {
        const count = (map.get(num) || 0) + 1;
        if (count > half) {
            // Change this to check if count is greater than half
            return num;
        }
        map.set(num, count);
    }

    return -1; // Consistent with the explanation, but ensure your use case expects this possibility.
}

/**
 * Hash Table (Time: O(n), Space: O(n))
 * Here, we can use a hash table to count the occurrences of each element and then find the majority element.
 */

const majorityElementV4 = (nums: number[]) => {
    type Counts = {
        [key: number]: number;
    };
    const counts: Counts = {};
    const n = nums.length;

    for (let num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > Math.floor(n / 2)) {
            return num;
        }
    }

    return null; // Should never reach this based on problem constraints
};

/**
 * Boyer-Moore Voting Algorithm (Time: O(n), Space: O(1))
 * This algorithm works by keeping a count of the majority element as we iterate through the array. When we see a new element, we decrement the count; when we see the majority element, we increment the count.
 */

const majorityElementV5 = (nums: number[]) => {
    let count: number = 0;
    let candidate: number | null = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += num === candidate ? 1 : -1;
    }

    return candidate;
};

export { majorityElementV1, majorityElementV2, majorityElementV3, majorityElementV4, majorityElementV5 };
