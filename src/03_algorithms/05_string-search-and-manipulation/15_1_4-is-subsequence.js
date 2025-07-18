/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by
 * deleting some (can be none) of the characters without disturbing the relative positions
 * of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * Example 1:
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 *
 * Example 2:
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 *
 * Constraints:
 * 0 <= s.length <= 100
 * 0 <= t.length <= 104
 * s and t consist only of lowercase English letters.
 *
 * Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you
 * want to check one by one to see if t has its subsequence. In this scenario, how would
 * you change your code?
 */

/**
 * Here's a JavaScript function that checks if s is a subsequence of t. The function uses
 * two pointers to iterate through both strings, s and t. It returns true if s is a subsequence
 * of t, and false otherwise.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let sIndex = 0;
    let tIndex = 0;

    while (sIndex < s.length && tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++;
        }
        tIndex++;
    }

    return sIndex === s.length;
};

console.log(isSubsequence('abc', 'ahbgdc')); // Output: true
console.log(isSubsequence('axc', 'ahbgdc')); // Output: false

/**
 * For the follow-up question, if there are lots of incoming s strings and we want to check
 * them one by one to see if t has their subsequence, we can preprocess the t string by creating a
 * map to store the positions of each character in t. This way, we can use binary search to find
 * the next valid position for each character in s and speed up the process.
 */
