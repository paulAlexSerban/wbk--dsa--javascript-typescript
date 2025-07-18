/**
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
 

Constraints:

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40
 */

(() => {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    const combinationSum = (candidates, target) => {
        const result = [];
        const backtrack = (curr, sum, start) => {
            if (sum === target) {
                result.push([...curr]);
                return;
            }
            if (sum > target) {
                return;
            }
            for (let i = start; i < candidates.length; i++) {
                curr.push(candidates[i]);
                backtrack(curr, sum + candidates[i], i);
                curr.pop();
            }
        };
        backtrack([], 0, 0);
        return result;
    };

    const candidates = [2, 3, 6, 7];
    const target = 7;
    console.log(combinationSum(candidates, target)); // [[2,2,3],[7]]

    const candidates2 = [2, 3, 5];
    const target2 = 8;
    console.log(combinationSum(candidates2, target2)); // [[2,2,2,2],[2,3,3],[3,5]]

    const candidates3 = [2];
    const target3 = 1;
    console.log(combinationSum(candidates3, target3)); // []

    const candidates4 = [1];
    const target4 = 1;
    console.log(combinationSum(candidates4, target4)); // [[1]]
})();
