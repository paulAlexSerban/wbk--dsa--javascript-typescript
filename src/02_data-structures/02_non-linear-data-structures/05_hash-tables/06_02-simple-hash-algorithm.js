/**
 * Simple Hash Algorithm
 * The hash function used in the previous example is a simple one, and it's not very performant.
 */

function simpleHash(input) {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        hash += input.charCodeAt(i);
    }
    return hash;
}

console.log(simpleHash('hello')); // Outputs: 532

/**
 * Another Simple Hash Algorithm
 */

function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        // map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

console.log(hash('pink', 10)); // 0

/**
 * Refining Our Hash
 * The hash function we created is pretty good, but it only hashes strings and it's not constant time.
 * Let's make it better by making it constant time and by accepting all types of keys.
 */

function hashV2(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

console.log(hashV2('pink', 10)); // 0
console.log(hashV2('orangered', 10)); // 7
console.log(hashV2('cyan', 10)); // 3
