/**
 * Capture groups with patterns
 *
 * Capture groups are constructed by enclosing the regex pattern to be captured in parentheses.
 * In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.
 * The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.
 */

/**
 * Example
 */

function captureGroup(string) {
    let repeatRegex = /(\w+) \1 \1/;
    return {
        'has-groups': repeatRegex.test(string),
        'repeated-group': string.match(repeatRegex),
    };
}

let repeatStr = 'row row row your boat';

console.log(captureGroup(repeatStr));

/**
 * Example
 * match a string that consists of only the same number repeated exactly three times separated by single spaces.
 */

let repeatNum = '42 42 42';
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
