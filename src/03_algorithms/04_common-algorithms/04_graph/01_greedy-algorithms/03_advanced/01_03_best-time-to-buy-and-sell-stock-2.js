/**
 * Bets Time to Buy and Sell Stock II
 *
 * You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.
 *
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
 *
 * Find and return the maximum profit you can achieve.
 *
 * Example 1:
 * Input: prices = [1,2,3,0,2]
 * Output: 3
 *
 * Explanation:
 * - Buy on day 0, sell on day 1, profit = 2 - 1 = 1
 * - Buy on day 3, sell on day 4, profit = 2 - 0 = 2
 * - Total profit is 1 + 2 = 3
 *
 * Example 2:
 * Input: prices = [1]
 * Output: 0
 *
 * Example 3:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 * Explanation:
 * - Buy on day 1, sell on day 2, profit = 5 - 1 = 4
 * - Then buy on day 3, sell on day 4, profit = 6 - 3 = 3
 * - Total profit is 4 + 3 = 7
 *
 * Constraints:
 * - 1 <= prices.length <= 10^5
 * - 0 <= prices[i] <= 10^5
 *
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        if (price < minPrice) {
            minPrice = price;
        } else {
            maxProfit += price - minPrice;
            minPrice = price;
        }
    }

    return maxProfit;
};

// Test cases:
console.log(maxProfit([1, 2, 3, 0, 2])); // Output: 3
console.log(maxProfit([1])); // Output: 0
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 7
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
console.log(maxProfit([2, 4, 1])); // Output: 2
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2])); // Output: 2
