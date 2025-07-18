/**
 * Singleton with a self executing function FROM "JavaScript Patterns by Stoyan-Stefanov"
 * READ MORE - https://www.patterns.dev/posts/classic-design-patterns/#singletonpatternjavascript
 */

var User;
(function () {
    var instance;

    User = function User() {
        if (instance) {
            return instance;
        }

        instance = this;

        // all the functionality
        this.firstName = 'John';
        this.lastName = 'Doe';

        return instance;
    };
})();

/**
 * By wrapping the instance variable in a self executing function we make
 * it private. This version doesn't require any prototype or constructor
 * reassignment but it may potentially confuse people who aren't
 * comfortable with self executing functions.
 */
