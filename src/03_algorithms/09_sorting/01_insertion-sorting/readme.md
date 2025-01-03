# Insertion Sorting
**Insertion sorting** is a simple sorting algorithm that works similarly to how you might sort playing cards in your hands. The algorithm builds the final sorted array one element at a time by picking elements from the unsorted portion and inserting them into their correct position in the sorted portion.
> - it build up the sort by gradually creating a larger half which is always sorted

### How It Works
1. **Start with the first element:** Assume it is already sorted.
2. **Pick the next element:** Compare it with the elements in the sorted portion of the array.
3. **Shift elements:** If the picked element is smaller than any element in the sorted portion, shift the larger elements one position to the right.
4. **Insert the picked element:** Place it in its correct position within the sorted portion.
5. **Repeat:** Continue this process for all elements in the array.

### Algorithm
```js
function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i]; // Element to be inserted
        let j = i - 1;

        // Shift elements of the sorted portion to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key into its correct position
        arr[j + 1] = key;
    }
    return arr; // Return the sorted array
}
```

### Example
Sort `[5, 3, 4, 1, 2]` using insertion sort:

1. Start with `[5]` (already sorted).
2. Insert `3`:
   - Compare with `5`: shift `5` to the right → `[5, 5]`.
   - Insert `3` → `[3, 5]`.
3. Insert `4`:
   - Compare with `5`: shift `5` to the right → `[3, 5, 5]`.
   - Compare with `3`: no shift needed.
   - Insert `4` → `[3, 4, 5]`.
4. Insert `1`:
   - Shift `5`, `4`, and `3` → `[3, 4, 5, 5]`, `[3, 4, 4, 5]`, `[3, 3, 4, 5]`.
   - Insert `1` → `[1, 3, 4, 5]`.
5. Insert `2`:
   - Shift `5`, `4`, and `3` → `[1, 3, 4, 5, 5]`, `[1, 3, 4, 4, 5]`, `[1, 3, 3, 4, 5]`.
   - Insert `2` → `[1, 2, 3, 4, 5]`.

### Complexity
- **Time Complexity:**
  - Best case: \(O(n)\) (array is already sorted).
  - Worst case: \(O(n^2)\) (array is sorted in reverse order).
- **Space Complexity:** \(O(1)\) (in-place sorting).

### Applications
Insertion sort is ideal for:
- Small datasets.
- Arrays that are already mostly sorted.
- Scenarios where stable sorting is required (it preserves the order of equal elements).


### References
- [geeks for geeks - insertion sorting algorithms](https://www.geeksforgeeks.org/insertion-sort-algorithm/)
- [programiz - insertion sort](https://www.programiz.com/dsa/insertion-sort)
- [neetcode - insertion sort](https://neetcode.io/solutions/insertion-sort-list)