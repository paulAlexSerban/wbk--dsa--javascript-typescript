(() => {
    // Create a shopping list in the variable "shoppingList".
    // The list should be a multi-dimensional array containing several sub-arrays.
    //
    // The first element in each sub-array should contain a string with the name of the item.
    // The second element should be a number representing the quantity.
    //
    // A multi-dimensional array is created.
    // The array consists of five arrays inside, each composed of a string and an integer, in the same order.

    let shoppingList = [
        ['Canned Beans', 3],
        ['Milk Gallon', 1],
        ['Cereal', 2],
        ['Toilet Paper', 12],
        ['Sack of Rice', 1],
    ];

    // Improved version: create a function to display the shopping list.

    function displayShoppingList(list) {
        console.log('Shopping List:');
        for (let i = 0; i < list.length; i++) {
            let itemName = list[i][0];
            let itemQuantity = list[i][1];
            console.log(`${i + 1}. ${itemName}: ${itemQuantity}`);
        }
    }

    // Call the function to display the shopping list.
    displayShoppingList(shoppingList);
})();
