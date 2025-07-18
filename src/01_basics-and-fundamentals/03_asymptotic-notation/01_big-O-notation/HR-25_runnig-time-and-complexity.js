function isPrime(n) {
    // Special cases: 1 and 2 are the only primes that are not odd.
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    }

    // If n is even (except for 2), it is not prime.
    if (n % 2 === 0) {
        return false;
    }

    // Check odd numbers up to the square root of n to see if they divide n.
    // If any do, then n is composite (not prime).
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    // If no divisors are found, then n is prime.
    return true;
}

function processData(input) {
    const lines = input.split('\n');
    const T = parseInt(lines[0]);
    for (let i = 1; i <= T; i++) {
        const n = parseInt(lines[i]);
        if (isPrime(n)) {
            console.log('Prime');
        } else {
            console.log('Not prime');
        }
    }
}

// Example usage:
const input = '3\n12\n5\n7\n';
processData(input); // Outputs "Not prime", "Prime", "Prime"

/**
 * The isPrime function checks whether a given number n is prime. We first handle
 * the special cases of n = 1 and n = 2 separately, since those are the only
 * primes that are not odd. Then we check whether n is even, since all even
 * numbers except 2 are composite. Finally, we iterate over odd numbers starting
 * from 3 up to the square root of n, checking whether n is divisible by any of them.
 * If we find a divisor, we know that n is composite and can return false. Otherwise,
 * we know that n is prime and can return true.
 *
 * The processData function takes the input as a string and processes it to extract the
 * number of test cases T and the values to test for primality. It then iterates over
 * each value and checks whether it is prime using the isPrime function. If the value
 * is prime, it outputs "Prime". Otherwise, it outputs "Not prime".
 *
 * In the example usage, we define an input string with three test cases and pass it
 * to the processData function. The output will be "Not prime", "Prime", "Prime" for
 * the values 12, 5, and 7, respectively.
 */
