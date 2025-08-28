const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const newNumbersArray = [];

for (let i = 0; i < numbers.length; i++) {
    newNumbersArray.push(numbers[i] * 10);
}
console.log(numbers);
console.log(newNumbersArray);

console.log('------------------------------');

const newMapNumbersArray = numbers.map((number) => {
    return number * 10;
});

console.log(newMapNumbersArray);
