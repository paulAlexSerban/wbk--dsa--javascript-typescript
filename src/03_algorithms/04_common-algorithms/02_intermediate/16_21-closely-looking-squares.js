/**

### Problem Description: Nearly Similar Rectangles

In geometry, rectangles are often compared by their similarity. However, have you ever thought about "nearly similar rectangles"? We say two rectangles are nearly similar if their sides [a, b] and [c, d] satisfy the equation a/c = b/d.

Given an array of n rectangles, each described by an array containing two integers a and b which represent the length of the sides, your task is to determine the number of pairs of nearly similar rectangles in the given list.

#### Example

For example, consider n = 4 rectangles with sides described by the array [ [5, 10], [10, 10], [3, 6], [9, 9] ].

- The rectangles [5, 10] and [3, 6] are nearly similar because 5/3 = 10/6.
- The rectangles [10, 10] and [9, 9] are nearly similar because 10/9 = 10/9.

In this case, the number of pairs of nearly similar rectangles is 2.

#### Constraints
- 1 <= n <= 10^5
- 1 <= sides[i][0], sides[i][1] <= 10^15

#### Function Signature

*/

function gcd(a, b) {
    // Euclidean algorithm to find GCD
    while (b !== 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

/**
 * @param {number[][]} sides - A 2D array where the i-th row contains the sides of the i-th rectangle.
 * @return {number} - The number of pairs of nearly similar rectangles.
 */
function nearlySimilarRectangles(sides) {
    let count = 0;
    let hashMap = new Map();

    for (const [a, b] of sides) {
        const divisor = gcd(a, b);
        const key = [a / divisor, b / divisor].toString();

        if (hashMap.has(key)) {
            hashMap.set(key, hashMap.get(key) + 1);
        } else {
            hashMap.set(key, 1);
        }
    }

    // Calculate number of pairs for each unique ratio
    for (const value of hashMap.values()) {
        count += (value * (value - 1)) / 2; // nC2 combinations
    }

    return count;
}

const testSides = [
    [5, 10],
    [10, 10],
    [3, 6],
    [9, 9],
];
console.log(nearlySimilarRectangles(testSides)); // Output should be 2
