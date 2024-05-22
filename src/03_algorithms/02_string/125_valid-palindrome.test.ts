import {isPalindrome, isPalindrome2} from './125_valid-palindrome';

describe('isPalindrome', () => {
  const SUT  = isPalindrome;

  test('returns true for a simple palindrome', () => {
    const actual = SUT('racecar');
    const expected = true;
    expect(actual).toBe(expected);
  });

  test('returns true for a palindrome with non-alphanumeric characters', () => {
    const actual = SUT('A man, a plan, a canal, Panama!');
    const expected = true;
    expect(actual).toBe(true);
  });

  test('returns false for a non-palindrome', () => {
    expect(SUT('hello')).toBe(false);
  });

  test('is case insensitive', () => {
    expect(SUT('RaceCar')).toBe(true);
  });

  test('handles numeric characters correctly', () => {
    expect(SUT('12321')).toBe(true);
    expect(SUT('123a321')).toBe(true);
  });

  test('returns true for an empty string', () => {
    expect(SUT('')).toBe(true);
  });

  test('returns true for a single character', () => {
    expect(SUT('a')).toBe(true);
  });

  test('returns true for a string with only non-alphanumeric characters', () => {
    expect(SUT(',,,!!!')).toBe(true);
  });

  test('returns false for a string that is not a palindrome', () => {
    expect(SUT('abc')).toBe(false);
  });
});


describe('isPalindrome2', () => {
  const SUT = isPalindrome2;
  test('returns true for a simple palindrome', () => {
    expect(SUT('racecar')).toBe(true);
  });

  test('returns true for a palindrome with non-alphanumeric characters', () => {
    expect(SUT('A man, a plan, a canal, Panama!')).toBe(true);
  });

  test('returns false for a non-palindrome', () => {
    expect(SUT('hello')).toBe(false);
  });

  test('is case insensitive', () => {
    expect(SUT('RaceCar')).toBe(true);
  });

  test('handles numeric characters correctly', () => {
    expect(SUT('12321')).toBe(true);
    expect(SUT('123a321')).toBe(true);
  });

  test('returns true for an empty string', () => {
    expect(SUT('')).toBe(true);
  });

  test('returns true for a single character', () => {
    expect(SUT('a')).toBe(true);
  });

  test('returns true for a string with only non-alphanumeric characters', () => {
    expect(SUT(',,,!!!')).toBe(true);
  });

  test('returns false for a string that is not a palindrome', () => {
    expect(SUT('abc')).toBe(false);
  });
});