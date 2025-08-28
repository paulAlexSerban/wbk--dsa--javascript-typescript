/**
 * Equality Printer
 *
 * This function compares three integers and prints a message depending on their equality.
 *
 * @param {number} num1 - The first number
 * @param {number} num2 - The second number
 * @param {number} num3 - The third number
 */

function equalityPrinter(num1, num2, num3) {
    // If all numbers are equal, print "All numbers are equal"
    if (num1 === num2 && num2 === num3) {
        console.log('All numbers are equal');
        // If all numbers are different, print "All numbers are different"
    } else if (num1 !== num2 && num2 !== num3 && num1 !== num3) {
        console.log('All numbers are different');
        // Otherwise, print "Neither all are equal nor different"
    } else {
        console.log('Neither all are equal nor different');
    }
}

// Test cases
equalityPrinter(1, 1, 1); // All numbers are equal
equalityPrinter(1, 2, 3); // All numbers are different
equalityPrinter(1, 1, 2); // Neither all are equal nor different

/**
 * MERN Project Ideas
 *
 * Voting System:
 * Build a web application for managing voting systems, where users can vote for multiple options.
 * The "equality printer" code can be used to compare vote counts and provide relevant feedback.
 *
 * Online Polling App:
 * Develop an online polling app where users can create polls and vote on different topics.
 * The "equality printer" code can be used to compare and analyze the results of the poll.
 *
 * Quiz Platform:
 * Create a quiz platform where users can create and participate in quizzes.
 * The "equality printer" code can be used to compare the scores of different participants.
 *
 * Grade Comparison Tool:
 * Design a web application for teachers to compare the grades of their students.
 * The "equality printer" code can be used to compare and provide feedback on student performance.
 *
 * Sports Tournament Tracker:
 * Build a platform for tracking the progress of sports tournaments and competitions.
 * The "equality printer" code can be used to compare the scores of different teams and provide relevant feedback.
 *
 * In each of these MERN project ideas, the "equality printer" code can be integrated
 * as a utility function or component that is available throughout the application.
 * This will ensure that users can compare numerical data in a simple and user-friendly way.
 */
