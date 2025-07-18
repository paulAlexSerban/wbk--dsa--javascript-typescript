const numbers = [100, 200, 300];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

console.log('-------------------------');

const total = numbers.reduce(function (previous, number) {
    return previous + number;
}, 0);
console.log(total);

console.log('-----------------------');

const weeklyEarnings = [750, 642, 823, 1456];
const income = weeklyEarnings.reduce(function (previous, weeklyEarning) {
    return previous + weeklyEarning;
}, 5000);

console.log(income);

console.log('---------------------------');

const firstNames = ['John', 'Jane', 'Mary'];
const lastNames = ['Smith', 'Brown', 'Doe'];
const fullNames = firstNames.reduce((previous, firstName, index) => {
    previous.push(firstName + ' ' + lastNames[index]);
    return previous;
}, []);

console.log(fullNames);
