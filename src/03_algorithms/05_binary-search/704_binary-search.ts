/**
 * Given an array of integers nums which is sorted in ascending order, and an
 * integer target, write a function to search target in nums. If target exists,
 * then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 * Constraints:
 * 1 <= nums.length <= 104
 * -104 < nums[i], target < 104
 * All the integers in nums are unique.
 * nums is sorted in ascending order.
 */

function searchV1(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function searchV2(nums: number[], target: number, lo = 0, hi = nums.length - 1): number {
    if (lo > hi) return -1;
    const mid = Math.floor((hi + lo) / 2);
    if (nums[mid] < target) {
        return searchV2(nums, target, mid + 1, hi);
    } else if (nums[mid] > target) {
        return searchV2(nums, target, lo, mid - 1);
    }
    return mid;
}

function searchV3(nums: number[], target: number): number {
     
  let len : number = nums.length;
  let start : number = 0;
  let end : number = len - 1;
  while(end>=start) {
      let mid : number = Math.floor((start + end) / 2);
      if(nums[mid] == target) {
          return mid;
      } 
      else if(nums[mid] < target) {
          start = mid + 1;
      }
      else {
          end = mid - 1;
      }
  }

 return -1;
};

export { searchV1, searchV2, searchV3 };

