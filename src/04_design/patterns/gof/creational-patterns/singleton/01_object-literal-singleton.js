const user = {
    firstName: 'John',
    lastName: 'Doe',
    sayName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};
/**
 * - Once you create an object literal in JavaScript you've reserved a
 * little piece of memory and no other object will ever be just like that one.
 * - ever notice how you can use jQuery anywhere in your app after you've
 * included it on the page...? Boom! Singleton!
 */
