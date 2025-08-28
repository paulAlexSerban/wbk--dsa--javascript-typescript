/**
 * A common pattern while working with arrays is when you want to remove
 * items and keep the rest of the array. JavaScript offers the splice method
 * for this, which takes arguments for the index of where to start removing
 * items, then the number of items to remove. If the second argument is not
 * provided, the default is to remove items through the end. However, the
 * splice method mutates the original array it is called on. Here's an example:
 */

const cities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'];
cities.splice(3, 1);

/**
 * Here splice returns the string London and deletes it from the cities array.
 * cities will have the value ["Chicago", "Delhi", "Islamabad", "Berlin"].
 */

/**
 * Rewrite the function nonMutatingSplice by using slice instead of splice.
 * It should limit the provided cities array to a length of 3, and return a
 * new array with only the first three items.
 *
 * Do not mutate the original array provided to the function.
 */

function nonMutatingSplice(cities) {
    return cities.slice(0, 3);
}

const inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'];
console.log(nonMutatingSplice(inputCities));
