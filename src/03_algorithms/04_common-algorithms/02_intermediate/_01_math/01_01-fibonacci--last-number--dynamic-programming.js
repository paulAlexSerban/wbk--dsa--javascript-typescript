/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci
 * sequence, such that each number is the sum of the two preceding ones,
 * starting from 0 and 1. That is,
 *
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 * Given n, calculate F(n).
 *
 * Example 1:
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 *
 * Example 2:
 * Input: n = 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 *
 * Example 3:
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 *
 * Constraints:
 * 0 <= n <= 30
 */

(() => {
    /**
     * @param {number} n
     * @return {number} The nth Fibonacci number
     *
     * 1. If n is 0 or 1, return n
     * 2. Create an array with the first two Fibonacci numbers
     * 3. Loop through the number of times specified by n.
     * 4. Add the last two numbers in the array and store the result in the array
     * 5. Return the last number in the array
     */
    const fib = (n) => {
        /* 1 */ if (n <= 1) {
            return n;
        }

        /* 2 */ const fibNumbers = [0, 1];

        /* 3 */ for (let i = 2; i <= n; i++) {
            /* 4 */ fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
        }

        /* 5 */ return fibNumbers[n];
    };

    // Test cases:
    console.log(fib(2)); // Output: 1
    console.log(fib(3)); // Output: 2
    console.log(fib(4)); // Output: 3
})();

(() => {
    /**
     * Calculate fibonacci number at specific position using Dynamic Programming approach.
     *
     * @param n
     * @return {number}
     */
    function fibonacciNth(n) {
        let currentValue = 1;
        let previousValue = 0;

        if (n === 1) {
            return 1;
        }

        let iterationsCounter = n - 1;

        while (iterationsCounter) {
            currentValue += previousValue;
            previousValue = currentValue - previousValue;

            iterationsCounter -= 1;
        }

        return currentValue;
    }

    // Test cases:
    console.log(fibonacciNth(1)); // Output: 1
    console.log(fibonacciNth(2)); // Output: 1
    console.log(fibonacciNth(3)); // Output: 2
    console.log(fibonacciNth(4)); // Output: 3
    console.log(fibonacciNth(5)); // Output: 5
    console.log(fibonacciNth(6)); // Output: 8
    console.log(fibonacciNth(7)); // Output: 13
})();

/**
 * This code defines a function fib that takes a non-negative integer n and
 * returns the nth Fibonacci number. The function uses dynamic programming to
 * build an array of Fibonacci numbers fibNumbers iteratively, starting from
 * F(0) and F(1). It then returns the nth Fibonacci number from the fibNumbers
 * array.
 */
