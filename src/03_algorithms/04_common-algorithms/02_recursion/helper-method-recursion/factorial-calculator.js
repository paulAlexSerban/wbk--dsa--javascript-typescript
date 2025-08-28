class FactorialCalculator {
    // Public method that acts as the entry point.
    calculate(n) {
        // Validate input and call the private helper method.
        if (n < 0) {
            throw new Error('Input must be a non-negative integer.');
        }
        return this._factorialHelper(n);
    }

    // Private helper method that handles the recursive logic.
    _factorialHelper(n) {
        // Base case: If n is 0 or 1, return 1.
        if (n === 0 || n === 1) {
            return 1;
        }

        // Recursive case: Multiply n by the factorial of n - 1.
        return n * this._factorialHelper(n - 1);
    }
}

const calculator = new FactorialCalculator();
console.log(calculator.calculate(5)); // Output: 120
