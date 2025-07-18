Helper method recursion is not a design pattern; rather, it is a technique used in programming to break down complex problems into smaller, more manageable sub-problems using recursion. In this technique, a public method acts as an entry point, and a private helper method handles the recursive logic. This separation of concerns makes the code more readable, maintainable, and easier to understand.

The idea behind helper method recursion is to have a public method that sets up the initial conditions and calls a private helper method, which takes additional parameters for carrying out the recursive logic. The helper method then continues the recursion, updating the parameters as necessary, until a base case is reached.

Here's an example of helper method recursion to calculate the factorial of a number:

```javascript
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
```

In this example, the public `calculate()` method sets up the initial conditions and validates the input before calling the private `_factorialHelper()` method, which carries out the recursive logic to compute the factorial.

## Example:

```javascript
const outer = (input) => {
    let outerScopeVariable = [];

    const helper = (helperInput) => {
        // modify the outerScopedVariable
        helper(helperInput--);
    };

    helper(input);

    return outerScopedVariable;
};
```
