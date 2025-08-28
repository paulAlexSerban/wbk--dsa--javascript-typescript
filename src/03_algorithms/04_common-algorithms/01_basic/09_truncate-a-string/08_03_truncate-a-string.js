/**
 * Truncate a String
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
 */

const patterns = {
    navigationLink: /[a-zA-Z0-9]/gim,
};

const reg = {};
const regFn = (rg) => (value) => value.search(rg) >= 0;
Object.keys(patterns).forEach((name) => {
    reg[name] = regFn(patterns[name]);
});
const regexp = reg;

/**
 * If string is longer than the 'cutLength' number of characters,
 * it gets truncated without breaking any word at the last space character
 * found in the string starting from 'maxAllowedLength' backwards.
 *
 * @param {string} string
 * @param {integer} cutLength
 * @param {integer} maxAllowedLength
 */

const truncateString = (string, cutLength, maxAllowedLength) => {
    if (string.length > cutLength) {
        const i = string.substring(0, maxAllowedLength).lastIndexOf(' ');
        const j = i - 1;
        if (!regexp.navigationLink(string.charAt(j))) {
            return `${string.substring(0, j)} ...`;
        }
        return `${string.substring(0, i)} ...`;
    }
    return `${string}`;
};
console.log(truncateString('very long string test liyasdkjhdsa hhhasd uyaksjh ikasjdkiaisdigj ihasduyuavsd', 20, 35));
