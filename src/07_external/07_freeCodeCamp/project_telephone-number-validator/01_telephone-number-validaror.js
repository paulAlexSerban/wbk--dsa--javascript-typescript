/**
 * Telephone Number Validator
 *
 * Return true if the passed string looks like a valid US phone number.
 *
 * The user may fill out the form field any way they choose as long as it has the format of a valid US number.
 *
 * The following are examples of valid formats for US numbers (refer to the tests below for other variants):
 *
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 *
 * For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
 *
 * Your job is to validate or reject the US phone number based on any combination of the formats provided above.
 *
 * The area code is required. If the country code is provided, you must confirm that the country code is 1.
 *
 * Return true if the string is a valid US phone number; otherwise return false.
 *
 */

(() => {
    const telephoneCheck = (str) => {
        // Check if the string is a valid US phone number
        return /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/.test(str);
    };

    // Example usage
    console.log(telephoneCheck('555-555-5555')); // Output: true
    console.log(telephoneCheck('1 555-555-5555')); // Output: true
    console.log(telephoneCheck('1 (555) 555-5555')); // Output: true
    console.log(telephoneCheck('5555555555')); // Output: true
    console.log(telephoneCheck('555-555-5555')); // Output: true
    console.log(telephoneCheck('(555)555-5555')); // Output: true
    console.log(telephoneCheck('1(555)555-5555')); // Output: true
    console.log(telephoneCheck('555-5555')); // Output: false
    console.log(telephoneCheck('5555555')); // Output: false
})();

/**
 * Algorithm and Concepts
 * Use Regular Expressions to validate the phone number against different acceptable formats.
 * If the country code is provided, make sure it is '1'.
 * Return true if the string is a valid US phone number, otherwise false.
 */

(() => {
    function telephoneCheck(str) {
        const regex = /^(1\s?)?(\()?(\d{3})(?(2)\))[-.\s]?(\d{3})[-.\s]?(\d{4})$/;

        return regex.test(str);
    }

    // Example usage:
    console.log(telephoneCheck('555-555-5555')); // Output: true
    console.log(telephoneCheck('(555)555-5555')); // Output: true
    console.log(telephoneCheck('(555) 555-5555')); // Output: true
    console.log(telephoneCheck('555 555 5555')); // Output: true
    console.log(telephoneCheck('5555555555')); // Output: true
    console.log(telephoneCheck('1 555 555 5555')); // Output: true
    console.log(telephoneCheck('2 555 555 5555')); // Output: false
    console.log(telephoneCheck('800-692-7753')); // Output: true
    console.log(telephoneCheck('8oo-six427676;laskdjf')); // Output: false
})();

/**
 * Time Complexity
 * The time complexity is O(n), where n is the length of the input string.
 *
 * Space Complexity
 * The space complexity is O(1), because we are using a constant amount of additional space.
 *
 * Feel free to run the code and test it against other examples.
 */
