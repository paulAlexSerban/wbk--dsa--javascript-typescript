/**
Challenge Description

In this challenge, you will be working with a specialized encryption scheme for alpha-numeric strings. The encryption works as follows:

1. Given a string `s`, where `s[i]` is the `i-th` character in the string (0-based index):
    - Initialize `i = 0`.
2. Observe the following rules:
    - If `s[i]` is a lowercase letter and the next character `s[i+1]` is an uppercase letter, swap them and add an `@` after them. Move to `i+2`.
    - If `s[i]` is a digit from 1 to 9, replace it with `X`, and move the original digit to the beginning of the string. Move to `i+1`.
    - Otherwise, move to `i+1`.
3. Stop if `i` is more than or equal to the string length.

**Constraints**

1. 1 <= length of `s` <= 10^5
2. `s` can contain Latin alphabet characters (a-z, A-Z), and numbers (1-9).

#### Example

Input: `pAul2rbAn`

Output: `24Ap@ulXrbXn`

### JavaScript Solution for Encryption

Here's a JavaScript function that implements this encryption scheme:

*/
function encryptPassword(s) {
    let encrypted = [];
    let digits = [];

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        // Check if the character is a digit between 1 and 9
        if (c >= '1' && c <= '9') {
            digits.unshift(c); // Push digit to the beginning to maintain the original order
            encrypted.push('0');
        }
        // Check if the character is a lowercase letter and the next one is an uppercase letter
        else if (i < s.length - 1 && c >= 'a' && c <= 'z' && s[i + 1] >= 'A' && s[i + 1] <= 'Z') {
            encrypted.push(s[i + 1]);
            encrypted.push(c);
            encrypted.push('*');
            i++; // Skip the next character
        }
        // All other cases
        else {
            encrypted.push(c);
        }
    }

    // Concatenate digits at the beginning
    return digits.join('') + encrypted.join('');
}

// Test the function
console.log(encryptPassword('p4ul23rb4n')); // Should return '4324p0ul00rb0n'
console.log(encryptPassword('h3lloworld')); // Should return '3h0lloworld'
console.log(encryptPassword('i4mth3k1ngod7h3wor1d')); // Should return '137134i0mth0k0ngod0h0wor0d'
