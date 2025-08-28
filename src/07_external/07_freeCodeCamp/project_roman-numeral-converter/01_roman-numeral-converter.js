/**
 * Roman Numeral Converter
 * Convert the given number into a roman numeral.
 *
 * All roman numerals answers should be provided in upper-case.
 *
 * Example 1:
 * Input: num = 2
 * Output: "II"
 *
 * Example 2:
 * Input: num = 3
 * Output: "III"
 *
 * Example 3:
 * Input: num = 4
 * Output: "IV"
 *
 * Example 4:
 * Input: num = 5
 * Output: "V"
 *
 * Example 5:
 * Input: num = 9
 * Output: "IX"
 *
 * Example 6:
 * Input: num = 12
 * Output: "XII"
 *
 * Example 7:
 * Input: num = 16
 * Output: "XVI"
 *
 * Example 8:
 * Input: num = 29
 * Output: "XXIX"
 *
 * Example 9:
 * Input: num = 44
 * Output: "XLIV"
 *
 * Example 10:
 * Input: num = 45
 * Output: "XLV"
 *
 * Example 11:
 * Input: num = 68
 * Output: "LXVIII"
 */

(() => {
    const convertToRoman = (num) => {
        const romanNumerals = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1,
        };

        let romanNumeral = '';

        for (let key in romanNumerals) {
            while (num >= romanNumerals[key]) {
                romanNumeral += key;
                num -= romanNumerals[key];
            }
        }

        return romanNumeral;
    };

    // Test cases:
    console.log(convertToRoman(2)); // Output: "II"
    console.log(convertToRoman(3)); // Output: "III"
    console.log(convertToRoman(4)); // Output: "IV"
    console.log(convertToRoman(5)); // Output: "V"
    console.log(convertToRoman(9)); // Output: "IX"
    console.log(convertToRoman(12)); // Output: "XII"
    console.log(convertToRoman(16)); // Output: "XVI"
    console.log(convertToRoman(29)); // Output: "XXIX"
    console.log(convertToRoman(44)); // Output: "XLIV"
})();

/**
 * Algorithm and Concepts
 * The idea is to subtract the largest Roman numeral value that is less than or equal to the number while appending the corresponding Roman numeral to the output string.
 */

(() => {
    function intToRoman(num) {
        const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const syms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        let roman = '';

        for (let i = 0; i < val.length; i++) {
            while (num >= val[i]) {
                num -= val[i];
                roman += syms[i];
            }
        }

        return roman;
    }

    // Example usage
    const testCases = [2, 3, 4, 5, 9, 12, 16, 29, 44, 45, 68];
    for (const testCase of testCases) {
        console.log(`For number ${testCase}, Roman numeral is: ${intToRoman(testCase)}`);
    }
})();

/**
 * Explanation
 *
 * We define two arrays: val for the values and syms for the symbols. They are aligned such that val[i] corresponds to syms[i].
 * We loop through val, and for each value, we subtract it from num as many times as possible while appending the corresponding symbol to the output string.
 *
 * Time Complexity
 * The time complexity is O(n), where n is the input number.
 *
 * Space Complexity
 * The space complexity is O(1), as we use only a constant amount of extra space.
 *
 * This should solve the problem! Feel free to run the code and test it against other examples.
 */
