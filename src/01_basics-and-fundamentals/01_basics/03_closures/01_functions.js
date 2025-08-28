(() => {
    /**
     * TASK
     * (1) Implement a function named factorial that has one parameter: an integer
     * (2) The function must return the value of `n!` (i.e.,  factorial).
     * @param {Number} n
     * @returns the value of n factorial
     */
    function factorial(n) {
        return n > 1 ? n * factorial(n - 1) : 1;
    }

    console.log(`The factorial is ${factorial(3)}`);
})();

(() => {
    // Functions:
    // - are the fundamental building blocks in JS
    // - perform a task and return a value
    // - functions can have inputs, and these inputs can change how the functions behave;
    //   these inputs are named parameters
    // - functions can have multiple parameters separated by commas

    // Performing a task: function to greet a person with their first and last names.
    function greet(name, lastName) {
        // If lastName is not provided, set it to an empty string to avoid displaying "undefined"
        lastName = lastName || '';

        console.log(`Hello ${name} ${lastName}`);
    }

    // Call the greet function with only the first name as an argument.
    greet('John');
})();

(() => {
    // Note:
    // - name is a parameter of the function
    // - "John" is the argument passed to the function
    // - the ARGUMENT is the actual value of the supplied parameter

    // Function for calculating and returning a value: square a number.
    function square(number) {
        return number * number;
    }

    // Call the square function with the number 3 as an argument and log the result.
    console.log(square(3)); // Output: 9
})();

(() => {
    // Improved version: add a default value for the lastName parameter in the greet function.
    function greetWithDefault(name, lastName = '') {
        console.log(`Hello ${name} ${lastName}`);
    }

    // Call the greetWithDefault function with only the first name as an argument.
    greetWithDefault('John');
})();
