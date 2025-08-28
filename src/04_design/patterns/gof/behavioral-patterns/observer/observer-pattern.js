/**
 * The code you provided is an example of the Observer design pattern in JavaScript.
 * The Observer pattern is a design pattern where an object, called the subject,
 * maintains a list of its dependents, called observers, and notifies them
 * automatically of any state changes. In this code, we have a Subject constructor
 * function that has an observers array property. The Subject also has three methods:
 *
 * - `subscribe(fn)` adds an observer function to the observers array.
 * - `unsubscribe(fnToRemove)` removes an observer function from the observers array.
 * - `fire()` calls each observer function in the observers array.
 *
 * We also have three observer functions, `observer1()`, `observer2()`, and
 * `observer3()`, that simply log a message to the console.
 *
 * In the last few lines of the code, we create a new Subject instance, `subject`,
 * and subscribe the three observer functions to it using the `subscribe()` method.
 * We then call the `fire()` method on the `subject` instance, which calls each
 * observer function and logs a message to the console.
 *
 * To rewrite the test cases with console.log, we can modify the `subscribe()`
 * and `unsubscribe()` methods to log a message to the console when an observer
 * is added or removed. Here's the modified code:
 */

function Subject() {
    this.observers = []; // array of observer functions
}

Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
        console.log('Observer added:', fn.name);
    },
    unsubscribe: function (fnToRemove) {
        this.observers = this.observers.filter((fn) => {
            if (fn !== fnToRemove) {
                return fn;
            }
        });
        console.log('Observer removed:', fnToRemove.name);
    },
    fire: function () {
        this.observers.forEach((fn) => fn.call());
    },
};

const subject = new Subject();

function observer1() {
    console.log('observer 1 firing');
}

function observer2() {
    console.log('observer 2 firing');
}

function observer3() {
    console.log('observer 3 firing');
}

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

subject.fire();
/**
 * Now, when an observer is added or removed, a message will be logged to the console.
 * When we call `subject.fire()`, each observer function will be called and a message
 * will be logged to the console indicating that the observer is firing.
 */
