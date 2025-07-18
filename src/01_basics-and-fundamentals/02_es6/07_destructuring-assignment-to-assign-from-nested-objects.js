/**
 * Destructuring Assignment to Assign Variables from Nested Objects
 *
 * You can use the same principles from the previous two lessons to destructure values from nested objects.
 */

const user = {
    johnDoe: {
        age: 34,
        email: 'johnDoe@freeCodeCamp.com',
    },
};

/**
 * Here's how to extract the values of object properties and assign them to variables with the same name:
 */
const {
    johnDoe: { age, email },
} = user;

/**
 * And here's how you can assign an object properties' values to variables with different names:
 */
const {
    johnDoe: { age: userAge, email: userEmail },
} = user;

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 },
};

const {
    today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;

const results = [
    {
        first: 'Eliud',
        last: 'Kipchoge',
        country: 'Kenya',
    },
    {
        first: 'Feyisa',
        last: 'Lilesa',
        country: 'Ethiopia',
    },
    {
        first: 'Galen',
        last: 'Rupp',
        country: 'United States',
    },
];
// NESTED DESTRUCTURING
const [{ first: goldWinner }, { country }] = results;
goldWinner; //"Eliud"
country; //"Ethiopia"
