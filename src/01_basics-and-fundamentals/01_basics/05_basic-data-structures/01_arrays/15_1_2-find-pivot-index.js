/**
 * Given an array of integers nums, calculate the pivot index of this array.
 *
 * The pivot index is the index where the sum of all the numbers strictly
 * to the left of the index is equal to the sum of all the numbers strictly
 * to the index's right.
 *
 * If the index is on the left edge of the array, then the left sum is 0
 * because there are no elements to the left. This also applies to the
 * right edge of the array.
 *
 * Return the leftmost pivot index. If no such index exists, return -1.
 *
 * Example 1:
 * Input: nums = [1,7,3,6,5,6]
 * Output: 3
 * Explanation:
 * The pivot index is 3.
 * Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
 * Right sum = nums[4] + nums[5] = 5 + 6 = 11
 *
 * Example 2:
 * Input: nums = [1,2,3]
 * Output: -1
 * Explanation:
 * There is no index that satisfies the conditions in the problem statement.
 *
 * Example 3:
 * Input: nums = [2,1,-1]
 * Output: 0
 * Explanation:
 * The pivot index is 0.
 * Left sum = 0 (no elements to the left of index 0)
 * Right sum = nums[1] + nums[2] = 1 + -1 = 0
 *
 * Constraints:
 * 1 <= nums.length <= 104
 * -1000 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // Set the initial sum of the left side of the array to 0
    let leftSum = 0;

    // Calculate the total sum of the entire array
    let totalSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Subtract the current number from the total sum
        totalSum -= nums[i];

        // Check if the left sum is equal to the total sum
        if (leftSum === totalSum) {
            // If so, return the current index
            return i;
        }

        // Add the current number to the left sum
        leftSum += nums[i];
    }

    // If no pivot index is found, return -1
    return -1;
};

// Test cases:
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // Output: 3
console.log(pivotIndex([1, 2, 3])); // Output: -1
console.log(pivotIndex([2, 1, -1])); // Output: 0

/**
 * This code defines a function pivotIndex that takes an array of integers nums
 * and returns the pivot index of the array.
 * The function first calculates the total sum of the array using the reduce method.
 * It then iterates through the array, updating the total sum and left
 * sum at each index. If the left sum is equal to the total sum minus the
 * current element, it returns the current index as the pivot index. If no
 * such index is found, it returns -1.
 */

/**
 * MERN Project Ideas
 *
 * Energy Consumption Monitoring System:
 * Create an application to monitor energy consumption in a building or a
 * facility. Users can input energy usage data for different sections, rooms,
 * or devices. Implement the pivot index code to find the point at which the
 * energy consumption is balanced between two areas, helping users identify areas
 * for improvement or optimization.
 *
 * Voting System:
 * Develop a voting system where users can cast their votes for various options
 * or candidates. Use the pivot index code to find the point at which the number
 * of votes for one option equals the sum of votes for all other options. This
 * can be helpful in understanding voting trends or determining when an option
 * becomes the majority choice.
 *
 * Investment Portfolio Analysis:
 * Build a tool that helps users analyze their investment portfolios. Users
 * can input their investments in various assets, such as stocks, bonds, and
 * real estate. Implement the pivot index code to find the point at which the sum
 * of investments on one side of the portfolio equals the sum on the other side,
 * allowing users to visualize the balance of their investments.
 *
 * Task Prioritization Tool:
 * Create a task prioritization tool where users can input their tasks along with
 * their weights or priorities. Use the pivot index code to find the point at which
 * the sum of task priorities on one side equals the sum on the other side, helping
 * users to balance their workload and focus on the most important tasks.
 *
 * Weighted Voting System:
 * Develop a weighted voting system where users can cast their votes for various
 * options, but each vote has a different weight based on factors such as
 * expertise or position in the organization. Implement the pivot index code to
 * find the point at which the sum of weighted votes for one option equals the
 * sum of weighted votes for all other options, helping to determine the majority
 * choice considering the weights.
 */
