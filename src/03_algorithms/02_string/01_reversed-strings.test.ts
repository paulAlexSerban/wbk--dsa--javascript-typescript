import { reverseString } from './01_reversed-strings';

describe('reverseString', () => {
    it('should reverse a string', () => {
        expect(reverseString('hello')).toBe('olleh');
        expect(reverseString('world')).toBe('dlrow');
    });
    it('should return an empty string if the input is an empty string', () => {
        expect(reverseString('')).toBe('');
    });
    it('should return the same string if the input is a single character', () => {
        expect(reverseString('a')).toBe('a');
    });
    it('should return the same string if the input is a palindrome', () => {
        expect(reverseString('racecar')).toBe('racecar');
    });
    it('should reverse a single word', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    it('should reverse a single character', () => {
        expect(reverseString('a')).toBe('a');
    });

    it('should handle an empty string', () => {
        expect(reverseString('')).toBe('');
    });

    it('should reverse a phrase with spaces', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    it('should reverse a string with punctuation', () => {
        expect(reverseString('hello, world!')).toBe('!dlrow ,olleh');
    });

    it('should reverse a string with numbers', () => {
        expect(reverseString('12345')).toBe('54321');
    });
});
