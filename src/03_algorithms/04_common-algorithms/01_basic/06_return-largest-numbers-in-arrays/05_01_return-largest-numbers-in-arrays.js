/**
 * Return Largest Numbers in Arrays
 * Return an array consisting of the largest number from each provided sub-array.
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 * Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
 */

//  (Procedural approach)
function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }

    return results;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
]);

/**
 * Code Explanation
 * Create a variable to store the results as an array.
 * Create an outer loop to iterate through the outer array.
 * Create a second variable to hold the largest number and initialize it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
 * Create said inner loop to work with the sub-arrays.
 * Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
 * After the inner loop, save the largest number in the corresponding position inside of the results array.
 * And finally return said array.
 */
