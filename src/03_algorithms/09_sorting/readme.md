# Sorting Algorithms

Sorting algorithms are a fundamental concept in computer science, used to arrange the elements of a list or array in a specific order (e.g., ascending or descending). There are various sorting algorithms, each with its own approach, efficiency, and use cases. Here's an overview:

---

### **1. Bubble Sort**

- **Description**: Compares adjacent elements and swaps them if they are in the wrong order. This process repeats until the array is sorted.
- **Time Complexity**:
  - Best Case: \( O(n) \) (if the array is already sorted)
  - Average/Worst Case: \( O(n^2) \)
- **Space Complexity**: \( O(1) \) (in-place)
- **Usage**: Rarely used in practice due to inefficiency.

---

### **2. Selection Sort**

- **Description**: Finds the minimum element in the unsorted portion of the array and swaps it with the first unsorted element.
- **Time Complexity**:
  - Best/Worst/Average Case: \( O(n^2) \)
- **Space Complexity**: \( O(1) \) (in-place)
- **Usage**: Simple but inefficient for large datasets.

---

### **3. Insertion Sort**

- **Description**: Builds a sorted array one element at a time by taking an element from the unsorted portion and placing it in its correct position.
- **Time Complexity**:
  - Best Case: \( O(n) \) (nearly sorted data)
  - Average/Worst Case: \( O(n^2) \)
- **Space Complexity**: \( O(1) \) (in-place)
- **Usage**: Efficient for small or nearly sorted datasets.

---

### **4. Merge Sort**

- **Description**: A divide-and-conquer algorithm that divides the array into halves, sorts them recursively, and merges the sorted halves.
- **Time Complexity**:
  - Best/Worst/Average Case: \( O(n \log n) \)
- **Space Complexity**: \( O(n) \)
- **Usage**: Efficient for large datasets; not in-place.

---

### **5. Quick Sort**

- **Description**: Another divide-and-conquer algorithm. It selects a "pivot" and partitions the array such that elements smaller than the pivot come before it and larger ones after. Recursively sorts the partitions.
- **Time Complexity**:
  - Best/Average Case: \( O(n \log n) \)
  - Worst Case: \( O(n^2) \) (when the pivot is poorly chosen)
- **Space Complexity**: \( O(\log n) \) (in-place, recursive calls use stack space)
- **Usage**: One of the most commonly used sorting algorithms due to its efficiency in average cases.

---

### **6. Heap Sort**

- **Description**: Converts the array into a binary heap, then extracts the maximum (or minimum) repeatedly to build a sorted array.
- **Time Complexity**:
  - Best/Worst/Average Case: \( O(n \log n) \)
- **Space Complexity**: \( O(1) \) (in-place)
- **Usage**: Efficient for large datasets, but often slower than quicksort in practice.

---

### **7. Counting Sort**

- **Description**: Counts occurrences of each value, then calculates positions to place elements in sorted order. Works only for integers or categorical data.
- **Time Complexity**: \( O(n + k) \), where \( k \) is the range of the input
- **Space Complexity**: \( O(n + k) \)
- **Usage**: Fast for integers with small ranges; not comparison-based.

---

### **8. Radix Sort**

- **Description**: Non-comparison-based sorting algorithm that processes digits (or characters) from least significant to most significant.
- **Time Complexity**: \( O(n \cdot k) \), where \( k \) is the number of digits
- **Space Complexity**: \( O(n + k) \)
- **Usage**: Efficient for sorting integers or strings.

---

### **9. Bucket Sort**

- **Description**: Divides the array into buckets and sorts each bucket individually (often using another sorting algorithm like insertion sort).
- **Time Complexity**: \( O(n + k) \) (depends on distribution and sorting within buckets)
- **Space Complexity**: \( O(n + k) \)
- **Usage**: Efficient for uniformly distributed data.

---

### **10. Shell Sort**

- **Description**: A variation of insertion sort that allows exchanging elements far apart. Reduces the gap between compared elements over iterations.
- **Time Complexity**: Depends on the gap sequence (e.g., \( O(n \log^2 n) \) for some sequences)
- **Space Complexity**: \( O(1) \) (in-place)
- **Usage**: Efficient for medium-sized datasets.

---

### **Comparison of Sorting Algorithms**

| Algorithm      | Best Time Complexity | Worst Time Complexity | Space Complexity | Stable |
| -------------- | -------------------- | --------------------- | ---------------- | ------ |
| Bubble Sort    | \( O(n) \)           | \( O(n^2) \)          | \( O(1) \)       | Yes    |
| Selection Sort | \( O(n^2) \)         | \( O(n^2) \)          | \( O(1) \)       | No     |
| Insertion Sort | \( O(n) \)           | \( O(n^2) \)          | \( O(1) \)       | Yes    |
| Merge Sort     | \( O(n \log n) \)    | \( O(n \log n) \)     | \( O(n) \)       | Yes    |
| Quick Sort     | \( O(n \log n) \)    | \( O(n^2) \)          | \( O(\log n) \)  | No     |
| Heap Sort      | \( O(n \log n) \)    | \( O(n \log n) \)     | \( O(1) \)       | No     |
| Counting Sort  | \( O(n + k) \)       | \( O(n + k) \)        | \( O(n + k) \)   | Yes    |
| Radix Sort     | \( O(n \cdot k) \)   | \( O(n \cdot k) \)    | \( O(n + k) \)   | Yes    |
| Bucket Sort    | \( O(n + k) \)       | \( O(n^2) \)          | \( O(n + k) \)   | Yes    |
| Shell Sort     | \( O(n \log^2 n) \)  | \( O(n^2) \)          | \( O(1) \)       | No     |

---

### **Choosing a Sorting Algorithm**

- **Small datasets or nearly sorted data**: Insertion sort.
- **Large datasets with random data**: Merge sort or quicksort.
- **Stable sorting needed**: Merge sort, counting sort, or insertion sort.
- **Memory constraints**: Heap sort or quicksort (in-place).
- **Integer sorting with small range**: Counting sort or radix sort.
