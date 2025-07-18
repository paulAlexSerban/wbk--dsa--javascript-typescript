/**
 * Refactor global variables out of  functions
 *
 * Some distinct principles for functional programming:
 *
 * Don't alter a variable or object - create new variables and objects and return them if need be from a function.
 * Hint: using something like const `newArr = arrVar`, where `arrVar` is an array will simply create a reference to the existing variable and not a copy.
 * So changing a value in newArr would change the value in `arrVar`.
 *
 * Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.
 * Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.
 */

// the global variable
var bookList = [
    'The Hound of the Baskervilles',
    'On The Electrodynamics of Moving Bodies',
    'Philosophiæ Naturalis Principia Mathematica',
    'Disquisitiones Arithmeticae',
];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(arr, bookName) {
    let newArr = [...arr]; // Copy the bookList array to a new array.
    newArr.push(bookName); // Add bookName parameter to the end of the new array.
    return newArr; // Return the new array.
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

function remove(arr, bookName) {
    let newArr = [...arr]; // Copy the bookList array to a new array.
    if (newArr.indexOf(bookName) >= 0) {
        // Check whether the bookName parameter is in new array.
        newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
        return newArr; // Return the new array.
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
