(() => {
    /**
     * function fib
     * Accepts a number and returns the nth number in the Fibonacci sequence
     *
     * Note:
     *
     * The Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
     * which starts with 1 and 1, and where every number thereafter is equal to the
     * sum of the previous two numbers
     *
     * @param {number} n
     * @return {number} The nth number in the Fibonacci sequence
     */
    const fib = (n) => {
        if (n <= 2) {
            return 1;
        }
        return fib(n - 1) + fib(n - 2);
    };

    console.log(fib(4)); // 3
    console.log(fib(10)); // 55
    console.log(fib(28)); // 317811
    console.log(fib(35)); // 9227465
})();
