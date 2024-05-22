export class GroupAnagrams {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */

  getKey(str) {
    const count = new Array(26).fill(0);
    for (const char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    return count.join("#");
  }
  
  groupAnagrams(strs) {
    const map = new Map();
    for (const str of strs) {
      const key = this.getKey(str);
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(str);
    }
    return Array.from(map.values());
  }
}
