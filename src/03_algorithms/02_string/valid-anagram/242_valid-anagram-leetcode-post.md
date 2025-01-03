# Valid Anagram: Frequency Map Solution

## Intuition
When comparing two strings to check if they are anagrams, the key idea is to ensure that both strings contain the exact same characters with the same frequency, regardless of their order. Using a frequency map is a natural approach to track the character counts efficiently.

## Approach
1. **Length Check**:  
   If the strings have different lengths, they cannot be anagrams. We immediately return `false` in this case.

2. **Frequency Map**:  
   Create a `Map` to store the character frequencies.  
   - For each character in the first string (`s`), increment its count in the map.  
   - For each character in the second string (`t`), decrement its count in the map.

3. **Validation**:  
   After iterating through both strings, iterate through the map values. If any value is not zero, it means the character counts do not match, so we return `false`.

4. **Return Result**:  
   If all values in the map are zero, the strings are anagrams, and we return `true`.

## Complexity
- **Time Complexity**:  
  $$O(n)$$  
  - Constructing the map requires a single pass over the strings of length \(n\).  
  - Validating the map values requires iterating through at most \(m\) unique characters, where \(m \ll n\) (constant for typical inputs).

- **Space Complexity**:  
  $$O(m)$$  
  - The space required for the map depends on the number of unique characters \(m\).  
  - For inputs restricted to a fixed character set (e.g., English letters), \(m\) is constant, so the space complexity is effectively \(O(1)\).

## Code
```typescript
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        map.set(t[i], (map.get(t[i]) || 0) - 1);
    }
    for (const value of map.values()) {
        if (value !== 0) return false;
    }
    return true;
};
```