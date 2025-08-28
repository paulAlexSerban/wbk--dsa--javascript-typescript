/**
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 *
 * @param {Number} a
 * @returns
 */
function isPositive(a) {
    try {
        if (a < 0) {
            throw 'Negative Error';
        } else if (a == 0) {
            throw 'Zero Error';
        } else {
            return 'YES';
        }
    } catch (err) {
        return err;
    }
}

console.log(isPositive(-1));
