# Valid Anagram - Solution 3

```typescript
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
```

The solution `isAnagramV3` uses several programming and algorithmic concepts to efficiently determine if two strings are anagrams. Here are the key concepts involved:

### **1. Frequency Counting**
- The solution leverages a **frequency array** (`letterCounts`) to track the counts of each character in the strings `s` and `t`.
- Each character is mapped to an index in the array using its ASCII value (`charCodeAt(i) - 97` for lowercase English letters).
- **Increment** the count for characters in `s` and **decrement** the count for characters in `t`.

### **2. Constant-Space Optimization for Character Set**
- The array `letterCounts` has a fixed size of 26 (for the 26 lowercase English letters).
- Instead of using a larger data structure like a hash map, this approach uses an array and leverages the small, known character set (a-z) to achieve constant space usage (`O(26)` simplifies to `O(1)`).

### **3. ASCII Mapping**
- Characters are mapped to their respective indices using the formula `charCodeAt(i) - 97`, where `97` is the ASCII value of `'a'`.
- This is a common trick when working with problems limited to lowercase letters.

### **4. Single-Pass Comparison**
- The loop processes both strings `s` and `t` in a **single pass**:
  - One character from `s` increments the count, and the corresponding character from `t` decrements it.
- This reduces the need for two separate loops, making the algorithm more efficient.

### **5. Validation with Zero-Sum Property**
- After processing both strings, the `letterCounts` array should have all zeros if the two strings are anagrams.
- A final loop checks if any value in `letterCounts` is non-zero, which would indicate a mismatch.

### **6. Time Complexity Analysis**
- **Time Complexity:**  
  - Processing both strings takes \(O(n)\), where \(n\) is the length of the strings.
  - The final loop to check the `letterCounts` array is \(O(26)\), which simplifies to \(O(1)\).
  - Overall time complexity: **\(O(n)\)**.
  
- **Space Complexity:**  
  - The `letterCounts` array has a fixed size of 26: **\(O(1)\)** constant space.

### **7. Efficient Anagram Check**
This solution is optimized for:
- **Speed:** It avoids sorting, which is \(O(n \log n)\), making it faster for large strings.
- **Space Efficiency:** The fixed-size array is more memory-efficient than a hash map.

### Practical Applications:
This algorithm can be used for:
1. **Anagram Detection in Texts**
   - Checking if two strings or substrings are anagrams.
2. **Plagiarism Detection**
   - Identifying scrambled or rearranged content.
3. **Word Games**
   - Verifying valid rearrangements in games like Scrabble.
