/**
 * Destructuring Assignment to Pass an Object as a Function's Parameters
 * In some cases, you can destructure the object in a function argument itself.
 */

// Instead of doing this:
// const profileUpdate = (profileData) => {
//   const { name, age, nationality, location } = profileData;
// }

// You can do this
const profileUpdate = ({ name, age, nationality, location }) => {};

/**
 * When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.
 */

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2.0;

const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya',
};

// Rather than destructuring INSIDE the function body
// function print(person) {
//   const {
//     first,
//     last,
//     title
//   } = person;
//   console.log(`${first} ${last}, ${title}`)
// }

// We can unpack the values we want right in the parameter list:
function print({ first, last, title }) {
    console.log(`${first} ${last}, ${title}`);
}

const response = ['HTTP/1.1', '200 OK', 'application/json'];

// Also works with array parameters:
function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`);
}
