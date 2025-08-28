/**
 * Falsy Bouncer
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 * Hint: Try converting each value to a Boolean.
 */

function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}

console.log(bouncer([7, 'ate', '', false, 9]));
/**
 * Code Explanation
 * We create a new empty array.
 * We use a for cycle to iterate over all elements of the provided array (arr).
 * We use the if statement to check if the current element is truthy 2.5k or falsy 3.7k.
 * If the element is truthy, we push it to the new array (newArray). This result in the new array (newArray) containing only truthy elements.
 * We return the new array (newArray).
 */
