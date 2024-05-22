/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Example 1:
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Example 2:
 *
 * Input: strs = [""]
 * Output: [[""]]
 * Example 3:
 *
 * Input: strs = ["a"]
 * Output: [["a"]]
 *
 * Constraints:
 * 1 <= strs.length <= 104
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
 */

export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)?.push(str);
  }

  return Array.from(map.values());
}

export function groupAnagrams2(strs: string[]): string[][] {
  let sortedWord;
  const map: Map<string, string[]> = new Map();
  for (const word of strs) {
    sortedWord = word.split("").sort().join("");

    if (map.has(sortedWord)) {
      map.get(sortedWord)?.push(word);
    } else {
      map.set(sortedWord, [word]);
    }
  }
  return Array.from(map.values());
}
