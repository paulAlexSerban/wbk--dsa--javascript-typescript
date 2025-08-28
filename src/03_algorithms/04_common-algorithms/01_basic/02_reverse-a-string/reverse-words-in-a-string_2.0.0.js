/**
 * The function accepts a string parameter, and reverses each word in the string - all spaces in the string should be retained
 * @param {String} str
 * @returns
 */

function reverseWords(str) {
    const reverse = (str) => {
        if (str.length <= 1) return str;
        return reverse(str.slice(1)) + str[0];
    };

    return str
        .split(' ')
        .map((word) => reverse(word))
        .join(' ');
}

console.log(reverseWords('The freaky fox jumps over the lazy fox'));
