// Code Logic:
// Start with the largest denomination
// Once the total can not use the largest, move to the second largest.
// Work your way down until there are no more coins.

/**
 * Greedy Algorithm: Coin Change
 * @param {*} coins
 * @param {*} amount
 * @returns
 */
function minCoinChange(coins, amount) {
    // we will return this array at the end of the function
    let result = [];

    // select the largest coin value (coins array must be sorted)
    let coin = coins[coins.length - 1];

    // accumulator - keeps track of the amount we've allocated so far
    let total = 0;

    while (coins.length && !(total === amount)) {
        if (total + coin <= amount) {
            total += coin;
            result.push(coin);
        } else {
            // remove the current coin from the coins array
            coins.pop();
            // update coin to next largest coin value
            coin = coins[coins.length - 1];
        }
    }

    // if we have run out of coins, and we have not made up the amount required,
    // it means that we can not make up the amount with the coins we had.
    if (!coins.length && total !== amount) {
        return -1;
    }

    return result;
}

console.log(minCoinChange([1, 5, 10, 25], 36)); // [25, 10, 1]
console.log(minCoinChange([1, 5, 10, 25], 35)); // [25, 10]
console.log(minCoinChange([1, 5, 10, 25], 37)); // [25, 10, 1, 1]
console.log(minCoinChange([1, 5, 10, 25], 38)); // [25, 10, 1, 1, 1]
