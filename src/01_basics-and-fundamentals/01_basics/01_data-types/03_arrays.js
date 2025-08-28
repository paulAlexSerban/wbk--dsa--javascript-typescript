(() => {
    // Arrays are data structures used to represent a list fo items
    // Arrays are created using square brackets []
    // Arrays can contain any data type
    // Arrays can contain multiple data types
    // Arrays can contain other arrays (nested arrays)
    // Arrays are zero-indexed (the first element is at index 0)
    // Arrays have a length property

    // Declare a constant array called `selectedColors` with four elements: 'red', 'blue', 'green', and 'yellow'.
    const selectedColors = ['red', 'blue', 'green', 'yellow'];

    // Log the third element of the array to the console (arrays are zero-indexed, so the third element is at index 2).
    console.log(selectedColors[2]); // Output: green

    // Log the length of the array (i.e., the number of elements in the array) to the console.
    console.log(selectedColors.length); // Output: 4

    // Improved version: create a function that accepts an array and an index to display the element and the array length.

    function displayArrayElementAndLength(array, index) {
        if (index >= 0 && index < array.length) {
            console.log('Element at index', index, ':', array[index]);
        } else {
            console.log('Invalid index:', index);
        }
        console.log('Array length:', array.length);
    }

    // Call the function with `selectedColors` and the desired index.
    displayArrayElementAndLength(selectedColors, 2);
})();
