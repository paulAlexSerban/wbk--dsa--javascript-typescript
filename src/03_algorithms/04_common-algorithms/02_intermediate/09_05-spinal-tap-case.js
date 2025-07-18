/**
 * Spinal Tap Case
 *
 * This function converts a string to spinal case. Spinal case is all lowercase words joined by dashes.
 *
 * @param {string} str - The input string to be converted to spinal case
 * @returns {string} The string converted to spinal case
 */

function spinalCase(str) {
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Split on whitespace and underscores and join with dash
    return str
        .toLowerCase()
        .split(/(?:_| )+/)
        .join('-');
}

// Test cases
console.log(spinalCase('This Is Spinal Tap')); // "this-is-spinal-tap"
console.log(spinalCase('thisIsSpinalTap')); // "this-is-spinal-tap"
console.log(spinalCase('The_Andy_Griffith_Show')); // "the-andy-griffith-show"
console.log(spinalCase('Teletubbies say Eh-oh')); // "teletubbies-say-eh-oh"

/**
 * MERN Project Ideas
 *
 * Blogging Platform:
 * Create a blogging platform where users can create and manage blog posts.
 * The "spinal case" code can be used to generate URL slugs for each post based on their titles.
 *
 * Content Management System:
 * Develop a content management system that allows users to create and manage web pages and articles.
 * The "spinal case" code can be used to generate URL slugs for each page or article based on their titles.
 *
 * E-commerce Platform:
 * Build an e-commerce platform where users can list and sell products.
 * The "spinal case" code can be used to generate URL slugs for each product based on their names.
 *
 * Forum or Q&A Platform:
 * Design a forum or Q&A platform where users can post questions or discussions and reply to them.
 * The "spinal case" code can be used to generate URL slugs for each thread based on their titles.
 *
 * Portfolio Builder:
 * Create a portfolio builder app that enables users to create and manage their online portfolio.
 * The "spinal case" code can be used to generate URL slugs for each portfolio project based on their titles.
 *
 * In each of these MERN project ideas, the "spinal case" code can be integrated
 * as a utility function or component that is available throughout the application.
 * This will ensure that unique and user-friendly URL slugs are generated for various types of content.
 */
