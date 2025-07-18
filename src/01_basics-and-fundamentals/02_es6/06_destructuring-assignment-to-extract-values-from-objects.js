/**
 * Use Destructuring Assignment to Extract Values from Objects
 *
 * Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
 */

/**
 *  Consider the following ES5 code:
 */

const user = { name: 'John Doe', age: 34 };
// const name = user.name;
// const age = user.age;
/**
 * name would have a value of the string John Doe, and age would have the number 34.
 */

/**
 * Here's an equivalent assignment statement using the ES6 destructuring syntax:
 */
const { name, age } = user;

/**
 * Again, name would have a value of the string John Doe, and age would have the number 34.
 * Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.
 *  You can extract as many or few values from the object as you want.
 */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80,
};

const { today, tomorrow } = HIGH_TEMPERATURES;

/**
 * Destructuring allows you to assign a new variable name when extracting values.
 * You can do this by putting the new name after a colon when assigning the value.
 */

const { name: userName, age: userAge } = user;

/**
 * You may read it as "get the value of user.name and assign it to a new variable named userName" and so on.
 * The value of userName would be the string John Doe, and the value of userAge would be the number 34.
 */

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya',
};

// const {
//   first,
//   last,
//   time
// } = runner;

const { country: nation, title: honorific } = runner;

const { first, last, ...other } = runner;
