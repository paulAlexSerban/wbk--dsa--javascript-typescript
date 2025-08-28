const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];
// REMEMBER THAT SORT() MUTATES THE ORIGINAL ARRAY!
// I'm using slice() to create a new copy, otherwise we would be sorting the same array 3 times:

// Default string sort :(
const badSort = prices.slice().sort();
console.log(badSort);

// Ascending Sort:
const ascSort = prices.slice().sort((a, b) => a - b);
console.log(ascSort);

// Descending Sort:
const descSort = prices.slice().sort((a, b) => b - a);
console.log(descSort);
