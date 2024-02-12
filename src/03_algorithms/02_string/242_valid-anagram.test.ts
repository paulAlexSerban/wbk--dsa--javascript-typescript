// Assuming the isAnagram function is imported or defined in this file
import { isAnagramV1, isAnagramV2, isAnagramV3, isAnagramV4 } from './242_valid-anagram';

describe('isAnagramV1', () => {
    // Test for positive cases
    test('returns true for "anagram" and "nagaram"', () => {
        expect(isAnagramV1('anagram', 'nagaram')).toBe(true);
    });

    test('returns true for two empty strings', () => {
        expect(isAnagramV1('', '')).toBe(true);
    });

    // Test for negative cases
    test('returns false for "rat" and "car"', () => {
        expect(isAnagramV1('rat', 'car')).toBe(false);
    });

    test('returns false for strings of different lengths', () => {
        expect(isAnagramV1('abc', 'abcd')).toBe(false);
    });

    // Test including Unicode characters
    test('returns true for strings with Unicode characters that are anagrams', () => {
        expect(isAnagramV1('日本', '本日')).toBe(true);
    });

    test('returns false for strings with Unicode characters that are not anagrams', () => {
        expect(isAnagramV1('hello', 'こんにちは')).toBe(false);
    });
});


describe('isAnagramV2', () => {
  // Test for positive cases
  test('returns true for "anagram" and "nagaram"', () => {
      expect(isAnagramV2('anagram', 'nagaram')).toBe(true);
  });

  test('returns true for two empty strings', () => {
      expect(isAnagramV2('', '')).toBe(true);
  });

  // Test for negative cases
  test('returns false for "rat" and "car"', () => {
      expect(isAnagramV2('rat', 'car')).toBe(false);
  });

  test('returns false for strings of different lengths', () => {
      expect(isAnagramV2('abc', 'abcd')).toBe(false);
  });

  // Test including Unicode characters
  test('returns true for strings with Unicode characters that are anagrams', () => {
      expect(isAnagramV2('日本', '本日')).toBe(true);
  });

  test('returns false for strings with Unicode characters that are not anagrams', () => {
      expect(isAnagramV2('hello', 'こんにちは')).toBe(false);
  });
});

describe('isAnagramV3', () => {
  // Test for positive cases
  test('returns true for "anagram" and "nagaram"', () => {
      expect(isAnagramV3('anagram', 'nagaram')).toBe(true);
  });

  test('returns true for two empty strings', () => {
      expect(isAnagramV3('', '')).toBe(true);
  });

  // Test for negative cases
  test('returns false for "rat" and "car"', () => {
      expect(isAnagramV3('rat', 'car')).toBe(false);
  });

  test('returns false for strings of different lengths', () => {
      expect(isAnagramV3('abc', 'abcd')).toBe(false);
  });

  // Test including Unicode characters
  test('returns true for strings with Unicode characters that are anagrams', () => {
      expect(isAnagramV3('日本', '本日')).toBe(true);
  });

  test('returns false for strings with Unicode characters that are not anagrams', () => {
      expect(isAnagramV3('hello', 'こんにちは')).toBe(false);
  });
});

describe('isAnagramV4', () => {
  // Test for positive cases
  test('returns true for "anagram" and "nagaram"', () => {
      expect(isAnagramV4('anagram', 'nagaram')).toBe(true);
  });

  test('returns true for two empty strings', () => {
      expect(isAnagramV4('', '')).toBe(true);
  });

  // Test for negative cases
  test('returns false for "rat" and "car"', () => {
      expect(isAnagramV4('rat', 'car')).toBe(false);
  });

  test('returns false for strings of different lengths', () => {
      expect(isAnagramV4('abc', 'abcd')).toBe(false);
  });

  // Test including Unicode characters
  test('returns true for strings with Unicode characters that are anagrams', () => {
      expect(isAnagramV4('日本', '本日')).toBe(true);
  });

  test('returns false for strings with Unicode characters that are not anagrams', () => {
      expect(isAnagramV4('hello', 'こんにちは')).toBe(false);
  });
});