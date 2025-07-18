/**
 * Use the delete Keyword to Remove Object Properties
 * If we wanted to remove the apples key, we can remove it by using the delete keyword
 */

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27,
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
