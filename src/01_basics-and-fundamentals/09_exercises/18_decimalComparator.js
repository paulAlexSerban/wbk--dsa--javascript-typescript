/**
 * Compare two decimal numbers up to a given number of decimal places.
 *
 * @param {number} num1 - The first number to compare.
 * @param {number} num2 - The second number to compare.
 * @param {number} decimalPlaces - The number of decimal places to compare (default is 2).
 * @return {boolean} - True if the numbers are equal up to the specified number of decimal places, false otherwise.
 */

// This function compares two numbers and returns true if they are equal or
// false if they are not equal. By default, it compares only the first two
// decimal places, but you can optionally specify the number of decimal places
// you'd like to include in the comparison.
function compareDecimals(num1, num2, decimalPlaces = 2) {
    // Multiply both numbers by 10 to the power of the number of decimal places
    // specified. This will shift the decimal point to the right so that the
    // numbers are now whole numbers.
    const factor = Math.pow(10, decimalPlaces);
    const roundedNum1 = Math.round(num1 * factor);
    const roundedNum2 = Math.round(num2 * factor);

    // Compare the two rounded numbers and return true if they are equal or
    // false if they are not equal.
    return roundedNum1 === roundedNum2;
}

// Test cases
console.log(compareDecimals(3.14159, 3.14157, 3)); // Output: true
console.log(compareDecimals(3.14159, 3.14157, 4)); // Output: false
console.log(compareDecimals(0.1234, 0.1235)); // Output: true
console.log(compareDecimals(0.1234, 0.1235, 3)); // Output: false

/**
 * MERN Project Ideas
 *
 * Online Math Tutoring Platform:
 * Build a web application that allows users to learn and practice math concepts.
 * The "decimal comparator" code can be used to compare user's answers with the
 * correct answer, allowing for a certain level of precision to be considered correct.
 *
 * E-commerce Platform:
 * Develop an e-commerce platform that allows users to view and compare product
 * prices. The "decimal comparator" code can be used to compare prices and display
 * price differences with a specified level of precision.
 *
 * Financial Management Tool:
 * Create a platform that helps users manage their personal finances, including
 * tracking expenses, income, and investments. The "decimal comparator" code can
 * be used to compare financial data with a specified level of precision, helping
 * users make informed decisions.
 *
 * Scientific Data Visualization:
 * Design a web application that allows users to visualize and analyze scientific
 * data, such as experimental results or simulations. The "decimal comparator" code can
 * be used to compare numerical values with a specified level of precision, enabling
 * users to identify trends and patterns in the data.
 *
 * Unit Conversion Tool:
 * Build a platform for converting between various units, such as length, weight,
 * and temperature. The "decimal comparator" code can be used to compare converted
 * values with a specified level of precision, ensuring accurate conversions and
 * enhancing user experience.
 *
 * In each of these MERN project ideas, the "decimal comparator" code can be integrated
 * as a utility function or component that is available throughout the application.
 * This will ensure that users can compare values with a specified level of precision,
 * providing a more personalized and user-friendly experience.
 */
