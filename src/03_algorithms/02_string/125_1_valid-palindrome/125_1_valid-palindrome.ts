import isAlphaNumeric from './isAlphanumeric';

function isPalindrome(s: string) {
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

export default isPalindrome;
