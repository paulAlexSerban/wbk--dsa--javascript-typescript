(() => {
    /**
     * Block scope is defined with curly braces. It is separated by { and }.
     *
     * Variables declared with let and const can have block scope. They can only be accessed in the block in which they are defined.
     */

    let x = 1;
    {
        let x = 2;
    }
    console.log(x); //1
})();

(() => {
    /**
     * In contrast, the var declaration has no block scope:
     */

    var x = 1;
    {
        var x = 2;
    }
    console.log(x); //2
})();

/**
 * A common problem with not having block scope is the use of an asynchronous operation like setTimeout() in a loop. The flowing loop code displays the number 5, five times.
 */

(function run() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function logValue() {
            console.log(i); //5
        }, 100);
    }
})();

/**
 * The for loop statement, with the let declaration, creates a new variable locale to the block scope, for each iteration. The next loop code shows 0 1 2 3 4 5.
 */

(function run() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function log() {
            console.log(i); //0 1 2 3 4
        }, 100);
    }
})();
