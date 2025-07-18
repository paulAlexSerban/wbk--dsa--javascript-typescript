/**
 * Find the Longest Word in a String
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 * The first line splits the string into individual words. Then we check if words only has 1 element left.
 * If so, then that is the longest element and we return it.
 * Otherwise, we remove the first element and recursively call the function findLongestWord, returning the maximum between the length of the first result and the recursive call .
 */
function findLongestWordLength4(str) {
    const words = str.split(' '); // split the string into individual words
    if (words.length == 1) {
        // words only has 1 element left that is the longest element
        return words[0].length;
    }

    return Math.max(
        // if words has multiple elements, remove the first element and recursively call the function
        words[0].length,
        findLongestWordLength(words.slice(1).join(' '))
    );
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
