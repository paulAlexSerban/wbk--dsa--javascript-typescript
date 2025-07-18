/**
 * Diff Two Arrays
 *
 * Compare two arrays and return a new array with any items only
 * found in one of the two given arrays, but not both. In other
 * words, return the symmetric difference of the two arrays.
 *
 * Note: You can return the array with its elements in any order.
 */

/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @return {any[]}
 */
function diffArray(arr1, arr2) {
    return (
        arr1
            // Filter out items from arr1 that are in arr2
            .filter((item) => !arr2.includes(item))
            // Concatenate filtered arr1 with filtered arr2
            .concat(arr2.filter((item) => !arr1.includes(item)))
    );
}

// Test case:
const arr1 = [1, 2, 3, 5];
const arr2 = [1, 2, 3, 4, 5];
console.log(diffArray(arr1, arr2)); // Output: [4]

/**
 * This code defines a function diffArray that takes two arrays arr1 and arr2
 * and returns a new array containing the symmetric difference of the two input
 * arrays. The function first filters the items that are unique to arr1 using
 * the filter method and includes method, and then filters the items unique to arr2.
 * Finally, it concatenates the two filtered arrays using the concat method to
 * create the resulting array with the symmetric difference.
 */

/**
 * Collaborative Task Management Application:
 * Develop a task management application that allows users to create, assign,
 * and track tasks in a team setting. Use the "Diff Two Arrays" code to display
 * the differences in assigned tasks between team members, helping users to identify
 * unassigned or overlapping tasks and improve overall team productivity.
 *
 * Inventory Management System:
 * Create an inventory management system that allows users to track and compare
 * product stock across multiple locations or warehouses. Implement the code to
 * find the differences in product availability between two locations, enabling
 * users to make informed decisions about stock transfers or replenishment.
 *
 * Social Network Recommendation Engine:
 * Build a social networking platform that recommends new friends or connections
 * based on shared interests. Use the "Diff Two Arrays" code to compare users'
 * interests and suggest connections with complementary interests, promoting
 * meaningful interactions and engagement on the platform.
 *
 * File Comparison Tool:
 * Develop a file comparison tool that allows users to compare the contents of
 * two files or directories. Implement the code to find differences between the
 * files or directories, helping users identify changes, additions, or deletions
 * and manage their files more efficiently.
 *
 * Recipe Management Application:
 * Create a recipe management application that allows users to store, search,
 * and share recipes. Use the "Diff Two Arrays" code to compare ingredient lists
 * or cooking steps between two recipes, helping users discover variations or
 * alternatives to their favorite dishes.
 *
 * In each of these projects, you can integrate the given code to find the
 * differences between two arrays and apply it in various contexts, such as
 * task management, inventory management, social network recommendations, file
 * comparison, or recipe management. This can help users understand the concept
 * and its applications in different fields.
 */
