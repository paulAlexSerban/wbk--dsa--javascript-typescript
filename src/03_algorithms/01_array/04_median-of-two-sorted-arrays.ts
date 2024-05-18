/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 * Example 1:
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 *
 * Example 2:
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 *
 * Constraints:
 *
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -106 <= nums1[i], nums2[i] <= 106
 */

export const findMedianSortedArrays = (
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
/**
 * The median is a statistical measure that represents the middle value of a
 * dataset when it is ordered in ascending or descending order. It is a measure
 * of central tendency that divides the dataset into two equal halves.
 *
 * - **For an odd number of elements**: The median is the middle element.
 * For example, in the dataset `[1, 3, 5]`, the median is `3` because it is the middle element.
 *
 * - **For an even number of elements**: The median is the average of the two middle elements.
 *   For example, in the dataset `[1, 2, 3, 4]`, the median is `(2 + 3) / 2 = 2.5`
 * because `2` and `3` are the middle elements.
 *
 * The median is particularly useful because it is not affected by outliers and skewed
 * data as much as the mean (average) is. It provides a better central value for datasets
 * that are not symmetrically distributed.
 *
 * ### Calculation Steps:
 *
 * 1. **Sort the dataset** in ascending order.
 * 2. **Determine the number of elements** in the dataset:
 *  - If the number of elements (n) is odd, the median is the element at position `(n + 1) / 2`.
 *  - If the number of elements (n) is even, the median is the average of the elements at
 * positions `n / 2` and `(n / 2) + 1`.
 *
 * **Examples:**
 *
 * 1. For the dataset `[3, 1, 4, 1, 5]`:
 *
 * - Sorted: `[1, 1, 3, 4, 5]`
 * - Number of elements: 5 (odd)
 * - Median: The 3rd element, which is `3`.
 *
 * 2. For the dataset `[3, 1, 4, 1, 5, 9]`:
 *
 * - Sorted: `[1, 1, 3, 4, 5, 9]`
 * - Number of elements: 6 (even)
 * - Median: The average of the 3rd and 4th elements, `(3 + 4) / 2 = 3.5`.
 *
 * The code you provided finds the median of two sorted arrays by merging them, sorting the combined array, and then applying the above steps to return the median value.
 */

/**
 * MERN Proect Ideas:
 *
 * Here are three basic project ideas using the MERN (MongoDB, Express, React, Node.js)
 * stack where calculating the median would be useful:
 *
 * ### 1. **Real Estate Price Tracker**
 *
 * #### Description:
 * Develop a web application that allows users to track and analyze real estate prices
 * in different areas. Users can input property prices and view statistical summaries,
 * including the median property price.
 *
 * #### Features:
 * - **User Authentication:** Users can sign up and log in to manage their data.
 * - **Property Listings:** Users can add, edit, and delete property listings with prices and locations.
 * - **Median Price Calculation:** Calculate and display the median price of properties for a selected area.
 * - **Area Filtering:** Users can filter listings by area to see the median price for specific neighborhoods.
 * - **Data Visualization:** Show trends in property prices over time using charts and graphs.
 *
 * #### Example Components:
 * - **Backend:** Node.js and Express to handle CRUD operations for property listings, and a route to calculate the median price.
 * - **Frontend:** React components for displaying property listings, forms for data input, and charts to visualize price trends.
 * - **Database:** MongoDB to store user data and property listings.
 *
 * ### 2. **Student Grade Analyzer**
 *
 * #### Description:
 * Create a web application for teachers to input and analyze student grades. The app will calculate various statistics, including the median grade, to help teachers understand the distribution of grades in their class.
 *
 * #### Features:
 * - **User Authentication:** Teachers can create accounts and log in to manage their classes.
 * - **Grade Entry:** Teachers can input grades for students in different subjects.
 * - **Median Grade Calculation:** Calculate and display the median grade for each subject and overall.
 * - **Grade Distribution Visualization:** Provide visualizations (e.g., histograms, box plots) to show the distribution of grades.
 * - **Performance Reports:** Generate and download performance reports for individual students and classes.
 *
 * #### Example Components:
 * - **Backend:** Node.js and Express to handle CRUD operations for grades and calculate the median.
 * - **Frontend:** React components for data entry forms, grade lists, and visualization charts.
 * - **Database:** MongoDB to store user data, student grades, and subject information.
 *
 * ### 3. **Healthcare Cost Management**
 * #### Description:
 * Build a web application for patients and healthcare providers to track and analyze medical expenses. The app will calculate the median cost of medical procedures to help users understand typical healthcare expenses.
 *
 * #### Features:
 * - **User Authentication:** Patients and providers can create accounts and log in to manage expenses.
 * - **Expense Entry:** Users can input medical expenses, including procedure type and cost.
 * - **Median Cost Calculation:** Calculate and display the median cost for different medical procedures.
 * - **Expense Analysis:** Provide tools to analyze expenses over time and identify trends.
 * - **Cost Comparison:** Allow users to compare their expenses with regional or national medians.
 *
 * #### Example Components:
 * - **Backend:** Node.js and Express to handle CRUD operations for medical expenses and calculate the median.
 * - **Frontend:** React components for expense entry forms, lists of expenses, and visualization charts.
 * - **Database:** MongoDB to store user data, medical expenses, and procedure information.
 *
 * Each of these projects provides a practical use case for calculating the median and offers valuable insights through data analysis. They also cover key aspects of the MERN stack, such as authentication, CRUD operations, and data visualization.
 */

/**
 * Fatstes Solution
 * @param nums1 
 * @param nums2 
 * @returns 
 */
export const findMedianSortedArrays2 = (
  nums1: number[],
  nums2: number[]
): number => {
  const arr = nums1.concat(nums2).sort((a, b) => {
    return a - b;
  });
  const len = arr.length;
  return len % 2 !== 0
    ? arr[len / 2 - 0.5]
    : (arr[len / 2] + arr[len / 2 - 1]) / 2;
};
