/**
 * Slice and Splice
 * You are given two arrays and an index.
 * Copy each element of the first array into the second array, in order.
 * Begin inserting elements at index n of the second array.
 * Return the resulting array. The input arrays should remain the same after the function runs.
 */

function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}

/**
 * Code Explanation
 * Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensurethat neither arr or arr2 have been mutated.
 * Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, localArray.
 * Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of localArray.
 * We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.
 * Finally, we return the localArray and end the function.
 */

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
