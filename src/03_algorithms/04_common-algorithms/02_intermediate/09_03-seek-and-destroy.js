/**
 * Seek and Destroy
 *
 * This function removes elements from the initial array that are of the same value as the provided arguments.
 *
 * @param {Array} initialArray - The initial array to be filtered
 * @param {...*} valuesToDestroy - One or more values to be removed from the initial array
 * @returns {Array} The filtered array with specified values removed
 */

function destroyer(initialArray, ...valuesToDestroy) {
    // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    return initialArray.filter((value) => !valuesToDestroy.includes(value));
}

// Test cases
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer(['tree', 'hamburger', 53], 'tree', 53)); // ["hamburger"]

/**
 * MERN Project Ideas
 *
 * Inventory Management System:
 * Build a web application for managing product inventory. The "seek and destroy" code can be used to filter
 * out products that match certain criteria.
 *
 * Task Management App:
 * Develop a task management app where users can create, edit, and delete tasks. The "seek and destroy" code
 * can be used to remove tasks based on user-selected filters.
 *
 * Social Media Platform:
 * Create a social media platform where users can post and share content. The "seek and destroy" code can be
 * used to filter out posts containing specific keywords or topics.
 *
 * Online Marketplace:
 * Design an online marketplace where users can buy and sell items. The "seek and destroy" code can be used
 * to filter out items based on specific attributes.
 *
 * Data Visualization Dashboard:
 * Build a data visualization dashboard that allows users to analyze and filter data sets. The "seek and destroy"
 * code can be used to remove specific data points based on user-selected criteria.
 *
 * In each of these MERN project ideas, the "seek and destroy" code can be integrated
 * as a utility function or component that is available throughout the application.
 * This will ensure that users can easily filter and manipulate data based on their requirements.
 */
