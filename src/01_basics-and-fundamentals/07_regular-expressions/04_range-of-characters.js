/**
 * Inside a character set, you can define a range of characters to match using a hyphen character: `-`.
 * For example, to match lowercase letters a through e you would use `[a-e]`
 */

function matchRange(string, regex) {
    return string.match(regex);
}

let quoteSample = 'The quick brown fox jumps over the lazy dog.';
let alphabetRegex = /[a-z]/gi;

console.log(matchRange(quoteSample, alphabetRegex));

/**
 * Match Numbers and Letters of the Alphabet
 * Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
 * For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
 */

let jennyStr = 'Jenny8675309';
let jennyRegex = /[a-z0-9]/gi;
console.log(matchRange(jennyStr, jennyRegex));

quoteSample = 'Blueberry 3.141592653s are delicious.';
myRegex = /[h-s2-6]/gi;
console.log(matchRange(quoteSample, myRegex));

/**
 * Negated character sets
 * To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.
 */

quoteSample = '3 blind mice.';
myRegex = /[^aeiou^0-9]/gi; // Change this line
console.log(matchRange(quoteSample, myRegex));
