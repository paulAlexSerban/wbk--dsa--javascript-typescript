/**
 * search for patterns in specific positions in strings
 * @param {*} string
 * @param {*} pattern
 * @returns boolean
 */

const isPositionPattern = (string, pattern) => {
    return pattern.test(string);
};

let firstRegex = /^Ricky/; // search for `Ricky` pattern at the beginning of the string
let firstString = 'Ricky is first and can be found.';
console.log(isPositionPattern(firstString, firstRegex));

let notFirst = "You can't find Ricky now.";
console.log(isPositionPattern(notFirst, firstRegex));

let rickyAndCal = 'Cal and Ricky both like racing.';
let calRegex = /^Cal/; // search for `Cal` at the beginning of the string

console.log(isPositionPattern(rickyAndCal, calRegex));

/**
 * search for patterns at the end of strings.
 * You can search the end of strings using the dollar sign character $ at the end of the regex.
 */

let theEnding = 'This is a never ending story';
let storyRegex = /story$/; // search for story at the end of the string
console.log(isPositionPattern(theEnding, storyRegex));

let noEnding = 'Sometimes a story will have to end';
console.log(isPositionPattern(noEnding, storyRegex));

let caboose = 'The last car on a train is the caboose';
let lastRegex = /caboose$/; // Change this line
console.log(isPositionPattern(caboose, lastRegex));
