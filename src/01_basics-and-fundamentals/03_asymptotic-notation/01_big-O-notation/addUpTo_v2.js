const tools = require('../tools');

/**
 * calculate the sum from 1 up to (and including) some number n
 */

function addUpTo(n) {
    return (n * (n + 1)) / 2;
}

// TEST
const startTimer = process.hrtime();
addUpTo(100000);
tools.getProcessingTimeInMS(process.hrtime(startTimer));

/**
 * it always has 3 operations
 * we can say that this implementation is constant - f(n) = 1
 * it has a `O(1)`
 */
