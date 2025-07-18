/**
 * 1. turn s into an array of strings calling the `split()` methods on it - pass `.split()` an empty space as separator argument
 * 2. call the `map()` method to create a new array out of step 1's content - an arrow function
 * checks every element in step 1 and returns it's length
 * 3. pass step 2 as argument of the `Math.min()` to return the smallest of zero or more numbers,
 * but will not work with arrays, thus, add the spread operator (...) to step 2 so that it is "expanded" into numbers
 * 4. `.filter(Boolean)` to make sure trailing white spaces are not returned as strings and counted with length 0
 */

/**
 * @param {String} s
 * @returns
 */

const findShort = (s) => {
    return Math.min(
        ...s
            .split(' ')
            .map((s) => s.length)
            .filter(Boolean)
    );
};

// const findShort = (s) => {
//   const lengthArr = [];
//   s.split(" ").forEach((item) => lengthArr.push(item.length));
//   return Math.min(...lengthArr);
// };

console.log(findShort('lorem ipsum   test two short words te le min'));
