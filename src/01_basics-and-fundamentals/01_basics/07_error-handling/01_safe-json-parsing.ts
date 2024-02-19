/**
 * Write a TypeScript function named safeParse that attempts to parse a JSON string. The function should
 * return the parsed object if the JSON string is valid. If the JSON string is invalid, it should catch
 * the error and return null. Regardless of the outcome, it should log a message indicating that a
 * parsing attempt was made.
 */

/**
 * Requirements:
 * Use a try...catch...finally block.
 * The function should accept one parameter: a JSON string to parse.
 * Use console.log for logging.
 */

/**
 * const result1 = safeParse('{"name": "John"}');
 * console.log(result1); // Should log the object {name: "John"}
 *
 * const result2 = safeParse('Invalid JSON');
 * console.log(result2); // Should log null
 */

// Solution

export const safeParse = (json: string) => {
    console.log('Attempting to parse JSON...');
    try {
        return JSON.parse(json);
    } catch (error) {
        console.log('Error parsing JSON:', error);
        return null;
    } finally {
        console.log('Parsing attempt completed.');
    }
};

const result1 = safeParse('{"name": "John"}');
console.log(result1); // Should log the object {name: "John"}

const result2 = safeParse('Invalid JSON');
console.log(result2); // Should log null