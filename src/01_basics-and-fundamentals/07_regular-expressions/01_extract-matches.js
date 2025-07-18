/**
 * You can extract the actual matches you found with the `.match()` method
 * To search or extract a pattern more than once, you can use the `g` flag
 */

function extractMatch(string, regex) {
    return string.match(regex);
}

// Example 1
const helloString = 'Hello, World!';
const helloRegExp = /Hello/gi;

console.log(extractMatch(helloString, helloRegExp));

// Example 2
const codingString = "Extract the word 'coding' from this string.";
const codingRegex = /coding/gi;
console.log(extractMatch(codingString, codingRegex));

// Example 3
let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /twinkle|twinkleStar/gi;

console.log(extractMatch(twinkleStar, starRegex));
