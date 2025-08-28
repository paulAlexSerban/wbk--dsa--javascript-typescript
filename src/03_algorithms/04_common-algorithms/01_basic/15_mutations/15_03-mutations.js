/**
 * Mutations
 * Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
 * For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
 * The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
 * Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
 */

function mutation([target, test], i = 0) {
    target = target.toLowerCase();
    test = test.toLowerCase();
    return i >= test.length ? true : !target.includes(test[i]) ? false : mutation([target, test], i + 1);
}

console.log(mutation(['hello', 'hey']));
/**
 * Note that nesting ternaries this deeply is typically not recommended in professional code.
 */
