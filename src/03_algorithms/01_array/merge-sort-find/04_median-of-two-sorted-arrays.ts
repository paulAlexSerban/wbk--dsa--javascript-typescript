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
 * Fatstes Solution
 * @param nums1
 * @param nums2
 * @returns
 */
export const findMedianSortedArrays_FASTEST = (
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
