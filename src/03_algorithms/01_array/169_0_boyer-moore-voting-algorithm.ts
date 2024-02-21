/**
 * The Boyer-Moore Voting Algorithm is a clever algorithm for finding the majority element in an array, 
 * which is defined as an element that appears more than n/2 times in the array, where n is the array's length. 
 * The beauty of this algorithm lies in its linear time complexity (O(n)) and constant space complexity (O(1)), 
 * making it highly efficient for this specific problem.

Here's how you can implement the Boyer-Moore Voting Algorithm in TypeScript:
 */

function majorityElement(nums: number[]): number {
    let count = 0;
    let candidate: number | null = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += num === candidate ? 1 : -1;
    }

    // Optional: Verify that the candidate is indeed a majority element
    count = 0;
    for (const num of nums) {
        if (num === candidate) count++;
    }

    if (count > nums.length / 2) {
        return candidate!;
    } else {
        throw new Error('No majority element');
    }
}

// Example usage
const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums)); // Output: 2

/**
 * Explanation:
 * Initialization: Start with a count of 0 and a candidate set to null.
 * First Pass: Iterate through each number in the array (nums):
 * If count is 0, update the candidate to the current number.
 * Increment count if the current number is the same as candidate.
 * Decrement count if it's different.
 * Second Pass (Optional): The first pass guarantees that if there is a majority element, candidate will be equal to it. However, it doesn't guarantee that candidate is the majority element if no such element exists. To ensure the candidate is the majority, you can perform a second pass to count its occurrences and verify it exceeds n/2.
 * The second pass is optional and only necessary if you need to ensure the candidate is indeed the majority element, as the first pass might also select a candidate in arrays without any majority element. This additional verification step ensures the algorithm's correctness in all scenarios but at the cost of doubling the algorithm's run time, albeit it remains linear (O(n)).
 */
