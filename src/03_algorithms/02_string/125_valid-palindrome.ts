/**
  * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
  * removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric 
  * characters include letters and numbers.

  * Given a string s, return true if it is a palindrome, or false otherwise.
  * 
  * Example 1:
  * Input: s = "A man, a plan, a canal: Panama"
  * Output: true
  * Explanation: "amanaplanacanalpanama" is a palindrome.
  * 
  * Example 2:
  * Input: s = "race a car"
  * Output: false
  * Explanation: "raceacar" is not a palindrome.
  *
  * Example 3:
  * Input: s = " "
  * Output: true
  * Explanation: s is an empty string "" after removing non-alphanumeric characters.
  * Since an empty string reads the same forward and backward, it is a palindrome.
  * 
  * Constraints:
  * 1 <= s.length <= 2 * 105
  * s consists only of printable ASCII characters.
 */

export const isPalindrome = (s: string): boolean => {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};



function isAlphaNumeric(c: string) {
    const code = c.charCodeAt(0);
    return (
        (code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)
    ); // lower alpha (a-z)
  }

export function isPalindrome2(s: string) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters for the left pointer
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        // Skip non-alphanumeric characters for the right pointer
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        // Compare the characters in a case-insensitive manner
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        // Move both pointers towards the center
        left++;
        right--;
    }

    return true;
}


