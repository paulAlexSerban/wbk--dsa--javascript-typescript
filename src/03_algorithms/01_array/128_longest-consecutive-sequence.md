# Longest Consecutive Sequence

## Problem
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109

## Solution
To solve the problem of finding the longest consecutive sequence in an array in \(O(n)\) time, we can use a set for efficient lookups. Here is a step-by-step breakdown of the approach:

1. **Convert the Array to a Set**: By converting the array to a set, we can achieve \(O(1)\) time complexity for checking the existence of an element.

2. **Iterate Through Each Element**: For each element in the array, check if it is the start of a sequence. An element is considered the start of a sequence if there is no element that is one less than it in the set.

3. **Count the Length of the Sequence**: If an element is the start of a sequence, count the length of the sequence by incrementing the current element and checking its presence in the set.

4. **Keep Track of the Maximum Length**: Maintain a variable to store the maximum length of any sequence found.

Here is the JavaScript implementation of this approach:

```javascript
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Convert the array to a set for O(1) lookups
        const numSet = new Set(nums);
        let maxLength = 0;
        
        // Iterate over each number in the array
        for (let num of nums) {
            // Check if num is the start of a sequence
            if (!numSet.has(num - 1)) {
                // Start of a sequence
                let currentNum = num;
                let currentStreak = 1;

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
let solution = new Solution();
console.log(solution.longestConsecutive([2, 20, 4, 10, 3, 4, 5])); // Output: 4
console.log(solution.longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1])); // Output: 7
```

### Explanation:
1. **Set Creation**: `const numSet = new Set(nums);` creates a set from the array for quick lookups.
2. **Main Loop**: For each number in the array, we check if it's the start of a sequence by ensuring there isn't a number that is one less than it (`if (!numSet.has(num - 1))`).
3. **Sequence Counting**: If it is the start of a sequence, we count the length of the sequence by incrementing the number and checking the set for consecutive numbers.
4. **Max Length Update**: After determining the length of the current sequence, we update the maximum length if the current sequence is longer.

This algorithm efficiently finds the longest consecutive sequence in \(O(n)\) time using the properties of sets for quick lookups.

## Fastest Approach

Sure, here's the solution with detailed comments and an explanation of why it is the fastest approach:

```typescript
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
```

### Explanation of Comments:

1. **Set Creation**: `const numSet = new Set<number>(nums);` converts the array to a set for \(O(1)\) lookups. This step ensures that checking if an element exists in the set will be very fast.
2. **Initialize Longest Sequence Length**: `let longest = 0;` initializes a variable to keep track of the longest consecutive sequence found.
3. **Main Loop**: `for (const num of numSet)` iterates through each unique number in the set.
4. **Start of Sequence Check**: `if (!numSet.has(num - 1))` checks if the current number is the start of a sequence. A number is considered the start if there is no number that is one less than it in the set.
5. **Sequence Length Initialization**: `let length = 1;` initializes the length of the current sequence.
6. **Count Sequence Length**: `while (numSet.has(num + length))` increments the length by checking if consecutive numbers exist in the set.
7. **Update Longest Sequence Length**: `longest = Math.max(length, longest);` updates the longest sequence length if the current sequence is longer.
8. **Return Result**: `return longest;` returns the length of the longest consecutive sequence found.

### Why This Solution is the Fastest:

1. **Efficient Lookups with Set**: By using a set, the solution benefits from \(O(1)\) average time complexity for lookups, inserts, and deletes, making it very efficient for checking the existence of elements.
2. **Single Pass for Start Elements**: The algorithm only attempts to count sequences starting from elements that are the beginning of a sequence (i.e., where `num - 1` is not in the set). This reduces unnecessary checks and avoids redundant calculations.
3. **Linear Time Complexity**: The overall time complexity of this solution is \(O(n)\). The initial conversion of the array to a set takes \(O(n)\), and each element is processed in constant time relative to its inclusion in a sequence. Thus, it meets the requirement of an \(O(n)\) solution.

This approach ensures that each number is processed in the most efficient manner, leveraging the properties of sets for optimal performance.