/**
 * Best Time to Buy and Sell Stock III
 *
 * You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.
 *
 * Find the maximum profit you can achieve. You may complete at most two transactions.
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 *
 * Example 1:
 * Input: prices = [3,3,5,0,0,3,1,4]
 * Output: 6
 *
 * Explanation:
 * - Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3 - 0 = 3
 * - Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4 - 1 = 3
 * - Total profit is 3 + 3 = 6
 *
 * Example 2:
 * Input: prices = [1,2,3,4,5]
 * Output: 4
 *
 * Explanation:
 * - Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5 - 1 = 4
 * - Total profit is 4
 *
 * Example 3:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 *
 * Explanation:
 * - There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0
 *
 *
 * Constraints:
 * - 1 <= prices.length <= 10^5
 * - 0 <= prices[i] <= 10^5
 */

const maxProfit = (prices) => {
    let buy1 = Infinity,
        buy2 = Infinity;
    let sell1 = 0,
        sell2 = 0;

    for (let price of prices) {
        // First buying
        buy1 = Math.min(buy1, price);

        // First selling
        sell1 = Math.max(sell1, price - buy1);

        // Second buying
        buy2 = Math.min(buy2, price - sell1);

        // Second selling
        sell2 = Math.max(sell2, price - buy2);
    }

    return sell2;
};

/**
 * Key Concepts and Patterns:
 * 
 * Dynamic Programming
 * Dynamic Programming is used here to break the problem down into smaller sub-problems, solve each sub-problem, and store its answer in a simple table for future reference. For this specific problem, we are keeping track of the minimum prices at which we can buy and the maximum profit we can make for both the first and the second transactions.

  * Greedy Optimization
  * The algorithm continuously updates four variables—buy1, buy2, sell1, and sell2—as it traverses through the price array. The greedy optimization is evident as it always looks to minimize the buying prices (buy1 and buy2) and maximize the selling profits (sell1 and sell2) at each step.
 */

// Test cases:
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // Output: 6
console.log(maxProfit([1, 2, 3, 4, 5])); // Output: 4
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
console.log(maxProfit([1])); // Output: 0
console.log(maxProfit([1, 2])); // Output: 1
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2])); // Output: 3

/**
 * How It Works:
 * Initialization: Four variables are initialized. buy1 and buy2 are set to Infinity because we're looking for the minimum values, and setting them to Infinity ensures any subsequent number will be smaller. sell1 and sell2 are initialized to 0 as we're looking to maximize these values.
 *
 * buy1: Minimum price for the first stock.
 * sell1: Maximum profit after selling the first stock.
 * buy2: Minimum price for the second stock.
 * sell2: Maximum profit after selling the second stock.
 * Traversal: The algorithm loops through the prices array once, updating buy1, sell1, buy2, and sell2 based on the current price.
 *
 * First Buy (buy1): For each price, update buy1 if the current price is lower than buy1.
 *
 * First Sell (sell1): Update sell1 if selling at the current price gives you more profit than the current sell1. Profit is calculated as current price - buy1.
 *
 * Second Buy (buy2): Update buy2 if buying the second stock at the current price (considering the profit we have made so far sell1) is beneficial. Essentially, it checks current price - sell1.
 *
 * Second Sell (sell2): Finally, update sell2 if selling the second stock at the current price gives more profit than the current sell2. The profit is calculated as current price - buy2.
 *
 * Result: After looping through the prices array, sell2 contains the maximum profit possible with at most two transactions.
 *
 * Time Complexity:
 * The algorithm has a time complexity of O(n), which is optimal for this problem since we need to examine each price at least once.
 *
 * Space Complexity:
 * The space complexity is O(1) because we are using only a constant amount of extra space.
 */
