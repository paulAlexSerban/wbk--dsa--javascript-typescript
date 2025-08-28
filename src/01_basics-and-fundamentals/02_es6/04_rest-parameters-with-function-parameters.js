function sumOld() {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    return total;
}

/**
 * Use the Rest Parameter with Function Parameters
 * In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters.
 * With the rest parameter, you can create functions that take a variable number of arguments.
 * These arguments are stored in an array that can be accessed later from inside the function.
 */

function howMany(...args) {
    return 'You have passed ' + args.length + ' arguments.';
}
console.log(howMany(0, 1, 2));
console.log(howMany('string', null, [1, 2, 3], {}));

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3)); // 6

// The Argument Object
//The arguments object is available in every function you write (except arrow functions)
//It contains all the arguments passed in.
function sum2() {
    //It is NOT an array, we have to turn it into one if we want to use array methods
    const argsArr = [...arguments];
    return argsArr.reduce((total, currVal) => {
        return total + currVal;
    });
}

// No arguments object inside of arrow functions :(
const multiply = () => {
    console.log(arguments);
};

// OLD WAY!
// function sum() {
//   const argsArr = [...arguments]
//   return argsArr.reduce((total, currVal) => {
//     return total + currVal
//   })
// }

// New way using rest:
function sum3(...nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal;
    });
}

//We can have named params and then collect the rest into an array:
function fullName(first, last, ...titles) {
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);
}

// We can use rest parameters in arrow functions!
const multiply2 = (...nums) => nums.reduce((total, currVal) => total * currVal);

// sum of arguments
function sumArgs(...items) {
    if (items.length === 1 && Array.isArray(items[0])) {
        items = [...items[0]];
    }

    return items.reduce((a, b) => a + b);
}

console.log(sumArgs([1, 2, 3, 4]));

const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a); // 1
console.log(others); // [ 3, 4, 5, 6 ]
