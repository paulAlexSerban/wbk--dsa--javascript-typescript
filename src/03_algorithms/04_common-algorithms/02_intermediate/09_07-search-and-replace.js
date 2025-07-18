/**
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 *
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 *
 * Note: Preserve the case of the first character in the original word when you are replacing it.
 * For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
 */

function myReplace(str, before, after) {
    const regex = new RegExp(before, 'i');
    const matchedWord = str.match(regex)[0];
    const replacedWord =
        matchedWord[0] === matchedWord[0].toUpperCase()
            ? after.charAt(0).toUpperCase() + after.slice(1)
            : after.toLowerCase();

    return str.replace(regex, replacedWord);
}

console.log(myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped'));
console.log(myReplace('I think we should look up there', 'up', 'Down'));
/**
 * This function preserves the case of the first character in the original word when replacing it, as you
 * mentioned in the example. In this case, it will output: "A quick brown fox leaped over the lazy dog".
 */
