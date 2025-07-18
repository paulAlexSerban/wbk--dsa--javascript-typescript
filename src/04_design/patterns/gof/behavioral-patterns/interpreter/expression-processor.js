/**
 * Here's the code example with step-by-step comments explaining the
 * Interpreter pattern implementation and test cases with console.log:
 */

// The ExpressionProcessor class is used to interpret arithmetic expressions
// containing numbers, variables, and basic operations (+ and -).
class ExpressionProcessor {
    constructor() {
        this.variables = {}; // Dictionary to store variable values
        this.nextOp = Object.freeze({
            // Enumeration to represent the next operation
            nothing: 0,
            plus: 1,
            minus: 2,
        });
    }

    // The calculate() method interprets and evaluates the input expression.
    calculate(expression) {
        let current = 0;
        let nextOp = this.nextOp.nothing;

        // Split the expression into parts based on the operations.
        let parts = expression.split(/(?<=[+-])/);

        // Iterate through the expression parts.
        for (let part of parts) {
            // Check for the presence of + or - in the part.
            let noop = part.split('+-');
            let first = noop[0];
            let value = 0,
                z = 0;

            // Check if the part is a number or a variable.
            z = parseInt(first);
            if (!isNaN(z)) {
                value = z;
            } else if (first.length === 1 && this.variables[first[0]] !== undefined) {
                value = this.variables[first[0]];
            } else return 0;

            // Update the current value based on the next operation.
            switch (nextOp) {
                case this.nextOp.nothing:
                    current = value;
                    break;
                case this.nextOp.plus:
                    current += value;
                    break;
                case this.nextOp.minus:
                    current -= value;
                    break;
            }

            // Determine the next operation.
            if (part.endsWith('+')) nextOp = this.nextOp.plus;
            else if (part.endsWith('-')) nextOp = this.nextOp.minus;
        }
        return current;
    }
}

// Test the ExpressionProcessor with four test cases.
function runTests() {
    let ep = new ExpressionProcessor();
    ep.variables['x'] = 5;

    console.log("Test 1: Calculate '1'");
    console.log('Result:', ep.calculate('1')); // Output: 1

    console.log("Test 2: Calculate '1+2'");
    console.log('Result:', ep.calculate('1+2')); // Output: 3

    console.log("Test 3: Calculate '1+x'");
    console.log('Result:', ep.calculate('1+x')); // Output: 6

    console.log("Test 4: Calculate '1+xy'");
    console.log('Result:', ep.calculate('1+xy')); // Output: 0
}

// Run the tests.
runTests();

/**
 * This code snippet demonstrates an Interpreter pattern implementation
 * using the ExpressionProcessor class to interpret arithmetic expressions
 * containing numbers, variables, and basic operations (+ and -). The test
 * cases include evaluating expressions with numbers, variables, and invalid
 * variables. The results are logged to the console.
 */
