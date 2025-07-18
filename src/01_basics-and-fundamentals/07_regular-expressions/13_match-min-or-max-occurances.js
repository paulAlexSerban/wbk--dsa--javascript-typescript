/**
 * Specify and match UPPER and LOWER number of matches
 *
 * You can specify the lower and upper number of patterns with quantity specifiers.
 * Quantity specifiers are used with curly brackets ({ and }).
 * You put two numbers between the curly brackets - for the lower and upper number of patterns.
 */

/**
 * Example
 *  match only the letter `a` appearing between `3` and `5` times in the string ah, your regex would be `/a{3,5}h/`.
 */

let A4 = 'aaaah';
let A2 = 'aah';
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

/**
 * Example
 * match the entire phrase Oh no only when it has 3 to 6 letter h's
 */

let ohStr = 'Ohhh no';
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

/**
 * Specify only the lower number characters
 * Sometimes you only want to specify the lower number of patterns with no upper limit.
 * To only specify the lower number of patterns, keep the first number followed by a comma.
 */

/**
 * Example
 * - match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
 */

let A4 = 'haaaah';
let A2 = 'haah';
let A100 = 'h' + 'a'.repeat(100) + 'h';
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);

/**
 * Example
 * - match the word Hazzah only when it has four or more letter z's
 */
let haStr = 'Hazzzzah';
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

/**
 * Specify the exact number of matches
 * Sometimes you only want a specific number of matches.
 * To specify a certain number of patterns, just have that one number between the curly brackets.
 */

/**
 * Example
 * to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/
 */

let A4 = 'haaaah';
let A3 = 'haaah';
let A100 = 'h' + 'a'.repeat(100) + 'h';
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);

/**
 * Example
 * match the word Timber only when it has four letter m's.
 */

let timStr = 'Timmmmber';
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
