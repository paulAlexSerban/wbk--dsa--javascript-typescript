/**
 * Spread Operator to Evaluate Arrays In-Place
 * ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
 */

/**
 * The ES5 code below uses apply() to compute the maximum value in an array:
 */
// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr);

/**
 * We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array.
 * The spread operator makes this syntax much better to read and maintain.
 */

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus);

/**
 * ...arr returns an unpacked array. In other words, it spreads the array.
 * However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:
 */

function giveMeFour(a, b, c, d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

const colors = ['red', 'orange', 'yellow', 'green'];

// Without spread:
giveMeFour(colors);
// a ["red", "orange", "yellow", "green"]
// b undefined
// c undefined
// d undefined

// WITH SPREAD!!!
// Values are passed as separate args:
giveMeFour(...colors);
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'

//We can also spread strings!
giveMeFour(...'GOAT');
// a G
// b O
// c A
// d T

// Spread in array literals
const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidarian = ['fire coral', 'moon jelly'];

const mollusc = [...cephalopods, ...gastropods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

const inverts = [...cnidarian, ...gastropods, ...cephalopods];
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const caphCopy = [...cephalopods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

// Spread in Object Literals
const feline = {
    legs: 4,
    family: 'Felidae',
};

const canine = {
    family: 'Caninae',
    furry: true,
    legs: 4,
};

const dog = {
    ...canine,
    isPet: true,
    adorable: true,
};
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable',
};
//{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

const catDog = {
    ...canine,
    ...feline,
};
//{family: "Felidae", furry: true, legs: 4}

//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
const tripod = {
    ...canine,
    legs: 3,
};
//{family: "Caninae", furry: true, legs: 3}

const catDogClone = {
    ...catDog,
};

const random = [
    ...'hello',
    {
        ...catDog,
    },
];
