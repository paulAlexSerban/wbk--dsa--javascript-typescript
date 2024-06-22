/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 * Example 1:
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 *
 * Example 2:
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 * Explanation: The longest consecutive elements sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]. Therefore its length is 9.
 *
 * Constraints:
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 */

export function longestConsecutive(nums: number[]): number {
  // Convert the array to a set for O(1) lookups
  let set = new Set(nums);

  // Initialize the maximum length to 0
  let max = 0;

  // Iterate over each number in the array
  for (let num of nums) {
    // Check if num is the start of a sequence
    if (!set.has(num - 1)) {
      // If num is the start, initialize current sequence start and its length
      let current = num;
      let currentMax = 1;

      // Count the length of the sequence
      while (set.has(current + 1)) {
        current++; // Move to the next number in the sequence
        currentMax++; // Increment the length of the current sequence
      }

      // Update the maximum length if the current sequence is longer
      max = Math.max(max, currentMax);
    }
  }

  // Return the maximum length of the consecutive sequence found
  return max;
}

export function longestConsecutive_FASTEST(nums: number[]): number {
  // Convert the array to a set for O(1) lookups
  const numSet = new Set<number>(nums);
  // Initialize the variable to keep track of the longest sequence length
  let longest = 0;

  // Iterate over each number in the set
  for (const num of numSet) {
    // Check if the current number is the start of a sequence
    if (!numSet.has(num - 1)) {
      // If it's the start, initialize the length of the sequence
      let length = 1;
      // Count the length of the sequence by checking consecutive numbers
      while (numSet.has(num + length)) {
        length++;
      }
      // Update the longest sequence length found so far
      longest = Math.max(length, longest);
    }
  }
  
  // Return the length of the longest consecutive sequence
  return longest;
}


export class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    // Convert the array to a set for O(1) lookups
    const numSet: Set<number> = new Set(nums);
    let maxLength: number = 0;

    // Iterate over each number in the array
    for (let num of nums) {
      // Check if num is the start of a sequence
      if (!numSet.has(num - 1)) {
        // Start of a sequence
        let currentNum: number = num;
        let currentStreak: number = 1;

        // Count the length of the sequence
        while (numSet.has(currentNum + 1)) {
          currentNum += 1;
          currentStreak += 1;
        }

        // Update the maximum length
        maxLength = Math.max(maxLength, currentStreak);
      }
    }

    return maxLength;
  }
}

// Example usage:
const solution = new Solution();
console.log(solution.longestConsecutive([2, 20, 4, 10, 3, 4, 5])); // Output: 4
console.log(solution.longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1])); // Output: 7
