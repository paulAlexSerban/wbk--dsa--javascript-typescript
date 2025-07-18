/*************
 * Uderstand the Immediately Invoked Function Expression (IIFE)
 * A common pattern in JavaScript is to execute a function as soon as it is declared:
 */

(function () {
    console.log('Chirp, chirp!');
})();

(() => {
    console.log('Ham! Ham!');
})();

/**
 * This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.
 *
 * Note that the function has no name and is not stored in a variable.
 * The two parentheses () at the end of the function expression cause it to be immediately executed or invoked.
 * This pattern is known as an immediately invoked function expression or IIFE.
 */

/**
 * Use an IIFE to Create a Module
 * An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module.
 */

let motionModule = (function () {
    return {
        glideMixin: function (obj) {
            obj.glide = function () {
                console.log('Gliding on the water');
            };
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log('Flying, wooosh!');
            };
        },
    };
})();

/************
 * Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule.
 * This returned object contains all of the mixin behaviors as properties of the object.
 * The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code.
 */

let funModule = (() => {
    return {
        isCuteMixin: (obj) => {
            obj.isCute = () => {
                true;
            };
        },
        singMixin: (obj) => {
            obj.sing = () => {
                console.log('Singing to an awesome tune');
            };
        },
    };
})();
