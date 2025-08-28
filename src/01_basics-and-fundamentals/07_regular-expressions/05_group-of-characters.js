/**
 * match a character (or group of characters) that appears one or more times in a row
 * This means it occurs at least once, and may be repeated.
 * You can use the `+` character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
 */

const getCharacterGroup = () => {
    let difficultSpelling = 'Mississippi';
    let myRegex = /s+/g;
    return difficultSpelling.match(myRegex);
};

console.log(getCharacterGroup());

/**
 * match characters that occur zero or more times
 */

const getSpecificCharacterGroup = () => {
    let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';
    let chewieRegex = /Aa*/;
    return chewieQuote.match(chewieRegex);
};

console.log(getSpecificCharacterGroup());
