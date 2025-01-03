/**
 * The basic idea is to sort the both arrays. Compare the arrays element by element one by one if all are same then it is equal array otherwise it is not.
 * Time Complexity: O(n*log n), since sorting is used
 * Auxiliary Space: O(1)
 */

export function checkEqual(a: any[], b: any[]) {
  // If lengths of array are not equal means
  // array are not equal
  if (a.length !== b.length) {
    return false;
  }
  a.sort();
  b.sort();
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  // If all elements were same.
  return true;
}
