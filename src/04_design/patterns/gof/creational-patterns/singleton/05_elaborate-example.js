var mySingleton = (function () {
    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        // Singleton

        // Private methods and variables
        function privateMethod() {
            console.log('I am private');
        }

        var privateVariable = 'Im also private';

        return {
            // Public methods and variables
            publicMethod: function () {
                console.log('The public can see me!');
            },

            publicProperty: 'I am also public',
        };
    }

    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function () {
            if (!instance) {
                instance = init();
            }

            return instance;
        },
    };
})();

// Usage:

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA === singleB); // true

/**
 * allows us to define both private and public methods of our
 * Singleton object at the cost of being a bit more complex than all the others.
 */

/**
 * From the book:
 *
 * - Whilst the Singleton has valid uses, often when we find ourselves
 * needing it in JavaScript it's a sign that we may need to re-evaluate our design.
 * - They're often an indication that modules in a system are either tightly coupled
 * or that logic is overly spread across multiple parts of a codebase.
 * - Singletons can be more difficult to test due to issues ranging from
 * hidden dependencies, the difficulty in creating multiple instances, difficulty in
 * stubbing dependencies and so on.
 */
