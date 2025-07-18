/**
 * Function that accepts 3 integer values a, b, c. The function should return true if
 * a triangle can be built with the sides of given length and false in any other case.
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @returns
 */

function isTriangle(a, b, c) {
    // Check that all sides are positive
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }

    // Check that no two sides have a sum less than the third side
    if (a + b <= c || a + c <= b || b + c <= a) {
        return false;
    }

    // If all checks pass, return true
    return true;
}

// Test the function with some sample inputs
console.log(isTriangle(3, 4, 5)); // Output: true (a triangle can be built with these side lengths)
console.log(isTriangle(1, 1, 2)); // Output: false (a triangle cannot be built with these side lengths)
console.log(isTriangle(5, 5, 5)); // Output: true (a triangle can be built with these side lengths)

/**
 * This implementation follows the triangle inequality theorem, which states that the
 * sum of the lengths of any two sides of a triangle must be greater than the length of
 * the third side. This theorem is used to determine whether a triangle can be built with the given side lengths.
 */
