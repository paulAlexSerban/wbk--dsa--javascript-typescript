const tools = require('../tools');

/**
 * calculate the sum from 1 up to (and including) some number n
 */

function addUpTo(n) {
    let total = 0;
    for (var i = 0; i < n; i++) {
        total += i;
    }
    return total;
}

// TEST
const startTimer = process.hrtime();
addUpTo(100000);
tools.getProcessingTimeInMS(process.hrtime(startTimer));

/**
 * the number of operations grows as n grows
 * the number of operations is eventually bounded by a multiple of n
 * f(n) = n
 * O(n)
 */
