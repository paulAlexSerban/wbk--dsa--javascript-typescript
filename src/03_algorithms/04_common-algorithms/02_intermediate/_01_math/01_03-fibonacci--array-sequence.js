/**
 * Return a fibonacci sequence as an array.
 *
 * @param n
 * @return {number[]} The fibonacci sequence as an array
 */
function fibonacci(n) {
    const fibSequence = [1];

    let currentValue = 1;
    let previousValue = 0;

    if (n === 1) {
        return fibSequence;
    }

    let iterationsCounter = n - 1;

    while (iterationsCounter) {
        currentValue += previousValue;
        previousValue = currentValue - previousValue;

        fibSequence.push(currentValue);

        iterationsCounter -= 1;
    }

    return fibSequence;
}

// Test cases:
console.log(fibonacci(1)); // Output: [1]
console.log(fibonacci(2)); // Output: [1, 1]
console.log(fibonacci(3)); // Output: [1, 1, 2]
console.log(fibonacci(4)); // Output: [1, 1, 2, 3]
console.log(fibonacci(5)); // Output: [1, 1, 2, 3, 5]
console.log(fibonacci(6)); // Output: [1, 1, 2, 3, 5, 8]
console.log(fibonacci(7)); // Output: [1, 1, 2, 3, 5, 8, 13]
