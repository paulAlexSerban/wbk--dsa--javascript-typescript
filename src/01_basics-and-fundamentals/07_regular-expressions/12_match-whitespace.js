const testString_1 = 'Whitespace. Whitespace everywhere!';
const testString_2 = 'Whitespace is important in separating words';
/**
 * Match whitespace between
 *
 * you can also match the whitespace or spaces between letters.
 * You can search for whitespace using `\s`, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.
 * You can think of it as similar to the character class [ \r\t\f\n\v].
 */

function getWhiteSpace(string) {
    return string.match(/\s/g);
}

console.log(getWhiteSpace(testString_1));
console.log(getWhiteSpace(testString_2));

/**
 * Match anything but whitespace
 *
 * You can also search for everything except whitespace.
 * Search for non-whitespace using `\S`, which is an uppercase s.
 * This pattern will not match whitespace, carriage return, tab, form feed, and new line characters.
 * You can think of it being similar to the character class [^ \r\t\f\n\v].
 */

function getNonWhiteSpace(string) {
    return string.match(/\S/g);
}

console.log(getNonWhiteSpace(testString_1));
console.log(getNonWhiteSpace(testString_2));
