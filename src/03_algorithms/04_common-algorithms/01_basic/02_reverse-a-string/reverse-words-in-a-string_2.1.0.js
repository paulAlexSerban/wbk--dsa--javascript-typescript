/**
 * The function accepts a string parameter, and reverses each word in the string - all spaces in the string should be retained
 * @param {String} str
 * @returns
 */

function reverseWords(str) {
    return str
        .split(' ')
        .map(function (word) {
            return word.split('').reverse().join('');
        })
        .join(' ');
}

console.log(reverseWords('The freaky fox jumps over the lazy fox'));
