/**
 * Sum All Numbers in a Range
 *
 * We'll pass you an array of two numbers. Return the sum of those two numbers
 * plus the sum of all the numbers between them. The lowest number will not
 * always come first.
 *
 * For example, sumAll([4,1]) should return 10 because sum of all the numbers
 * between 1 and 4 (both inclusive) is 10.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
function sumAll(arr) {
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

// Test case:
console.log(sumAll([4, 1])); // Output: 10

/**
 * This code defines a function sumAll that takes an array arr with two numbers
 * and returns the sum of all the numbers between them, including the numbers
 * themselves. The function first calculates the minimum and maximum numbers in
 * the array using Math.min() and Math.max(). Then, it iterates through all the
 * numbers between the minimum and maximum, adding them to the variable sum.
 * Finally, it returns the calculated sum.
 */

/**
 * MERN Project Ideas:
 *
 * Event Planning Platform:
 * Develop an event planning platform that allows users to create events and
 * manage budgets. Use the "Sum All Numbers in a Range" code to calculate the
 * total cost of items within a specific price range, helping users to estimate
 * and control their event expenses.
 *
 * Goal Tracking Application:
 * Create a goal tracking app that lets users set and track personal or
 * professional goals with milestones. Implement the code to calculate the sum
 * of all numbers between two milestone numbers, allowing users to estimate the
 * total effort or resources required to achieve a particular goal.
 *
 * Fitness Progress Tracker:
 * Build a fitness tracking web application that monitors users' progress in
 * various exercises, such as running or weight lifting. Use the
 * "Sum All Numbers in a Range" code to calculate the total distance or weight
 * lifted between two milestones, helping users visualize their progress over time.
 *
 * E-commerce Discounts Calculator:
 * Develop an e-commerce platform where sellers can offer discounts on products
 * based on quantity. Implement the code to calculate the total discount amount
 * for a given range of quantities, enabling users to make informed decisions
 * about their purchases.
 *
 * Educational Progress Tracker:
 * Create an educational platform that allows students and teachers to track academic
 * progress, such as grades or test scores. Use the "Sum All Numbers in a Range"
 * code to calculate the sum of all scores between two milestones, providing a
 * visual representation of a student's overall performance.
 *
 * In each of these projects, you can integrate the given code to calculate the sum
 * of all numbers in a range and apply it to various contexts, such as event planning,
 * goal tracking, fitness progress, e-commerce discounts, or educational progress.
 * This can help users understand the concept and its applications in different fields.
 */
