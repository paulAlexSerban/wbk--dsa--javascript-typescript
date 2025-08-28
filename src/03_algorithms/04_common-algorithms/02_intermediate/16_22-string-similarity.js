/**
 * String Similarity
 * For two strings A and B, we define the similarity of the strings to be the length of the longest prefix common to both strings. For example, the similarity of strings "abc" and "abd" is 2, while the similarity of strings "aaa" and "aaab" is 3.
 *
 * Calculate the sum of similarities of a string S with each of it's suffixes.
 *
 * Input:
 * The first line contains the number of test cases T. Each of the next T lines contains a string each.
 * Each of the next t lines contains a string to process S.
 *
 * Constraints:
 * 1 <= T <= 10
 * The length of each string is at most 100000 and contains only lower case characters.
 * S contains only lower case characters ( S is composed of characters in the range ascii[a-z] ).
 *
 * Output Format:
 * Output T lines containing the answer for the corresponding test case.
 *
 * Sample Input:
 * 2
 * ababaa
 * aa
 *
 * Sample Output:
 * 11
 * 3
 *
 * Explanation:
 * For the first case, the suffixes of the string are "ababaa", "babaa", "abaa", "baa", "aa" and "a". The similarities of these strings with the string "ababaa" are 6,0,3,0,1, & 1 respectively. Thus, the answer is 6 + 0 + 3 + 0 + 1 + 1 = 11.
 * For the second case, the answer is 2 + 1 = 3.
 */

/**
 * FAST ENOUGH FOR HACKERRANK
 *
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */
(() => {
    const stringSimilarity = (s) => {
        const n = s.length;
        let zArray = new Array(n).fill(0);
        let result = n;

        let left = 0,
            right = 0;
        for (let i = 1; i < n; i++) {
            if (i <= right) {
                zArray[i] = Math.min(right - i + 1, zArray[i - left]);
            }

            while (i + zArray[i] < n && s[zArray[i]] === s[i + zArray[i]]) {
                zArray[i]++;
            }

            if (i + zArray[i] - 1 > right) {
                left = i;
                right = i + zArray[i] - 1;
            }

            result += zArray[i];
        }

        return result;
    };

    console.log(stringSimilarity('ababaa')); // 11
    console.log(stringSimilarity('aa')); // 3
    console.log(stringSimilarity('abc')); // 3
})();

/**
 * NOT FAST ENOUGH FOR HACKERRANK, it fails 5 tests
 * - Time complexity: O(n^2)
 * - Space complexity: O(1)
 */
(() => {
    /*
     * Complete the 'stringSimilarity' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts STRING s as parameter.
     */

    const stringSimilarity = (s) => {
        let result = 0;
        for (let i = 0; i < s.length; i++) {
            let j = 0;
            while (j < s.length && s[i + j] === s[j]) {
                j++;
            }
            result += j;
        }
        return result;
    };

    const s = 'ababaa';
    console.log(stringSimilarity(s)); // 11

    const s2 = 'aa';
    console.log(stringSimilarity(s2)); // 3

    const s3 = 'abc';
    console.log(stringSimilarity(s3)); // 3
})();
