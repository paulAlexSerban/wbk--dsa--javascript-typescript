/**
 * Closures
 *
 * - we do not create closure manually as we create a new array or a new unction
 * - a closure just happens automatically in certain situations, we just need to recognize those situations
 */
const secureBooking = function () {
    let passengerCount = 0;

    // a closure makes a function remember all the variables that existed at the functions birthplace
    return function () {
        passengerCount++;
        console.log(passengerCount);
    };
};

const booker = secureBooking();
booker();
booker();
booker();

/**
 * as the inner function of secureBooking had access to
 * passengerCount at the moment of creation,
 * by calling the inner function we have access to manipulating
 * the variable, which normally is inaccessible
 * outside ot the secureBooking function itself
 *
 * - a function has access to the variable environment (VE) of the execution context in which it was created
 * - a closure is - a variable environment attached to a function,
 * exactly as it was at the time and place the function was created
 * - thanks to a closure, a function does not loose connection to variables that existed at the functions birthplace
 */

/**
 * - a closure is the closed-over variable environment of the execution context in which
 * a function was created, even after that execution context is gone
 * - a closure gives a function access to all the variables of its parent function, even
 * after that parent function has returned - the function keeps a reference to it's
 * outer scope, which preserves the scope chain throughout time
 * - a closure makes sure that a function does not loose connection to variables that existed at the functions birthplace
 * - a closure is like a backpack that a function carries around wherever it goes - this backpack has all the variables hat were present in the environment where the function was created
 */

// situation 2
let f;
const g = function () {
    const a = 23;
    // this creates the closure and gives variable `f` access to variable `a`
    f = function () {
        console.log(a + 23);
    };
};
g(); // assigns the inner function to f
f(); // calling f actually calls the inner function of g

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};
h(); // this reassigned f with the inner function of h
f(); // calling f now will call the inner function of h

// situation 3
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    // set a timer
    setTimeout(function () {
        console.log(`we are now boarding all ${n} passengers`);
        console.log(`there are 3 groups, each with ${perGroup} passengers`);
    }, 1000);

    console.log(`will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // this will not be used inside boardPassengers - this is because the closure has priority over the scope chain

boardPassengers(180, 3);

/**
 * Function factories with JS Closure
 *
 * A function factory is a function that returns another function. Here's an example of a
 * function factory in JavaScript that returns a function that calculates the power of a number:
 */

function powerFactory(n) {
    return function (x) {
        return Math.pow(x, n);
    };
}

const powerOfTwo = powerFactory(2);
const powerOfThree = powerFactory(3);

console.log(powerOfTwo(5)); // 25
console.log(powerOfThree(5)); // 125

/**
 * In this example, the powerFactory function takes a single argument n and returns a new
 * function that takes a single argument x and calculates x raised to the power of n. The
 * returned function is assigned to the variable powerOfTwo and powerOfThree respectively,
 * and can be used multiple times with different arguments.
 */

/**
 * Closure passed as argument to another function
 *
 * A closure is a function that has access to variables in its parent scope, even after the parent
 * function has finished executing. Here's an example of a closure being passed as an argument to another function in JavaScript:
 */

function outerFunction(x) {
    let y = 2;

    return function innerFunction() {
        return x + y;
    };
}

function callWithArgument(fn) {
    return fn();
}

const closure = outerFunction(5);
console.log(callWithArgument(closure)); // 7

/**
 * In this example, the outerFunction returns the innerFunction, which is a closure
 * that has access to the x and y variables from the parent scope. The returned closure
 * is assigned to the variable closure, and is then passed as an argument to the callWithArgument
 * function, which when called returns the value of the closure.
 *
 * In this way, closures can be passed as arguments to other functions, allowing them to
 * maintain their scope and access the variables they need to execute correctly.
 */

/**
 * Currying and partial application with JS closures
 *
 * Currying and partial application are both techniques for creating closures by pre-applying
 * some of the arguments to a function and returning a new function that takes the remaining
 * arguments. Here's an example of currying and partial application in JavaScript:
 */

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = (a) => (b) => (c) => multiply(a, b, c);
const partiallyAppliedMultiply = multiply.bind(null, 2);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(partiallyAppliedMultiply(3, 4)); // 24

/**
 * In this example, the multiply function takes three arguments, a, b, and c, and returns
 * their product. The curriedMultiply function is created by using the arrow function and
 * .bind() method, which returns a new function that takes one argument at a time, and each
 * time it's called it returns another function that takes the next argument.
 * The partiallyAppliedMultiply function is created by using .bind() method and passing it
 * a fixed value for the a argument, so when it's called it only takes two arguments.
 *
 * In this way, currying and partial application allow you to create closures that can be
 * called later with the remaining arguments, allowing for more flexible and reusable code.
 */
