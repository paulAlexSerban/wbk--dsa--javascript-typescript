/**
 * Wherefore art thou
 *
 * This function looks through an array of objects (first argument) and returns an array of
 * all objects that have matching name and value pairs (second argument).
 *
 * @param {Array} collection - An array of objects
 * @param {Object} source - An object with name and value pairs to match
 * @returns {Array} An array of objects that have matching name and value pairs
 */
function whatIsInAName(collection, source) {
    // Filter the collection
    return collection.filter((obj) => {
        for (let key in source) {
            // If the property is not found or the values do not match, return false
            if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
                return false;
            }
        }
        // Otherwise, return true
        return true;
    });
}

// Test case
const exampleCollection = [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
];

console.log(whatIsInAName(exampleCollection, { last: 'Capulet' })); // [{ first: "Tybalt", last: "Capulet" }]

/**
 * MERN Project Ideas
 *
 * Employee Directory:
 * Create an employee directory app that allows users to filter and search for employees based on specific criteria.
 * The "wherefore art thou" code can be used to filter employee records based on matching name and value pairs.
 *
 * Product Catalog:
 * Develop a product catalog app where users can search for products based on various attributes.
 * The "wherefore art thou" code can be used to filter products based on matching name and value pairs.
 *
 * Movie Database:
 * Build a movie database app that allows users to search for movies based on various criteria, such as genre, director, or year.
 * The "wherefore art thou" code can be used to filter movies based on matching name and value pairs.
 *
 * Recipe Finder:
 * Design a recipe finder app that enables users to search for recipes based on specific ingredients or other criteria.
 * The "wherefore art thou" code can be used to filter recipes based on matching name and value pairs.
 *
 * Real Estate Listing Platform:
 * Create a real estate listing platform where users can search for properties based on different attributes, such as location, price, or size.
 * The "wherefore art thou" code can be used to filter properties based on matching name and value pairs.
 *
 * In each of these MERN project ideas, the "wherefore art thou" code can be integrated
 * as a utility function or component that is available throughout the application.
 * This will ensure that users can easily filter and search for items based on specific criteria.
 */
