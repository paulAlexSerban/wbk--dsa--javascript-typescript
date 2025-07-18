const number = [1, 2, 3, 4, 5, 1];

const indexOf = number.indexOf(3); // returns the index of the element in the array - if it does not exist it will return -1;
console.log(indexOf);

const latsIndexOf = number.lastIndexOf(1); // returns the last index of 1 in the array
console.log(latsIndexOf);

const hasIndexOf = number.indexOf(1) !== -1; // check if element exists in the array - DIRTY

const includes = number.includes(1); // check if a given element exists in the array - CLEAN
