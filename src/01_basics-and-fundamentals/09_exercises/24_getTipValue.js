/**
 * Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

* PART 1TASKS
* (1) Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement � (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary
operator!)
* (2) Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

* TEST DATA
  § Data 1: Test for bill values 275, 40 and 430
  Hints:
  § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
  § Value X is between 50 and 300, if it's >= 50 && <= 300 �
*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

/**
 * PART 2 TASKS
 * 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
 * 2. And now let's use arrays! So create an array 'bills' containing the test data below
 * 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
 * 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
 */

/**
 * PART 3 tasksYour tasks:
 * 1. Create an array 'bills' containing all 10 test bill values
 * 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
 * 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
 *
 * Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
 */

const calcTip = (bill) => (bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
/* PART 2 TASKS Solution
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[2])
];

const totals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
];

console.log(bills, tips);
console.log((totals));
*/

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));
