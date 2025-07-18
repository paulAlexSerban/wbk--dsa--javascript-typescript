/**
 * The Tribonacci sequence Tn is defined as follows:
 *
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 *
 * Given n, return the value of Tn.
 *
 * Example 1:
 * Input: n = 4
 * Output: 4
 * Explanation:
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 *
 * Example 2:
 * Input: n = 25
 * Output: 1389537
 *
 * Constraints:
 * 0 <= n <= 37
 * The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
 */

(() => {
    /**
     * @param {number} n
     * @return {number}
     */
    var tribonacci = function (n) {
        // If n is 0, return 0
        if (n === 0) {
            return 0;
            // If n is 1 or 2, return 1
        } else if (n === 1 || n === 2) {
            return 1;
        }

        // Create an array with the first three tribonacci numbers
        const tribNumbers = [0, 1, 1];

        // Loop through the array from index 3 to n
        for (let i = 3; i <= n; i++) {
            // Add the previous three numbers and add it to the array
            tribNumbers[i] = tribNumbers[i - 1] + tribNumbers[i - 2] + tribNumbers[i - 3];
        }

        // Return the last number in the array
        return tribNumbers[n];
    };

    // Test cases:
    console.log(tribonacci(4)); // Output: 4
    console.log(tribonacci(25)); // Output: 1389537
})();

/**
 * This code defines a function tribonacci that takes a non-negative integer n
 * and returns the nth Tribonacci number. The function uses dynamic programming
 * to build an array of Tribonacci numbers tribNumbers iteratively, starting from
 * T(0), T(1), and T(2). It then returns the nth Tribonacci number from the
 * tribNumbers array.
 */
