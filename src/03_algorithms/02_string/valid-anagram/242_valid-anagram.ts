/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different
 * word or phrase, typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 104
 * s and t consist of lowercase English letters.
 *
 * Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

const isAnagramV1 = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }
  const map = new Map<string, number>();
  for (let index = 0; index < str1.length; index++) {
    map.set(str1[index], (map.get(str1[index]) || 0) + 1);
    map.set(str2[index], (map.get(str2[index]) || 0) - 1);
  }
  for (const value of map.values()) {
    if (value !== 0) return false;
  }
  return true;
};

function isAnagramV2(s: string, t: string): boolean {
  // Sort the strings and compare them
  const sortString = (str: string) => str.split("").sort().join("");
  return sortString(s) === sortString(t);
}

function isAnagramV3(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const letterCounts = Array<number>(26).fill(0);

  for (let i = 0; i < s.length; i += 1) {
    letterCounts[s.charCodeAt(i) - 97] += 1;
    letterCounts[t.charCodeAt(i) - 97] -= 1;
  }

  for (let i = 0; i < 26; i += 1) if (letterCounts[i] !== 0) return false;

  return true;
}

function isAnagramV4(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = new Map<string, number>();
  for (const char of s) {
    const count = charCount.get(char) ?? 0;
    charCount.set(char, count + 1);
  }

  for (const char of t) {
    const count = charCount.get(char) ?? 0;
    if (count === 0) {
      return false;
    }
    charCount.set(char, count - 1);
  }

  return true;
}

function areArraysEqual(arr1: any[], arr2: any[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value, index) => value === arr2[index]);
}

function isAnagramV5(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const sortedS = s.split("").sort();
  const sortedT = t.split("").sort();
  return areArraysEqual(sortedS, sortedT);
}

/**
 * Follow-up on Unicode Characters:
 *
 * The given solution naturally extends to strings containing Unicode characters
 * because the JavaScript string split method treats Unicode characters correctly,
 * and the sort method will order them based on their Unicode code points. Thus,
 * even if the inputs contain Unicode characters, this approach will still correctly
 * determine if one string is an anagram of the other.
 */

export { isAnagramV1, isAnagramV2, isAnagramV3, isAnagramV4, isAnagramV5 };
