/**
 * Singleton with a closure FROM "JavaScript Patterns by Stoyan-Stefanov"
 */

function User(firstName, lastName) {
    // the cached instance
    var instance;

    // rewrite the constructor
    User = function () {
        return instance;
    };

    // carry over the prototype
    User.prototype = this;

    // the instance
    instance = new User();

    // reset the constructor pointer
    instance.constructor = User;

    // all the functionality
    instance.firstName = firstName;
    instance.lastName = lastName;

    return instance;
}

/**
 * This version takes a bit of fiddling to get the prototype to work as
 * expected because we rewrite the constructor. The upshot is that
 * instance is now private (being contained within the closure).
 */

const userOne = new User('John', 'Snow');
console.log(userOne);
/**
 * User {
 *  constructor: [Function: User],
 *  firstName: 'John',
 *  lastName: 'Snow'
 * }
 */
