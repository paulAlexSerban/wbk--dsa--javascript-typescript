import { isAlphaNumericV1, isAlphaNumericV2 } from './01_isAlphanumeric';
describe('isAlphaNumericV1', () => {
    test('returns true for a numeric character', () => {
        expect(isAlphaNumericV1('1')).toBe(true);
    });

    test('returns true for an uppercase character', () => {
        expect(isAlphaNumericV1('A')).toBe(true);
    });

    test('returns true for a lowercase character', () => {
        expect(isAlphaNumericV1('z')).toBe(true);
    });

    test('returns false for a non-alphanumeric character', () => {
        expect(isAlphaNumericV1('!')).toBe(false);
    });

    test('returns false for an empty string', () => {
        expect(isAlphaNumericV1('')).toBe(false);
    });
    test('returns true for lowercase letters', () => {
        // Test all lowercase letters a-z
        for (let charCode = 97; charCode <= 122; charCode++) {
            const char = String.fromCharCode(charCode);
            expect(isAlphaNumericV1(char)).toBe(true);
        }
    });

    test('returns true for uppercase letters', () => {
        // Test all uppercase letters A-Z
        for (let charCode = 65; charCode <= 90; charCode++) {
            const char = String.fromCharCode(charCode);
            expect(isAlphaNumericV1(char)).toBe(true);
        }
    });

    test('returns true for digits', () => {
        // Test all digits 0-9
        for (let charCode = 48; charCode <= 57; charCode++) {
            const char = String.fromCharCode(charCode);
            expect(isAlphaNumericV1(char)).toBe(true);
        }
    });

    test('returns false for special characters', () => {
        // List of some special characters to test
        const specialChars = [
            '!',
            '@',
            '#',
            '$',
            '%',
            '^',
            '&',
            '*',
            '(',
            ')',
            '-',
            '=',
            '+',
            '[',
            ']',
            '{',
            '}',
            ';',
            ':',
            ',',
            '.',
            '<',
            '>',
            '/',
            '?',
            '|',
            '`',
            '~',
        ];
        specialChars.forEach((char) => {
            expect(isAlphaNumericV1(char)).toBe(false);
        });
    });

    test('returns false for whitespace characters', () => {
        // List of whitespace characters to test
        const whitespaceChars = [' ', '\n', '\t', '\r'];
        whitespaceChars.forEach((char) => {
            expect(isAlphaNumericV1(char)).toBe(false);
        });
    });

    test('returns false for non-ASCII characters', () => {
        // List of some non-ASCII characters to test
        const nonAsciiChars = ['ñ', 'é', 'ç', 'ü', 'ø', '£', '¥', '¢'];
        nonAsciiChars.forEach((char) => {
            expect(isAlphaNumericV1(char)).toBe(false);
        });
    });
});

describe('isAlphaNumericV2', () => {
    test('returns true for a numeric character', () => {
        expect(isAlphaNumericV2('1')).toBe(true);
    });

    test('returns true for an uppercase character', () => {
        expect(isAlphaNumericV2('A')).toBe(true);
    });

    test('returns true for a lowercase character', () => {
        expect(isAlphaNumericV2('z')).toBe(true);
    });

    test('returns false for a non-alphanumeric character', () => {
        expect(isAlphaNumericV2('!')).toBe(false);
    });

    test('returns false for an empty string', () => {
        expect(isAlphaNumericV2('')).toBe(false);
    });
    test('returns true for lowercase letters', () => {
        // Test all lowercase letters a-z
        for (let charCode = 97; charCode <= 122; charCode++) {
            const char = String.fromCharCode(charCode);
            expect(isAlphaNumericV2(char)).toBe(true);
        }
    });

    test('returns true for uppercase letters', () => {
        // Test all uppercase letters A-Z
        for (let charCode = 65; charCode <= 90; charCode++) {
            const char = String.fromCharCode(charCode);
            expect(isAlphaNumericV2(char)).toBe(true);
        }
    });

    test('returns true for digits', () => {
        // Test all digits 0-9
        for (let charCode = 48; charCode <= 57; charCode++) {
            const char = String.fromCharCode(charCode);
            expect(isAlphaNumericV2(char)).toBe(true);
        }
    });

    test('returns false for special characters', () => {
        // List of some special characters to test
        const specialChars = [
            '!',
            '@',
            '#',
            '$',
            '%',
            '^',
            '&',
            '*',
            '(',
            ')',
            '-',
            '=',
            '+',
            '[',
            ']',
            '{',
            '}',
            ';',
            ':',
            ',',
            '.',
            '<',
            '>',
            '/',
            '?',
            '|',
            '`',
            '~',
        ];
        specialChars.forEach((char) => {
            expect(isAlphaNumericV2(char)).toBe(false);
        });
    });

    test('returns false for whitespace characters', () => {
        // List of whitespace characters to test
        const whitespaceChars = [' ', '\n', '\t', '\r'];
        whitespaceChars.forEach((char) => {
            expect(isAlphaNumericV2(char)).toBe(false);
        });
    });

    test('returns false for non-ASCII characters', () => {
        // List of some non-ASCII characters to test
        const nonAsciiChars = ['ñ', 'é', 'ç', 'ü', 'ø', '£', '¥', '¢'];
        nonAsciiChars.forEach((char) => {
            expect(isAlphaNumericV2(char)).toBe(false);
        });
    });
});
