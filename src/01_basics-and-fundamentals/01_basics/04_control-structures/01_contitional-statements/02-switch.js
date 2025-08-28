/**
 * @param {String} string
 * @returns
 */

function getLetter(s) {
    let letter;
    if (1 <= s.length && s.length <= 100) {
        switch (true) {
            case /^[aeiou]/.test(s):
                letter = 'A';
                break;
            case /^[bcdfg]/.test(s):
                letter = 'B';
                break;
            case /^[hjklm]/.test(s):
                letter = 'C';
                break;
            default:
                letter = 'D';
        }
    }
    return letter;
}

console.log(`The letter is from group: ${getLetter('k')}`);
