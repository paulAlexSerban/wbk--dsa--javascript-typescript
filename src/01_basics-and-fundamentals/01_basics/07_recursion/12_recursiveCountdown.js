/**
 * Write a recursive function that returns an array containing the numbers 1 through n.
 * This function will need to accept an argument, n, representing the final number.
 * Then it will need to call itself with progressively smaller values of n until it reaches 1.
 *
 * The value [1, 2, 3, 4, 5] will be displayed in the console.
 * At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing.
 * This happens because the push happens last, after the recursive call has returned.
 * At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].
 */

function countUp(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countUp(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countUp(5));

function countDownV1(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countDownV1(n - 1);
        arr.unshift(n);
        return arr;
    }
}

console.log('countDownV1', countDownV1(10));

function countDownV2(n) {
    return n < 1 ? [] : [n].concat(countDownV2(n - 1));
}

console.log('countDownV2', countDownV2(15));

function countDownV3(n) {
    return n < 1 ? [] : [n, ...countDownV3(n - 1)];
}

console.log('countDownV3', countDownV3(20));
