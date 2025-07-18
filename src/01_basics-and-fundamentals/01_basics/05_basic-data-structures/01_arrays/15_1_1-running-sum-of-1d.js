/**
 * Running Sum of 1d Array
 *
 * Given an array nums. We define a running sum of an array as
 * runningSum[i] = sum(nums[0]…nums[i]).
 *
 * Return the running sum of nums.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 *
 * Example 2:
 * Input: nums = [1,1,1,1,1]
 * Output: [1,2,3,4,5]
 * Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
 *
 * Example 3:
 * Input: nums = [3,1,2,10,1]
 * Output: [3,4,6,16,17]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 1000
 * -10^6 <= nums[i] <= 10^6
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
    const runningSumArray = [];

    nums.reduce((accumulator, currentValue, index) => {
        runningSumArray[index] = accumulator + currentValue;
        return runningSumArray[index];
    }, 0);

    return runningSumArray;
};

// Test cases:
console.log(runningSum([1, 2, 3, 4])); // Output: [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])); // Output: [1, 2, 3, 4, 5]
console.log(runningSum([3, 1, 2, 10, 1])); // Output: [3, 4, 6, 16, 17]

/**
 * This code defines a function runningSum that takes an array of integers nums
 * and returns an array with the running sum of nums. The function uses the reduce
 *  method to iterate through the nums array, calculating the running sum at each
 * index and storing it in the runningSumArray. Finally, it returns the
 * runningSumArray containing the running sum of the input array.
 */

/**
 * MERN Project ideas:
 *
 * Expense Tracker:
 * Create an expense tracking application where users can log their daily expenses
 * in different categories. Implement the running sum code to display a running
 * total of expenses for each category or overall, allowing users to visualize
 * their spending habits over time.
 *
 * Fitness Tracker:
 * Develop a fitness tracking application where users can log their daily workouts,
 * including the duration and calories burned. Use the running sum code to display
 * a running total of workouts, calories burned, or active minutes, giving users
 * insights into their fitness progress.
 *
 * Stock Portfolio Tracker:
 * Build a stock portfolio tracking application where users can input their stock
 * holdings and track their market value over time. Implement the running sum code
 * to display a running total of portfolio gains or losses, helping users
 * understand their investment performance.
 *
 * E-commerce Dashboard:
 * Create an e-commerce dashboard for online store owners to track their sales and
 * revenue. Use the running sum code to display a running total of sales, revenue,
 * or other key performance indicators (KPIs) over time, allowing store owners to
 * monitor their business performance.
 *
 * Project Management Tool:
 * Develop a project management tool where users can create tasks, set deadlines,
 * and track progress. Implement the running sum code to display a running total
 * of completed tasks or milestones, giving users a visual representation of their
 * progress towards project completion.
 */
