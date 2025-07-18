/**
 * When the regular expression exec() method finds a match, it returns an array
 * containing first the entire matched portion of the string and then the
 * portions of the string that matched each parenthesized group in the regular
 * expression. Destructuring assignment allows you to unpack the parts out of
 * this array easily, ignoring the full match if it is not needed.
 */

function parseProtocol(url) {
    const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
        return false;
    }
    console.log(parsedURL);
    // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

    const [, protocol, fullhost, fullpath] = parsedURL;
    return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript'));
// "https"
