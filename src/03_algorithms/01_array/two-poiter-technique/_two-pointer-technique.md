# The Two-Pointer Technique with Arrays

The two-pointer technique is a common algorithmic strategy that involves using two pointers (or indices) to iterate through an array. This technique is particularly useful for solving problems related to searching, sorting, and manipulating subarrays or pairs in a linear time complexity.

### Problem Example: Two Sum (Sorted Array)

**Problem Statement:** Given a sorted array of integers and a target sum, find the indices of the two numbers that add up to the target sum.

**Two-Pointer Approach:**
1. Initialize two pointers: one at the beginning (`left`) and one at the end (`right`) of the array.
2. Calculate the sum of the elements at the two pointers.
3. If the sum is equal to the target, return the indices.
4. If the sum is less than the target, move the left pointer to the right (increase the sum).
5. If the sum is greater than the target, move the right pointer to the left (decrease the sum).
6. Repeat steps 2-5 until the pointers meet.

**TypeScript Implementation:**

```typescript
function twoSumSorted(arr: number[], target: number): number[] | null {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null; // No solution found
}

// Example usage:
const arr = [1, 2, 3, 4, 6];
const target = 6;
const result = twoSumSorted(arr, target);
console.log(result);  // Outputs: [1, 3]
```

### Problem Example: Container With Most Water

**Problem Statement:** Given an array of non-negative integers representing the heights of vertical lines, find two lines that together with the x-axis form a container, such that the container contains the most water.

**Two-Pointer Approach:**
1. Initialize two pointers: one at the beginning (`left`) and one at the end (`right`) of the array.
2. Calculate the area formed between the lines at the two pointers and update the maximum area if the current area is larger.
3. Move the pointer pointing to the shorter line inward, as this might increase the area by finding a taller line.
4. Repeat until the pointers meet.

**TypeScript Implementation:**

```typescript
function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentArea = width * currentHeight;
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Example usage:
const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = maxArea(heights);
console.log(result);  // Outputs: 49
```

### Explanation:

- **Two Sum (Sorted Array):**
  - The two-pointer technique leverages the sorted nature of the array to efficiently find the two indices.
  - By moving the pointers based on the sum comparison, it ensures that all pairs are considered without redundant checks, resulting in O(n) time complexity.

- **Container With Most Water:**
  - The two-pointer technique helps in checking all possible containers formed by the lines.
  - By moving the pointer pointing to the shorter line, it aims to find a potentially larger container, ensuring that the maximum area is calculated efficiently in O(n) time complexity.

### Key Points:
- **Efficiency:** The two-pointer technique often reduces the time complexity of problems that would otherwise require nested loops.
- **Applicability:** It is useful for problems involving sorted arrays, pairs, and subarray manipulation.
- **Implementation:** It typically involves initializing two pointers and moving them towards each other based on a condition.

This technique is widely applicable and can be adapted to solve various array-related problems efficiently.