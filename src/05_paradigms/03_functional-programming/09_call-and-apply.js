const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Jonas Schmit');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;
// does not work
// book(23, "Sarah Window")

// call()
// this works
book.call(eurowings, 23, 'Sarah Window');
console.log(eurowings);

/**
 * Call is a function that helps you change the context of the invoking function.
 * In layperson's terms, it helps you replace the value of this inside
 * a function with whatever value you want.
 */

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss sir lines',
    iataCode: 'EW',
    bookings: [],
};
book.call(swiss, 582, 'Mariah Carrery');

// apply()
/**
 * Apply is very similar to the call function.
 * The only difference is that in apply you can pass an array as an argument list.
 */
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// bind method
book.call(swiss, ...flightData);
console.log(swiss);

/**
 * Read more:
 * https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/
 */

/**
 * bind()
 * Bind is a function that helps you create another function that
 * you can execute later with the new context of this that is provided.
 * - allows us to manually set the `this` keyword to any function call
 * - different from the call() is that bind() does not immediately call the function
 * - bind() sets the this keyword to the any function call
 *
 * Read more:
 * https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/
 */

const bookEW = book.bind(eurowings); // creates a new function that will call the book function on Eurowings
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');
console.log(eurowings);

/**
 * in the bind() methods we call also pass multiple arguments, and these will be set in stone
 */

const bookEW23 = book.bind(eurowings, 23); // creates a new function that will call the book function on Eurowings with the first parameter passed as 23
bookEW23('LeBron James'); // eg: we do not need to set the flight number
console.log(eurowings);

/**
 * bind() is very useful when we use object with event listeners
 */
console.log('********************************');
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

// Example event listener
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa)); // this works only in browser, not in NodeJS

// partial application
const addTax = (rate, value) => {
    return value + value * rate;
};

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // this sets the rate to 0.23
// it would be the same as if calling addTax(0.23, 100)
console.log(addVAT(100));

// you can achieve the same with default parameters, but using bind you create a brand new more general function

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(1000));
