/**
 * Strings with Template Literals
 *
 * Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
 */
const person = {
    name: 'Zodiac Hasbro',
    age: 56,
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

const result = {
    success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
    failure: ['no-var', 'var-on-top', 'linebreak'],
    skipped: ['no-extra-semi', 'no-dup-keys'],
};

function makeList(arr) {
    'use strict';
    const failureItems = arr.map((item) => `<li class="text-warning">${item}</li>`);
    return failureItems;
}
const failuresList = makeList(result.failure);

console.log(failuresList);
