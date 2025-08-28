function constructNote(array1, array2) {
    // add whatever parameters you deem necessary - good luck!
    let obj = {};
    let flag = true;

    //use the spread operator to expand the string into an iterable
    [...array1].forEach((item) => {
        obj[item] = (obj[item] || 0) + 1;
    });

    [...array2].forEach((item) => {
        obj[item] = (obj[item] || 0) - 1;
    });

    Object.values(obj).forEach((item) => {
        flag = item > 0 ? false : flag;
    });

    return flag;
}

/**
 * Bonus Constraints:
 * If M is the length of message and N is the length of letters:
 * Time Complexity: O(M+N)
 * Space Complexity: O(N)
 */

console.log(constructNote('aa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true

function findAllDuplicates(arr) {
    let fc = {},
        duplicatesArr = [];
    for (let d of arr) {
        if (d in fc) duplicatesArr.push(d);
        else fc[d] = 1;
    }
    return duplicatesArr;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1

function findPair(array, diff) {
    if (array.length === 0) return false;
    let left = 0;
    let right = array.length - 1;
    //    array.sort((a, b) => {return (a-b)});

    //going one direction
    while (left <= right) {
        if (Math.abs(array[right] - array[left]) === Math.abs(diff)) {
            return true;
        } else if (array[right] - array[left] > Math.abs(diff)) {
            right--;
        } else if (array[right] - array[left] < Math.abs(diff)) {
            left++;
        }
    }

    left = 0;
    right = array.length - 1;

    //moving pointer in oposite direction/logic
    while (left <= right) {
        if (Math.abs(array[right] - array[left]) === Math.abs(diff)) {
            return true;
        } else if (array[right] - array[left] > Math.abs(diff)) {
            left++;
        } else if (array[right] - array[left] < Math.abs(diff)) {
            right--;
        }
    }

    return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([-4, 4], 7)); // false
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true
console.log(findPair([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)); // false
console.log(findPair([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)); // true
console.log(findPair([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)); // true
