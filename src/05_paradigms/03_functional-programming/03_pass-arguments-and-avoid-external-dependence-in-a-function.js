/**
 * Pass Arguments to Avoid External Dependence in a Function
 *
 * We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.
 * Another principle of functional programming is to always declare your dependencies explicitly.
 * This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
 *
 * There are several good consequences from this principle.
 * The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.
 *
 * This can give you more confidence when you alter, remove, or add new code.
 * You would know what you can or cannot change and you can see where the potential traps are.
 *
 * Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.
 */

// the global variable
var fixedValue = 4;

function incrementer(value) {
    return value + 1;
}

var differentValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4

/**
 * Code Explanation
 * This code will provide the same result as the last challenge, only this time we will pass the `fixedValue` into the function as a parameter.
 */
