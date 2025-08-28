/**
 * Minimum Loss
 *
 * Lauren has a chart of distinct projected prices for a house over the next several years. She must buy the house in one year and sell it in another, and she must do so at a loss. She wants to minimize her financial loss.
 *
 * Example:
 * price
 * Her minimum loss is incurred by purchasing in year 2 at price[1] = 15 and selling it in year 5 at price[4] = 12. Return 15 - 12 = 3.
 *
 * Function Description:
 * Complete the minimumLoss function in the editor below.
 * minimumLoss has the following parameter(s):
 * - int price[n]: home prices at each year
 *
 * Returns:
 * int: the minimum loss possible
 *
 * Input Format:
 * The first line contains an integer n, the number of years of house data.
 * The second line contains n space-separated long integers that describe each price[i].
 *
 * Constraints:
 * 2 <= n <= 2 * 10^5
 * 1 <= price[i] <= 10^16
 * All prices are distinct.
 * A valid answer exists.
 *
 * Subtasks:
 * 2 <= n <= 1000 for 50% of the maximum score.
 *
 * Sample Input 0:
 * 3
 * 5 10 3
 *
 * Sample Output 0:
 * 2
 *
 * Explanation 0:
 * Lauren buys the house in year 1 at price[0] = 5 and sells it in year 3 at price[2] = 3 for a minimal loss of 5 - 3 = 2.
 *
 * Sample Input 1:
 * 5
 * 20 7 8 2 5
 *
 * Sample Output 1:
 * 2
 *
 * Explanation 1:
 * Lauren buys the house in year 2 at price[1] = 7 and sells it in year 5 at price[4] = 5 for a minimal loss of 7 - 5 = 2.
 */

(() => {
    /*
     * Complete the 'minimumLoss' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts LONG_INTEGER_ARRAY price as parameter.
     */

    const minimumLoss = (price) => {
        let minLoss = Infinity;
        const sortedPrices = price.slice().sort((a, b) => a - b);
        for (let i = 1; i < sortedPrices.length; i++) {
            const loss = sortedPrices[i] - sortedPrices[i - 1];
            if (loss < minLoss && price.indexOf(sortedPrices[i]) < price.indexOf(sortedPrices[i - 1])) {
                minLoss = loss;
            }
        }
        return minLoss;
    };

    console.log(minimumLoss([5, 10, 3])); // 2
    console.log(minimumLoss([20, 7, 8, 2, 5])); // 2
    console.log(minimumLoss([20, 15, 8, 2, 12])); // 3
    console.log(minimumLoss([20, 15, 8, 2, 12, 10])); // 2
})();
