/**
 * About Functional Programming
 * Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT
 *
 * Functional programming is about:
 * Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
 * Pure functions - the same input always gives the same output
 * Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled
 */

/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/

const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }

    return teaCups;
};

const tea4TeamFCC = getTea(40);

console.log(tea4TeamFCC);
