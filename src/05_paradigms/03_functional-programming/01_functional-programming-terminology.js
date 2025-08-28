/**
 * Understand Functional Programming Terminology
 * The FCC Team had a mood swing and now wants two types of tea: green tea and black tea.
 * General Fact: Client mood swings are pretty common.
 * With that information, we'll need to revisit the getTea function from last challenge to handle various tea requests.
 * We can modify getTea to accept a function as a parameter to be able to change the type of tea it prepares.
 * This makes getTea more flexible, and gives the programmer more control when client requests change.
 *
 * But first, let's cover some functional terminology:
 *
 * Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.
 * You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.
 *
 * Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions.
 * In JavaScript, all functions are first class functions.
 *
 * The functions that take a function as an argument, or return a function as a return value are called higher order functions.
 * When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a `lambda`.
 */

/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }

    return teaCups;
};

// Add your code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); // :)
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :)
// Add your code above this line

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

/**
 * Code Explanation
 * In the solution above we passed in the functions `prepareGreenTea()` and `prepareBlackTea()` as parameters or callback functions for the `getTea()`
 * functions being assigned to our two constant variables tea4BlackTeamFCC and tea4GreenTeamFCC.
 *
 * This way no global variables are changed, and we have the option to add an unlimited number of
 * different choices of `prepareTea()` methods since it is a callback function being passed to the higher order function of `getTea()`.
 */
