/**
 * Every scope has a link to the parent scope.
 * When a variable is used, JavaScript looks down the scope chain until it either finds the requested variable or until it reaches the global scope, which is the end of the scope chain.
 */

let x0 = 0;
(function autorun1() {
    let x1 = 1;

    (function autorun2() {
        let x2 = 2;

        (function autorun3() {
            let x3 = 3;

            console.log(x0 + ' ' + x1 + ' ' + x2 + ' ' + x3); //0 1 2 3
        })();
    })();
})();

/**
 * The autorun3() inner function has access to the local x3 variable.
 * It has also access to the x1 and x2 variables from the outer functions and the x0 global variable.
 * If it cannot find the variable, it will return an error in strict mode.
 */
