/**
 * function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
 */

function areThereDuplicates() {
    let collection = {};
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    for (let key in collection) {
        if (collection[key] > 1) return true;
    }
    return false;
}

/**
 * time complexity - O(n)
 * space complexity - O(n)
 */

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
