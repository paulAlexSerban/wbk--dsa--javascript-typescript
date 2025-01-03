export function insertionSortWithComparator(
  arr: any[],
  comparator = (a: any, b: any) => a - b
) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    let j = i - 1;
    // check if j >=0 first or it will break the comparator!!
    while (j >= 0 && comparator(arr[j], currVal) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currVal;
  }
  return arr;
}

export function stringComparator(a: any, b: any) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

export function descendingAgeComparator(a: any, b: any) {
  return b.age - a.age;
}

export function ascendingAgeComparator(a: any, b: any) {
  return a.age - b.age;
}

/**
 * This function uses the insertion sort algorithm to sort an array of values. The algorithm works
 * by starting at the second element in the array and comparing it to the elements before it.
 * If the current element is smaller (according to the comparator function) than the previous element,
 * it "inserts" the current element in the correct place in the sorted portion of the array by shifting
 * the larger values to the right. This process is repeated for each element in the array.
 *
 * The time complexity of insertion sort is O(n^2) in the worst-case scenario (when the array is sorted
 * in descending order), as for every iteration of the outer loop, we may have to compare and move each of
 * the already sorted elements. However, insertion sort has a best-case time complexity of O(n) when the
 * array is already sorted, making it an efficient algorithm for sorting nearly-sorted arrays.
 *
 * The space complexity is O(1), as it only uses a fixed amount of additional space to store the
 * current value and the index for the inner loop.
 */