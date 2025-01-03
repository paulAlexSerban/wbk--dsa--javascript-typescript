# Valid Anagram - Solution 1

```typescript
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
```

This solution to checking if two strings are anagrams leverages several fundamental programming and algorithmic concepts. Here's a breakdown:

### **1. Hash Map for Frequency Counting**
   - **Concept:**  
     A `Map` data structure is used to store character frequencies from both strings. This allows efficient counting and comparison of occurrences of each character.
   - **Why it works:**  
     By incrementing the count for characters in `str1` and decrementing it for characters in `str2`, the net effect is that all counts should be zero if the strings are anagrams.

### **2. Single Pass Frequency Update**
   - **Concept:**  
     Instead of two separate passes (one for counting characters in `str1` and another for `str2`), this algorithm combines both operations in a single pass.
   - **Why it works:**  
     Each character of `str1` increases its count, while each character of `str2` decreases it, ensuring that mismatches are immediately reflected in the `Map`.

### **3. Early Exit with Length Check**
   - **Concept:**  
     If two strings are of different lengths, they cannot be anagrams. The function begins by checking this condition and exits early if it’s not met.
   - **Why it works:**  
     Saves computation time by skipping unnecessary processing when lengths differ.

### **4. Map Iteration for Validation**
   - **Concept:**  
     After processing both strings, the function iterates through the `Map` values to ensure all counts are zero.
   - **Why it works:**  
     Any non-zero count indicates a mismatch between `str1` and `str2`.

### **5. Short-Circuit Logic**
   - **Concept:**  
     The `for` loop in the second pass uses an early `return false` if any value in the map is non-zero, avoiding further unnecessary checks.
   - **Why it works:**  
     Improves efficiency by exiting as soon as a discrepancy is detected.

### **6. Time Complexity: O(n)**
   - **Reasoning:**  
     - Constructing the map and updating counts takes \(O(n)\), where \(n\) is the length of the strings.
     - Iterating over the map values takes \(O(m)\), where \(m\) is the number of unique characters (typically \(m \ll n\)).
     - Overall, the algorithm runs in \(O(n)\), assuming string length dominates over the size of the character set.

### **7. Space Complexity: O(m)**
   - **Reasoning:**  
     - The space required for the `Map` depends on the number of unique characters in the strings, denoted as \(m\).  
     - In most cases (e.g., with English letters), \(m\) is relatively small and constant, making the space complexity \(O(m)\).

### **Key Concepts Summary**
- **Hashing:** Use of `Map` for efficient lookups and updates.
- **Single Pass Optimization:** Counting and comparing simultaneously.
- **Greedy Validation:** Early exits to avoid unnecessary work.
- **Asymptotic Efficiency:** Optimal \(O(n)\) time complexity with minimal space usage.

This approach is highly efficient and leverages the power of hash maps to streamline the solution to the anagram problem.