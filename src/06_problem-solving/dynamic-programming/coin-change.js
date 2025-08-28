/**
 * Write a function called coinChange which accepts two parameters: an array of denominations
 * and a value. The function should return the number of ways you can obtain the value from
 * the given collection of denominations. You can think of this as figuring out the number
 * of ways to make change for a given value from a supply of coins.
 */

function coinChange(coins, value) {
    // the fill() method fills all the elements of an array from a start index to an end index
    // with a static value. Work up to ES6.
    let ways = Array(value + 1).fill(0);

    // set the first way to 1 because its 0 and there is 1 way to make 0 with 0 coins
    ways[0] = 1;

    for (let i = 0; i < coins.length; i++) {
        for (let j = 0; j < ways.length; j++) {
            if (coins[i] <= j) {
                ways[j] = ways[j - coins[i]] + ways[j];
            }
        }
    }
    return ways[ways.length - 1];
}

const denominations = [1, 5, 10, 25];

console.log(coinChange(denominations, 1)); // 1
coinChange(denominations, 2); // 1
coinChange(denominations, 5); // 2
coinChange(denominations, 10); // 4
coinChange(denominations, 25); // 13
coinChange(denominations, 45); // 39
console.log(coinChange(denominations, 100)); // 242
coinChange(denominations, 145); // 622
coinChange(denominations, 1451); // 425663
coinChange(denominations, 14511); // 409222339
