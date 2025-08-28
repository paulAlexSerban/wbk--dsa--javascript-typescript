/**
 * Palindrome Index
 *
 * Given a string of lowercase letters in the range ascii[a-z], determine a character that can be removed to make the string a palindrome.
 *
 * There may be more than one solution, but any will do. If the word is already a palindrome or there is no solution, return -1. Otherwise, return the index of a character to remove.
 *
 * Example
 * s = 'bcbc'
 *
 * Either remove 'b' at index 0 or 'c' at index 3.
 *
 * Function Description
 *
 * Complete the palindromeIndex function in the editor below.
 *
 * palindromeIndex has the following parameter(s):
 * - string s: a string to analyze
 *
 * Returns
 * - int: the index of the character to remove or -1
 *
 * Input Format
 *
 * The first line contains an integer t, the number of queries.
 *
 * Each of the next t lines contains a query string s.
 *
 * Constraints
 * - 1 <= t <= 20
 * - 1 <= |s| <= 10^5 + 5
 *
 * All characters are in the range ascii[a-z].
 *
 */

(() => {
    const palindromeIndex = (s) => {
        // If the string is a palindrome, return -1
        if (isPalindrome(s)) {
            return -1;
        }

        // Loop through the string
        for (let i = 0; i < s.length; i++) {
            // Remove the current character from the string
            const newString = s.slice(0, i) + s.slice(i + 1);

            // If the new string is a palindrome, return the index
            if (isPalindrome(newString)) {
                return i;
            }
        }

        // Return -1 if no palindrome is found
        return -1;
    };

    // Check if a string is a palindrome
    const isPalindrome = (s) => {
        // Loop through the string
        for (let i = 0; i < s.length / 2; i++) {
            // If the first and last characters are not equal, return false
            if (s[i] !== s[s.length - 1 - i]) {
                return false;
            }
        }

        // Return true if the string is a palindrome
        return true;
    };

    // Example usage

    // Test case 1
    let s = 'bcbc';
    console.log(`For string "${s}", index to remove: ${palindromeIndex(s)}`);

    // Test case 2
    s = 'abca';
    console.log(`For string "${s}", index to remove: ${palindromeIndex(s)}`);

    // Test case 3
    s = 'abcba';
    console.log(`For string "${s}", index to remove: ${palindromeIndex(s)}`);
})();

/**
 * Algorithm and Concepts
 *
 * We can solve this problem by using the Two Pointers technique. The idea is to start from both ends of the string and work our way toward the center, comparing the characters at the two pointers. If we find characters that don't match, we have two options: either remove the character at the left pointer or remove the character at the right pointer. We then need to check which option actually creates a palindrome.
 */

(() => {
    const isPalindrome = (s, start, end) => {
        while (start <= end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    };

    const palindromeIndex = (s) => {
        let start = 0;
        let end = s.length - 1;

        while (start <= end) {
            if (s[start] !== s[end]) {
                if (isPalindrome(s, start + 1, end)) {
                    return start;
                }
                if (isPalindrome(s, start, end - 1)) {
                    return end;
                }
                return -1; // Neither of the two options work, so there's no solution
            }
            start++;
            end--;
        }

        return -1; // Already a palindrome
    };

    // Example usage
    const testCases = ['bcbc', 'abca', 'abcba', 'racecar'];
    for (const testCase of testCases) {
        console.log(`For string "${testCase}", index to remove: ${palindromeIndex(testCase)}`);
    }
})();

/**
 * Explanation
 *
 * The isPalindrome function checks whether a substring is a palindrome.
 * The palindromeIndex function iterates through the string from both ends:
 * If it finds a pair of characters that are different, it tries to remove each of them and checks if that results in a palindrome.
 * If it does, it returns the index of the character to remove.
 *
 * Time Complexity
 * The time complexity is O(n) because we're doing a single pass through the string, and the isPalindrome check takes O(n) time in the worst case.
 *
 * Space Complexity
 * The space complexity is O(1) as we only use a constant amount of additional space.
 */
