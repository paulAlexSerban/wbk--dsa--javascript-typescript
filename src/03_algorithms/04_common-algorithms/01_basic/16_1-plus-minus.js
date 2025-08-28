/**
 * The "Plus Minus" challenge on HackerRank is to calculate and print the
 * fractions of an array's elements that are positive, negative, and zero.
 * Given an integer array arr, you should print the ratio of positive, negative,
 * and zero elements in the array on separate lines, each with a precision
 * of 6 decimal places.
 *
 * Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line with 6 places after the decimal.
 *
 * Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.
 *
 * Example:
 * arr = [1, 1, 0, -1, -1]
 *
 * There are n = 5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000. Results are printed as:
 *
 * 0.400000
 * 0.400000
 * 0.200000
 *
 * Function Description
 *
 * Complete the plusMinus function.
 *
 * plusMinus has the following parameter(s):
 * - int arr[n]: an array of integers
 *
 * Print
 * - Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.
 *
 * Input Format
 *
 * The first line contains an integer, n, the size of the array.
 * The second line contains n space-separated integers that describe arr[n].
 *
 * Constraints
 *
 * 0 < n <= 100
 * -100 <= arr[i] <= 100
 *
 * Output Format
 *
 * Print the following 3 lines, each to 6 decimals:
 *
 * 1. proportion of positive values
 * 2. proportion of negative values
 * 3. proportion of zeros
 *
 * Here's a JavaScript solution for the "Plus Minus" challenge:
 */

function plusMinus(arr) {
    // Initialize variables
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    const { length } = arr;

    // Count the number of positives, negatives, and zeros
    for (let i = 0; i < length; i++) {
        if (arr[i] > 0) {
            positives++;
        } else if (arr[i] < 0) {
            negatives++;
        } else {
            zeros++;
        }
    }

    // Print the ratios
    console.log((positives / length).toFixed(6));
    console.log((negatives / length).toFixed(6));
    console.log((zeros / length).toFixed(6));
}

// Test case:
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);

/**
 * This code defines a function plusMinus that takes an array arr and calculates
 * the ratio of positive, negative, and zero elements in the array. The function
 * initializes three counters positives, negatives, and zeros to store the count
 * of positive, negative, and zero elements, respectively. It iterates through
 * the array and updates the counters based on the element's sign.
 *
 * Finally, the function prints the ratios of positive, negative, and zero elements
 * in the array on separate lines, each with a precision of 6 decimal places using toFixed(6).
 */

/**
 * MERN Project Ideas
 *
 * Survey Analysis Application:
 * Develop a survey analysis application that allows users to create surveys, collect
 * responses, and analyze the results. Use the "Plus Minus" code to calculate the
 * ratio of positive, negative, and neutral sentiments in the survey responses,
 * helping users understand and interpret the feedback effectively.
 *
 * Customer Feedback Management System:
 * Create a customer feedback management system that allows businesses to collect,
 * manage, and analyze feedback from their customers. Implement the code to calculate
 * the ratio of positive, negative, and neutral feedback, providing businesses with
 * insights into their customer satisfaction levels and areas for improvement.
 *
 * Financial Portfolio Analysis Tool:
 * Build a financial portfolio analysis tool that allows users to track and analyze
 * their investment portfolios. Use the "Plus Minus" code to calculate the ratio of
 * stocks with positive, negative, and neutral returns, helping users make informed
 * decisions about their investments and manage their portfolios effectively.
 *
 * Social Media Sentiment Analysis Platform:
 * Develop a social media sentiment analysis platform that analyzes the sentiment
 * of social media posts and comments related to a specific topic or keyword. Implement
 * the code to calculate the ratio of positive, negative, and neutral sentiments,
 * providing users with insights into public opinion and trends.
 *
 * Employee Performance Evaluation System:
 * Create an employee performance evaluation system that allows managers to assess
 * their employees based on various performance metrics. Use the "Plus Minus" code
 * to calculate the ratio of positive, negative, and neutral performance evaluations,
 * helping managers identify areas for improvement and guide employee development.
 *
 * In each of these projects, you can integrate the given code to calculate the ratio
 * of positive, negative, and neutral elements in an array and apply it to various
 * contexts, such as survey analysis, customer feedback management, financial portfolio
 * analysis, social media sentiment analysis, or employee performance evaluation.
 * This can help users understand the concept and its applications in different fields.
 */
