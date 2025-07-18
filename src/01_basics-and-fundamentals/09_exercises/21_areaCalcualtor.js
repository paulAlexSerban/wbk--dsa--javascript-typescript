/**
 * Area Calculator
 *
 * This function calculates the area of a shape given its type and dimensions.
 * Supported shapes are: circle, square, and rectangle.
 *
 * @param {string} shape - The type of shape ("circle", "square", "rectangle")
 * @param {number} dim1 - The first dimension (radius for circle, side for square, width for rectangle)
 * @param {number} [dim2] - The second dimension (optional, only needed for rectangle - height)
 * @returns {number|null} - Returns the calculated area or null if the shape is not supported
 */

// areaCalculator function
// takes 3 arguments: shape, dim1, dim2
// returns the area of the shape
function areaCalculator(shape, dim1, dim2) {
    // declare a variable called area and set it to null
    let area = null;

    // switch statement to determine the shape
    switch (shape) {
        // if the shape is a circle
        case 'circle':
            // set area equal to PI times the radius squared
            area = Math.PI * Math.pow(dim1, 2);
            // exit the switch statement
            break;
        // if the shape is a square
        case 'square':
            // set area equal to the length of one side squared
            area = Math.pow(dim1, 2);
            // exit the switch statement
            break;
        // if the shape is a rectangle
        case 'rectangle':
            // set area equal to the product of the two dimensions
            area = dim1 * dim2;
            // exit the switch statement
            break;
        // if the shape is something else
        default:
            // do nothing
            break;
    }

    // return the area
    return area;
}

// Test cases
console.log(areaCalculator('circle', 5)); // 78.53981633974483
console.log(areaCalculator('square', 4)); // 16
console.log(areaCalculator('rectangle', 3, 6)); // 18
console.log(areaCalculator('triangle', 3, 4)); // null

/**
 * MERN Project Ideas
 *
 * Home Design App:
 * Build a web application that allows users to design and visualize their home layout.
 * The "area calculator" code can be used to calculate the area of different rooms or spaces.
 *
 * Landscaping Planning Tool:
 * Develop a platform for planning and visualizing outdoor landscaping projects.
 * The "area calculator" code can be used to estimate the area of various landscape features.
 *
 * Real Estate Platform:
 * Create a real estate platform where users can find and compare properties.
 * The "area calculator" code can be used to calculate the area of different property features.
 *
 * Floor Plan Creator:
 * Design a web application for creating and editing floor plans.
 * The "area calculator" code can be used to calculate the area of different rooms or sections.
 *
 * Construction Estimation App:
 * Build a platform that helps users estimate the cost of construction projects.
 * The "area calculator" code can be used to calculate the area of different construction elements.
 *
 * In each of these MERN project ideas, the "area calculator" code can be integrated
 * as a utility function or component that is available throughout the application.
 * This will ensure that users can calculate area-related data, providing a more
 * personalized and user-friendly experience.
 */
