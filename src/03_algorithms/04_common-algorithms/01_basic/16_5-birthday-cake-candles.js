/**
 * Birthday Cake Candles
 *
 * You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
 *
 * Example
 * candles = [4, 4, 1, 3]
 *
 * The maximum height candles are 4 units high. There are 2 of them, so return 2.
 *
 * Function Description
 *
 * Complete the function birthdayCakeCandles in the editor below.
 *
 * birthdayCakeCandles has the following parameter(s):
 * - int candles[n]: the candle heights
 *
 * Returns
 * - int: the number of candles that are tallest
 *
 * Input Format
 *
 * The first line contains a single integer, n, the size of candles[].
 * The second line contains n space-separated integers, where each integer i describes the height of candles[i].
 *
 * Constraints
 * - 1 <= n <= 10^5
 * - 1 <= candles[i] <= 10^7
 *
 * Sample Input 0
 * 4
 * 3 2 1 3
 *
 * Sample Output 0
 * 2
 *
 * Explanation 0
 *
 * Candle heights are [3, 2, 1, 3]. The tallest candles are 3 units, and there are 2 of them.
 */

/**
 * Algorithm and Concepts Used:
 *
 * Finding the Maximum Height: Find the maximum height of the candles in the array.
 *
 * Counting the Tallest Candles: Count the number of candles that have the maximum height.
 */

(() => {
    const birthdayCakeCandles = (candles) => {
        // Find the tallest candle
        const max = Math.max(...candles);
        // Return the number of candles that are tallest
        return candles.filter((candle) => candle === max).length;
    };

    // Test cases:
    console.log(birthdayCakeCandles([3, 2, 1, 3])); // Output: 2
    console.log(birthdayCakeCandles([4, 4, 1, 3])); // Output: 2
    console.log(birthdayCakeCandles([3, 2, 1, 3, 3, 3, 3, 3, 3, 3])); // Output: 8
})();

(() => {
    const birthdayCakeCandles = (candles) => {
        // Step 1: Find the maximum height of the candles
        let maxHeight = Math.max(...candles);

        // Step 2: Count the number of candles with maximum height
        let count = 0;
        for (let i = 0; i < candles.length; i++) {
            if (candles[i] === maxHeight) {
                count++;
            }
        }

        return count;
    };

    // Test cases:
    console.log(birthdayCakeCandles([3, 2, 1, 3])); // Output: 2
    console.log(birthdayCakeCandles([4, 4, 1, 3])); // Output: 2
    console.log(birthdayCakeCandles([3, 2, 1, 3, 3, 3, 3, 3, 3, 3])); // Output: 8
})();
