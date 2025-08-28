/**
 * Objects can have a special type of property, called a method.
 * Methods are properties that are functions. This adds different behavior to an object.
 */

let duck = {
    name: 'Aflac',
    numLegs: 2,
    sayName: function () {
        return 'The name of this duck is ' + duck.name + '.';
    },
};
duck.sayName();
// Adding methods to an object!
const math = {
    numbers: [1, 2, 3, 4, 5],
    add: function (x, y) {
        return x + y;
    },
    multiply: function (x, y) {
        return x * y;
    },
};

// To execute multiply:
math.multiply(5, 9); //45

let dog = {
    name: 'Spot',
    numLegs: 4,
    sayLegs: function () {
        return 'This dog has ' + dog.numLegs + ' legs.';
    },
};

dog.sayLegs();

const auth = {
    username: 'TommyBot',
    login() {
        console.log('LOGGED YOU IN!');
    },
    logout() {
        console.log('GOODBYE');
    },
};
