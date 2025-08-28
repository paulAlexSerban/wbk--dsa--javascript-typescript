/**
 * Lexical scope is the ability of the inner function to access the outer scope in which it is defined.
 */

(function autorun() {
    let x = 1;
    function log() {
        console.log(x);
    }

    function run(fn) {
        let x = 100;
        fn();
    }

    run(log); //1
})();

/**
 * The log function is a closure. It refers the x variable from its parent function autorun(), not the one from the run() function.
 * The closure function has access to the scope in which it was created, not the scope in which it was executed.
 * The local function scope of autorun() is the lexical scope of the log() function.
 */
