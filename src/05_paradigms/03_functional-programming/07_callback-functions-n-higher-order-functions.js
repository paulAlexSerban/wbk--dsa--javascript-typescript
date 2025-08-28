/**
 * Callback functions and Higher order functions
 */

const oneWord = (str) => {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = (str) => {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

const transformer = (str, fn) => {
    console.log(`Original string ${str}`);
    console.log(`Transformed string ${fn(str)}`);
    console.log('****************************************************************');

    // as functions are objects, functions have a name
    console.log(`Transformed by ${fn.name}`);
    return fn(str);
};
console.log('****************************************************************');
// transformer is the higher order function
// upperFirstWord is the callback function
console.log({ upperFirstWord: transformer('JavaScript is the best.', upperFirstWord) });
console.log('****************************************************************');
console.log({ oneWord: transformer('JavaScript is the best.', oneWord) });
