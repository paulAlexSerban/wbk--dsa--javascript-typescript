/**
 * Using character classes, you were able to search for all letters of the alphabet with [a-z].
 * This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.
 *
 * The closest character class in JavaScript to match the alphabet is `\w`.
 * This shortcut is equal to `[A-Za-z0-9_]`.
 * This character class matches upper and lowercase letters plus numbers.
 * NOTE: this character class also includes the underscore character (_).
 */

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = '42';
let varNames = 'important_var';
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

/**
 * Use the shorthand character class `\w` to count the number of alphanumeric characters in various quotes and strings.
 */

let quoteSample = 'The five boxing wizards jump quickly.';
let alphabetRegexV2 = /\w/g; // Change this line
console.log(quoteSample.match(alphabetRegexV2).length);

/**
 * Sometimes you might want to search for is the opposite of alphanumerics.
 * You can search for the opposite of the \w with \W.
 * NOTE: the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
 */

/**
 * The first match call would return the value ["%"] and the second would return ["!"].
 */

let shortHand = /\W/;
let numbers = '42%';
let sentence = 'Coding!';
numbers.match(shortHand);
sentence.match(shortHand);

/**
 * Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
 */

let quoteSample = 'The five boxing wizards jump quickly.';
let nonAlphabetRegex = /\W/g; // Change this line
console.log(quoteSample.match(nonAlphabetRegex).length);

/**
 * Another common pattern is looking for just digits or numbers
 * The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
 */

/**
 * Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
 */

let movieName = '2001: A Space Odyssey';
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

/**
 * You can also search for non-digits using a similar shortcut that uses an uppercase D instead.
 * The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
 */

/**
 * Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
 */
let movieName = '2001: A Space Odyssey';
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;
