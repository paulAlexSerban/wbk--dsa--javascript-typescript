/**
 * 3Sum
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k,
 * and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not matter.
 *
 * Example 2:
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 *
 * Example 3:
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet is [0,0,0].
 *
 * Constraints:
 * - 0 <= nums.length <= 3000
 * - -10^5 <= nums[i] <= 10^5
 *
 * @param {number[]} nums
 * @return {number[][]}
 */

(() => {
    const threeSum = (nums) => {
        const result = [];
        if (nums.length < 3) {
            return result;
        }

        // Sort the array in ascending order
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            // Skip duplicates
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);

                    // Skip duplicates for 'left' and 'right'
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    };

    const nums = [-1, 0, 1, 2, -1, -4];
    console.log(threeSum(nums));

    const nums2 = [0, 1, 1];
    console.log(threeSum(nums2));

    const nums3 = [0, 0, 0];
    console.log(threeSum(nums3));

    const nums4 = [-2, 0, 0, 2, 2];
    console.log(threeSum(nums4));
})();

/**
 * Explanation:
 * Sort the Array: Sorting the array simplifies the problem, making it easier to skip duplicates and move pointers.
 * Iterate Through: The first pointer (i) goes through each element up to the third last element. We use two additional pointers, left and right, initialized to the elements right after i and the last element of the array, respectively.
 * Three Pointers: While left is less than right, calculate the sum of the numbers pointed by i, left, and right.
 * 
 * If it's 0, we found a triplet. Add it to the result and move the pointers inward, skipping any duplicate numbers.
 * If the sum is negative, it means we need a larger number, so we move the left pointer to the right.
 * If the sum is positive, we need a smaller number, so we move the right pointer to the left.
 * Time and Space Complexity:
 * Time Complexity: 
 * O(n^2) - We have a nested loop (each operated by a pointer) iterating through the sorted array.
 * 
 * Space Complexity: 
 * O(n) - Extra space is primarily used for the output array, which in the worst case can have 
 * n unique triplets. However, this is output space, and if we don't consider that, then the space complexity is 
 * O(1), constant space.


 */
