# Media of Two Sorted Arrays

## Problem Statement
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106


## Solution

```js
const findMedianSortedArrays = (
  nums1: number[],
  nums2: number[]
): number => {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = mergedArray.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 0
    ? (mergedArray[mid - 1] + mergedArray[mid]) / 2
    : mergedArray[mid];
};
```

The solution provided for `findMedianSortedArrays` is using the technique of **merging two sorted arrays and then finding the median**. This approach does not utilize the two-pointer technique or hashing; instead, it relies on sorting the merged array and then calculating the median based on its length and elements.

### Explanation of the Solution:

1. **Merging Arrays:**
   - First, the solution concatenates (`[...nums1, ...nums2]`) the two sorted arrays `nums1` and `nums2` into a single array `mergedArray`.

2. **Sorting:**
   - The merged array `mergedArray` is then sorted using JavaScript's built-in `sort()` method with a comparator function `(a, b) => a - b`. This sorts the array in ascending order.

3. **Finding the Median:**
   - After sorting, the solution calculates the length `n` of `mergedArray` and determines the middle index `mid` using `Math.floor(n / 2)`.
   - Depending on whether `n` is even or odd (`n % 2 === 0`), it either calculates the median as the average of the two middle elements (`(mergedArray[mid - 1] + mergedArray[mid]) / 2`) or simply takes the middle element (`mergedArray[mid]`).

### Time Complexity:
- Sorting the merged array takes \( O((m + n) \log(m + n)) \) time, where \( m \) and \( n \) are the lengths of `nums1` and `nums2`, respectively.
- Finding the median is \( O(1) \) since it involves simple array indexing.

### Why This Technique?
- This technique is straightforward and leverages the fact that both arrays `nums1` and `nums2` are already sorted.
- By merging and sorting, the solution ensures that the median calculation is straightforward and accurate.

### Considerations:
- **Efficiency:** Sorting the entire merged array might not be the most efficient approach for very large arrays, especially since sorting typically has a time complexity of \( O(n \log n) \).
- **Alternative Techniques:** For more efficient solutions, algorithms like the median of two sorted arrays using binary search or a linear-time approach to find the median without sorting might be preferred, especially in competitive programming or large-scale applications.

### Example Usage:
```typescript
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Outputs: 2.0
```

### Conclusion:
While the provided solution is effective and correct, especially for small to moderate-sized inputs, it's essential to recognize its limitations in terms of scalability and potential performance drawbacks with larger datasets. Choosing an appropriate technique depends on the problem constraints, input sizes, and desired performance characteristics.

## MERN Proect Ideas:

Here are three basic project ideas using the MERN (MongoDB, Express, React, Node.js)
stack where calculating the median would be useful:

### 1. **Real Estate Price Tracker**

#### Description:
Develop a web application that allows users to track and analyze real estate prices
in different areas. Users can input property prices and view statistical summaries,
including the median property price.

#### Features:
- **User Authentication:** Users can sign up and log in to manage their data.
- **Property Listings:** Users can add, edit, and delete property listings with prices and locations.
- **Median Price Calculation:** Calculate and display the median price of properties for a selected area.
- **Area Filtering:** Users can filter listings by area to see the median price for specific neighborhoods.
- **Data Visualization:** Show trends in property prices over time using charts and graphs.

#### Example Components:
- **Backend:** Node.js and Express to handle CRUD operations for property listings, and a route to calculate the median price.
- **Frontend:** React components for displaying property listings, forms for data input, and charts to visualize price trends.
- **Database:** MongoDB to store user data and property listings.

### 2. **Student Grade Analyzer**

#### Description:
Create a web application for teachers to input and analyze student grades. The app will calculate various statistics, including the median grade, to help teachers understand the distribution of grades in their class.

#### Features:
- **User Authentication:** Teachers can create accounts and log in to manage their classes.
- **Grade Entry:** Teachers can input grades for students in different subjects.
- **Median Grade Calculation:** Calculate and display the median grade for each subject and overall.
- **Grade Distribution Visualization:** Provide visualizations (e.g., histograms, box plots) to show the distribution of grades.
- **Performance Reports:** Generate and download performance reports for individual students and classes.

#### Example Components:
- **Backend:** Node.js and Express to handle CRUD operations for grades and calculate the median.
- **Frontend:** React components for data entry forms, grade lists, and visualization charts.
- **Database:** MongoDB to store user data, student grades, and subject information.

### 3. **Healthcare Cost Management**
#### Description:
Build a web application for patients and healthcare providers to track and analyze medical expenses. The app will calculate the median cost of medical procedures to help users understand typical healthcare expenses.

#### Features:
- **User Authentication:** Patients and providers can create accounts and log in to manage expenses.
- **Expense Entry:** Users can input medical expenses, including procedure type and cost.
- **Median Cost Calculation:** Calculate and display the median cost for different medical procedures.
- **Expense Analysis:** Provide tools to analyze expenses over time and identify trends.
- **Cost Comparison:** Allow users to compare their expenses with regional or national medians.

#### Example Components:
- **Backend:** Node.js and Express to handle CRUD operations for medical expenses and calculate the median.
- **Frontend:** React components for expense entry forms, lists of expenses, and visualization charts.
- **Database:** MongoDB to store user data, medical expenses, and procedure information.

Each of these projects provides a practical use case for calculating the median and offers valuable insights through data analysis. They also cover key aspects of the MERN stack, such as authentication, CRUD operations, and data visualization.

