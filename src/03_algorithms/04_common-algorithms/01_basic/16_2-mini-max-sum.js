/**
 * The "Mini-Max Sum" challenge on HackerRank is to find the minimum and maximum
 * sums that can be obtained by summing exactly four of the five elements in an array.
 *
 * Here's a JavaScript solution for the "Mini-Max Sum" challenge:
 */

function miniMaxSum(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    let minSum = sum - max;
    let maxSum = sum - min;

    console.log(minSum, maxSum);
}

// Test case:
const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);

/**
 * This code defines a function miniMaxSum that takes an array arr and calculates
 * the minimum and maximum sums that can be obtained by summing exactly four of
 * the five elements in the array.
 *
 * First, it finds the minimum and maximum elements in the array using
 * Math.min(...arr) and Math.max(...arr) respectively. Then, it calculates
 * the sum of all elements in the array using reduce method.
 *
 * Finally, it calculates the minimum sum by subtracting the maximum element
 * from the total sum, and the maximum sum by subtracting the minimum element
 * from the total sum. The function then prints the minimum and maximum sums
 * on a single line, separated by a space.
 */

/**
 * Sports Team Performance Analysis:
 *  * Create a sports team performance analysis application that allows users
 * to input individual player scores or statistics for each game. Use the
 * "Mini-Max Sum" code to calculate the best and worst possible team performance
 * by removing one player's contribution, helping coaches identify key players
 * and potential weaknesses.
 *
 * Sales Forecasting Tool:
 * Develop a sales forecasting tool that allows businesses to input their
 * historical sales data and generate predictions for future sales. Use the
 * "Mini-Max Sum" code to calculate the best and worst possible sales scenarios
 * by excluding the highest and lowest sales data points, providing businesses
 * with insights into potential risks and opportunities.
 *
 * Expense Tracker and Budgeting Application:
 * Build an expense tracker and budgeting application that allows users to input
 * their income, expenses, and savings goals. Use the "Mini-Max Sum" code to
 * calculate the best and worst possible budget scenarios by excluding one
 * expense category, helping users identify areas where they can cut costs or
 * increase savings.
 *
 * Stock Market Analysis Platform:
 * Create a stock market analysis platform that allows users to input and
 * analyze historical stock prices for multiple companies. Use the "Mini-Max Sum"
 * code to calculate the best and worst possible investment scenarios by excluding
 * one company's stock prices, providing investors with insights into potential
 * risks and rewards.
 *
 * Project Management and Resource Allocation Tool:
 * Develop a project management and resource allocation tool that allows managers
 * to input project tasks, deadlines, and employee work hours. Use the "Mini-Max Sum"
 * code to calculate the best and worst possible project completion scenarios by
 * excluding one employee's contribution, helping managers optimize resource
 * allocation and ensure timely project completion.
 *
 * In each of these projects, you can integrate the given code to calculate the
 * best and worst possible scenarios by excluding one data point from the array.
 * This can help users understand the impact of individual data points on the overall
 * outcome and make more informed decisions in various fields, such as sports team
 * performance, sales forecasting, budgeting, stock market analysis, and project
 * management.
 */

/**
 * Algorithm and Concepts Used:
 * Finding the Minimum and Maximum Element: Using the spread operator ... with Math.min and Math.max functions to find the smallest and largest numbers in the array.
 *
 * Calculating the Total Sum: Using Array.prototype.reduce() to find the sum of all elements in the array.
 *
 * Calculating the Mini-Max Sum:
 * Minimum Sum: Subtract the maximum value from the total sum (sum - max).
 * Maximum Sum: Subtract the minimum value from the total sum (sum - min).
 *
 * Code Walkthrough:
 *
 * First, it finds the minimum and maximum values from the array using Math.min(...arr) and Math.max(...arr).
 *
 * Second, it calculates the sum of all the array elements using the reduce() method.
 *
 * Finally, it calculates:
 *
 * minSum as the total sum minus the maximum element (sum - max).
 * maxSum as the total sum minus the minimum element (sum - min).
 *
 * And it logs the minSum and maxSum to the console.
 *
 * Time Complexity:
 *
 * The time complexity is O(n) because:
 *
 * Finding the minimum and maximum elements takes O(n) time.
 *
 * Calculating the sum of all elements also takes O(n) time.
 *
 * Space Complexity:
 * The space complexity is O(1) as we are using only a constant amount of extra space.
 *
 */
