/**
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character, but a character may map to itself.
 *
 * Example 1:
 * Input: s = "egg", t = "add"
 * Output: true
 *
 * Example 2:
 * Input: s = "foo", t = "bar"
 * Output: false
 *
 * Example 3:
 * Input: s = "paper", t = "title"
 * Output: true
 *
 * Constraints:
 * 1 <= s.length <= 5 * 104
 * t.length == s.length
 * s and t consist of any valid ascii character.
 *
 */

function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sToT = {};
    const tToS = {};

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        // Check if the current mapping is consistent with previous mappings
        if (sToT[sChar] === undefined && tToS[tChar] === undefined) {
            sToT[sChar] = tChar;
            tToS[tChar] = sChar;
        } else if (sToT[sChar] !== tChar || tToS[tChar] !== sChar) {
            return false;
        }
    }

    return true;
}

// Test cases
console.log(isIsomorphic('egg', 'add')); // Output: true
console.log(isIsomorphic('foo', 'bar')); // Output: false
console.log(isIsomorphic('paper', 'title')); // Output: true

/**
 * MERN Project Ideas
 * Anagram Puzzle Game:
 * Create a MERN application where users can solve anagram puzzles.
 * The isomorphic function can be integrated to check if two strings provided
 * by the user are isomorphic or not, unlocking new levels or challenges
 * based on the results.
 *
 * Language Learning Platform:
 * Develop a platform where users can learn new languages by practicing
 * vocabulary and grammar. The isomorphic function can be used as part
 * of a quiz system to test if users can identify isomorphic words in
 * different languages.
 *
 * Encryption Tool: Build a MERN application that allows users to
 * encrypt and decrypt messages using custom substitution ciphers.
 * The isomorphic function can be utilized to check if two messages have
 * the same encryption structure, adding an extra layer of analysis for
 * users interested in cryptography.
 *
 * Text Analysis Dashboard:
 * Create a MERN dashboard for analyzing and visualizing textual data,
 * such as sentiment analysis, keyword extraction, and more. The isomorphic
 * function can be integrated as a feature to help users identify isomorphic
 * patterns in the text, providing insights into text structure and content.
 *
 * Code Plagiarism Checker: Develop a MERN application that allows users
 * to check for plagiarism in source code. The isomorphic function can be
 * employed to identify similarities between different code snippets by
 * checking if the variable and function names are isomorphic. This can
 * help users detect potential cases of code plagiarism or reuse.
 *
 * In each of these MERN project ideas, the isomorphic function can be
 * integrated as a utility function or component, providing a valuable
 * feature for users and enhancing the overall functionality of the
 * application.
 */
