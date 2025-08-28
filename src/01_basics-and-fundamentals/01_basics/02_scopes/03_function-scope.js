/**
 * Function scope means that parameters and variables defined in a function are visible everywhere within the function, but are not visible outside of the function.
 */

/**
 * Consider the next function that auto-executes, called IIFE.
 *
 * IIFE stands for Immediately Invoked Function Expression and is a function that runs immediately after its definition.
 */

(function autoexecute() {
    let x = 1;
})();

console.log(x); // => Uncaught ReferenceError: x is not defined
