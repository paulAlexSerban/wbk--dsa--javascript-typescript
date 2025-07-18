/**
 * Caesars Cipher
 *
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.} string
 * @param {*} key
 * @returns
 */

(() => {
    function caesarCipher(string, key) {
        key %= 26;
        const alphabetsArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const lowerCaseString = string.toLowerCase();
        let newString = '';
        const charCount = lowerCaseString.length;

        for (i = 0; i < charCount; i++) {
            let currentLetter = lowerCaseString[i];
            if (currentLetter === ' ') {
                newString += currentLetter;
                continue;
            }
            let charIndex = alphabetsArr.indexOf(currentLetter);
            let newIndex = charIndex + key;

            if (newIndex > 25) {
                newIndex -= 26;
            }
            if (newIndex < 0) {
                newIndex = 26 + newIndex;
            }

            if (string[i] === lowerCaseString[i].toUpperCase()) {
                newString += alphabetsArr[newIndex].toUpperCase();
            } else {
                newString += alphabetsArr[newIndex];
            }
        }
        return newString;
    }

    // Running solution
    console.log(caesarCipher('it is so hot mon cher', 10));
})();

(() => {
    function caesarCipherCharCode(string, key) {
        key %= 26;
        let newString = '';
        string
            .toLowerCase()
            .split('')
            .forEach((c, i) => {
                if (c === ' ') {
                    newString += ' ';
                    return;
                }
                if (key < 0) {
                    key = 26 + key;
                }
                let char = String.fromCharCode(((c.charCodeAt(0) + key - 97) % 26) + 97);

                if (string[i] === c.toUpperCase()) {
                    newString += char.toUpperCase();
                } else {
                    newString += char;
                }
            });
        return newString;
    }

    // Running solution
    console.log(caesarCipherCharCode('it is so hot mon cher', 10));
})();

/**
 * Algorithm and Concepts
 * Loop through each character of the input string.
 * If the character is an uppercase letter, shift it by 13 places. Make sure to wrap around if the letter goes past 'Z'.
 * If the character is not an uppercase letter (e.g., a space, punctuation, or a number), leave it unchanged.
 */

(() => {
    function rot13(str) {
        let decoded = '';

        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);

            // Check if the character is an uppercase letter ('A' to 'Z')
            if (charCode >= 65 && charCode <= 90) {
                // Shift by 13 places while ensuring it wraps around
                let shifted = charCode + 13;

                if (shifted > 90) {
                    shifted -= 26; // Wrap around
                }

                decoded += String.fromCharCode(shifted);
            } else {
                // Leave non-alphabetic characters unchanged
                decoded += str[i];
            }
        }

        return decoded;
    }

    // Example usage:
    console.log(rot13('HELLO')); // Outputs "URYYB"
    console.log(rot13('WORLD')); // Outputs "JBEYQ"
    console.log(rot13('ROT13')); // Outputs "EBG13"
})();

/**
 * Time Complexity
 * The time complexity is O(n), where n is the length of the input string.
 *
 * Space Complexity
 * The space complexity is O(n), to store the output decoded string.
 *
 * Feel free to run the code and test it against other examples.
 */
