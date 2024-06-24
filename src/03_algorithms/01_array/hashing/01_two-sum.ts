export const twoSum = (nums: number[], target: number): number[] => {
  // Create a map to store the index of the complement of the current number
  const map = new Map<number, number>();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement of the current number
    const complement = target - nums[i];
    // If the complement is in the map, return the indices
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    // Otherwise, store the index of the current number
    map.set(nums[i], i);
  }

  return [];
};

/**
 * this algorithm has a time complexity of O(n) and a space complexity of O(n)
 * that is because we are iterating through the array once and storing the index of the complement of the current number in a map
 * the space  complexity is O(n) because in the worst case scenario, we will store all the numbers in the map
 */
