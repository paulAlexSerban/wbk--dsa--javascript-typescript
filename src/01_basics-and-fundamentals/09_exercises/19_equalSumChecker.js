/**
 * Equal Sum Checker
 *
 * This function checks if any two numbers in an array have the same sum as a given target value.
 *
 * @param {number[]} numbers - An array of numbers
 * @param {number} target - The target sum value
 * @returns {boolean} - Returns true if there is a pair of numbers with the same sum as the target value, otherwise returns false
 */

// Start with a function that takes in two parameters: an array of numbers and a target number
function equalSumChecker(numbers, target) {
    // Get the length of the array
    const numbersLength = numbers.length;
    // Start a loop that will go through each number in the array, except for the last one
    for (let i = 0; i < numbersLength - 1; i++) {
        // Start a second loop that will go through each number in the array, starting from the next number after i
        for (let j = i + 1; j < numbersLength; j++) {
            // Check if the sum of the current number and the next number is equal to the target number
            if (numbers[i] + numbers[j] === target) {
                // If it is, return true
                return true;
            }
        }
    }
    return false;
}

// Test cases
console.log(equalSumChecker([1, 2, 3, 4], 5)); // true
console.log(equalSumChecker([1, 2, 3, 4], 8)); // false
console.log(equalSumChecker([3, 5, 7, 9], 12)); // true
console.log(equalSumChecker([4, 6, 8, 10], 14)); // true
console.log(equalSumChecker([2, 4, 6, 8], 9)); // false

/**
 * MERN Project Ideas
 *
 * Expense Sharing App:
 * Build a web application that allows users to split expenses with their friends or roommates.
 * The "equal sum checker" code can be used to verify if a shared expense can be split evenly among the group.
 *
 * Stock Trading Platform:
 * Develop a platform that allows users to trade stocks and analyze stock performance.
 * The "equal sum checker" code can be used to identify potential trading opportunities based on the target gain or loss.
 *
 * Online Auction Platform:
 * Create an auction platform that allows users to bid on items.
 * The "equal sum checker" code can be used to determine if any two bids have the same sum, and decide the winning bid accordingly.
 *
 * Party Planning App:
 * Design a web application that helps users plan and organize events or parties.
 * The "equal sum checker" code can be used to check if the total cost of the event can be evenly split among the attendees.
 *
 * Currency Exchange Platform:
 * Build a platform for exchanging currencies and tracking exchange rates.
 * The "equal sum checker" code can be used to compare exchange rates and identify potential arbitrage opportunities.
 *
 * In each of these MERN project ideas, the "equal sum checker" code can be integrated
 * as a utility function or component that is available throughout the application.
 * This will ensure that users can verify if a given condition is met, providing a more
 * personalized and user-friendly experience.
 */
