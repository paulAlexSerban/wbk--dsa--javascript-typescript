import isPalindrome from './125_1_valid-palindrome';

describe('isPalindrome', () => {
  test('returns true for a simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns true for a palindrome with non-alphanumeric characters', () => {
    expect(isPalindrome('A man, a plan, a canal, Panama!')).toBe(true);
  });

  test('returns false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('is case insensitive', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  test('handles numeric characters correctly', () => {
    expect(isPalindrome('12321')).toBe(true);
    expect(isPalindrome('123a321')).toBe(true);
  });

  test('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('returns true for a single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('returns true for a string with only non-alphanumeric characters', () => {
    expect(isPalindrome(',,,!!!')).toBe(true);
  });

  test('returns false for a string that is not a palindrome', () => {
    expect(isPalindrome('abc')).toBe(false);
  });
});