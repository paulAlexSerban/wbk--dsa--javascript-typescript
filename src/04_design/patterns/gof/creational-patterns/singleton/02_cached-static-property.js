/**
 * Singleton with a cached static property FROM "JavaScript Patterns by Stoyan-Stefanov"
 */

function User(firstName, lastName) {
    // do we have an existing instance?
    if (typeof User.instance === 'object') {
        return User.instance;
    }

    // proceed as normal
    this.firstName = firstName;
    this.lastName = lastName;

    // cache
    User.instance = this;

    // implicit return
    // return this;
}

/**
 * The cached static property is publicly available which adds a little danger
 * (someone could say Universe.instance = foo) but this version is very
 * straightforward and doesn't require closures and funky prototype work.
 * If you're lazy this might be a good approach.
 */

const userOne = new User('John', 'Snow');
console.log(userOne); // => User { firstName: 'John', lastName: 'Snow' }

const userTwo = new User('Jon', 'Dow');
console.log(userTwo); // => User { firstName: 'John', lastName: 'Snow' }
