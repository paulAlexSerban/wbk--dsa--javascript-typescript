'use strict';
/**
 * There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
 * PART 1 TASKS
 * (1) Calculate the average score for each team, using the test data below
 * (2) Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
 * (3) Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test  for minimum score, as well as multiple else-if blocks
 * (4) Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
 * 
 * Test data
    § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */

// const scoreDolphins = (97 + 112 + 81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log(`Dolphins won the trophy!`);
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log(`Koalas won the trophy!`);
// } else if (scoreDolphins === scoreKoalas &&
//    scoreKoalas >= 100 && scoreDolphins >= 100) {
//   console.log(`Both teams won the trophy!`);
// } else {
//   console.log(`No one wins the trophy!`);
// }

/**
 *  PART 2 TASKS:
 * (1) Create an arrow function 'calcAverage' to calculate the average of 3 scores
 * (2) Use the function to calculate the average for both teams
 * (3) Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.
 * - Example: "Koalas win (30 vs. 13)"
 * (4) Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
 * (5) Ignore draws this time
 */

const getAverageScore = (a, b, c) => (a + b + c) / 3; // NOTE - without the bracket the function returns the value automatically
console.log(getAverageScore(3, 4, 5));

let scoreDolphins = getAverageScore(97, 112, 81);
let scoreKoalas = getAverageScore(109, 95, 86);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgKoalas, avgDolphins) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win! ( ${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
};

checkWinner(scoreDolphins, scoreKoalas);
