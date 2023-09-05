/**
 * unknown
 */

/**
 * In this example, variable is of type unknown. We can assign any value to variable
 * because unknown is a superset of all types in TypeScript.
 *
 * However, unlike any, we can't use variable in any arbitrary way without checking its type first.
 * This is the main use case for unknown - when we want to ensure that we check
 */

(() => {
    let variable: unknown;

    variable = 'Hello World'; // It's OK
    variable = 42; // It's OK
    variable = [1, 2, 3]; // It's OK

    console.log(variable); // It's OK
})();

/**
 * variable is still of type unknown, but we cannot use it as a string and call toUpperCase()
 * on it without checking that it's a string first. This helps catch bugs where we might be
 * using a variable in a way that its value doesn't support.
 */

(() => {
    let unknownVariable: unknown;
    unknownVariable = 'Hello World';
    if (typeof unknownVariable === 'string') {
        // TypeScript knows that unknownVariable is a string in this block
        console.log(unknownVariable.toUpperCase()); // It's OK
    }

    // console.log(variable.toUpperCase()); // This would be an error!
})();
