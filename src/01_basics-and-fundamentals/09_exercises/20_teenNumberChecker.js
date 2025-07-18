/**
 * Teen Number Checker
 *
 * This function checks if a given number is a teen number (between 13 and 19 inclusive).
 *
 * @param {number} num - A number to check if it's a teen number
 * @returns {boolean} - Returns true if the number is a teen number, otherwise returns false
 */

// Function to check if number is a teen
function teenNumberChecker(num) {
    // Return true if between 13 and 19
    return num >= 13 && num <= 19;
}

// Test cases
console.log(teenNumberChecker(12)); // false
console.log(teenNumberChecker(13)); // true
console.log(teenNumberChecker(19)); // true
console.log(teenNumberChecker(20)); // false
console.log(teenNumberChecker(25)); // false

/**
 * MERN Project Ideas
 *
 * Teen Social Networking App:
 * Build a web application that serves as a social networking platform specifically for teenagers.
 * The "teen number checker" code can be used to verify the age of users during registration.
 *
 * Online Tutoring Platform:
 * Develop a platform that connects students with tutors for various subjects.
 * The "teen number checker" code can be used to filter tutors or students based on their age group.
 *
 * Teen-focused E-commerce Platform:
 * Create an e-commerce platform that focuses on products and services for teenagers.
 * The "teen number checker" code can be used to offer age-specific recommendations or deals.
 *
 * Age-restricted Content Management System:
 * Design a web application that allows users to manage and share age-restricted content.
 * The "teen number checker" code can be used to verify if users are allowed to access or share certain content.
 *
 * Teen Event Planning App:
 * Build a platform for planning and organizing events and activities specifically for teenagers.
 * The "teen number checker" code can be used to verify the age of attendees or participants.
 *
 * In each of these MERN project ideas, the "teen number checker" code can be integrated
 * as a utility function or component that is available throughout the application.
 * This will ensure that users can verify age-related conditions, providing a more
 * personalized and user-friendly experience.
 */
