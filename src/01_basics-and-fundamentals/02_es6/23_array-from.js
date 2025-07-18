// strings
let str = 'hello';
let strArr = Array.from(str);
console.log(strArr);

// collections
// const collectionArr = Array.from(document.querySelector(".element")); //  returns an array of node elements and you can use array methods on it - now you can use slice, map, ...

function g(a, b) {
    console.log(arguments);
    console.log(Array.from(arguments)); // [ 1, 2 ] - array of arguments that can be used later in the function block
}

g(1, 2);

// optional map function
const string2 = 'strawberry';
const mappedArrString = Array.from(string2, (x) => `${x}-mapped`);
console.log(mappedArrString);

// create an array from an object with a length property
const obj = { length: 3 };
console.log(Array.from(obj)); // [ undefined, undefined, undefined ]
console.log(Array.from(obj, (value) => 1)); // [ 1, 1, 1 ]
console.log(Array.from(obj, (value, index) => index * 2)); // [ 0, 2, 4 ]
