/**
 * Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text.
 * Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.
 *
 * Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
 *
 * If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.
 *
 * The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not
 */

function testRegex(string, regex) {
    return regex.test(string);
}

const string = 'Hello, World!';
const regexPattern = /Hello/;

const helloResult = testRegex(string, regexPattern);
console.log(helloResult);

const waldoIsString = 'Somewhere Waldo is hiding in this text.';
const waldoRegex = /Waldo/;

const waldoResult = testRegex(waldoIsString, waldoRegex);
console.log(waldoResult);

/**
 * search for multiple patterns using the alternation or OR operator: `|`
 * for the regex to be case insensitive add the `i` flag
 */

let petString = 'James has a pet cat.';
let petRegex = /dog|Cat|bird|fish/i;
console.log(petRegex.test(petString));

/**
 *
 */
