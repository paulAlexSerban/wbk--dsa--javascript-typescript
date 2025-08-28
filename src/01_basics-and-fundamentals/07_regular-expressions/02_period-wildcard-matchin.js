/**
 * you can save time using the wildcard character: `.` (dot)
 * The wildcard character `.` will match any one character.
 * The wildcard is also called dot and period.
 * You can use the wildcard character just like any other character in the regex.
 */

function wildcardTest(string, regex) {
    return regex.test(string);
}

function wildcardMatch(string, regex) {
    return string.match(regex);
}

let exampleStr = "Let's have fun with regular expressions! bun pun";
let unRegex = /.un/gi; // Change this line

console.log(wildcardTest(exampleStr, unRegex));
console.log(wildcardMatch(exampleStr, unRegex));
