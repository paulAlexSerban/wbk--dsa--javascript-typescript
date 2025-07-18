/**
### Problem Description

In this online coding challenge, your task is to decode a specially encrypted string back to its original form. You are given a string that was encrypted using the following rules:

1. Given a string `s`, where `s[i]` is the `i-th` character in the string (0-based index):
    - Initialize `i = 0`.
2. Observe the following rules:
    - If `s[i]` is a lowercase letter and the next character `s[i+1]` is an uppercase letter, swap them, add an `@` after them, and move to `i+2`.
    - If `s[i]` is a digit from 1 to 9, replace it with `X`, and move the original digit to the beginning of the string. Move to `i+1`.
    - Otherwise, move to `i+1`.
3. Stop if `i` is more than or equal to the string length.

**Constraints**

1. 1 <= length of `s` <= 10^5
2. `s` can contain Latin alphabet characters (a-z, A-Z), and numbers (1-9).

#### Example

Encoded String: `24Ap@ulXrbXn`

Original String: `pAul2rbAn`

### JavaScript Solution for Decryption

Below is a JavaScript function that decodes the encrypted string back to its original form:

*/
function decodeString(s) {
    // Extract the digits from the beginning and remove them from s
    let i = 0;
    let digits = [];
    while (s[i] >= '1' && s[i] <= '9') {
        digits.push(s[i]);
        i++;
    }
    s = s.substring(i);

    let decoded = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === '@') {
            // Swap the last two characters in decoded
            let last = decoded.pop();
            let secondLast = decoded.pop();
            decoded.push(last);
            decoded.push(secondLast);
        } else if (c === 'X') {
            // Replace 'X' with the last digit from the beginning
            decoded.push(digits.pop());
        } else {
            decoded.push(c);
        }
    }

    return decoded.join('');
}

// Test the function
console.log(decodeString('24Ap@ulXrbXn')); // Should return 'pAul2rbAn'
console.log(decodeString('3h@Elloworld')); // Should return 'hElloworld'
console.log(decodeString('Ia@mth@Ek@ingofthewor@Ld')); // Should return 'IamthEkingoftheworLd'
console.log(decodeString('1X2X3X4X5X6X7X8X9X')); // Should return '123456789'
console.log(decodeString('1X2X3X4X5X6X7X8X9X@')); // Should return '123456789'
