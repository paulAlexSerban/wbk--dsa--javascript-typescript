const persons = [
    { firstName: 'John', age: 28 },
    { firstName: 'Mary', age: 20 },
    { firstName: 'Nick', age: 25 },
    { firstName: 'Jane', age: 40 },
];

let everyPersonCanVote = true;
let onlySomePersonsCanVote = false;

for (let i = 0; i < persons.length; i++) {
    if (persons[i].age < 18) {
        everyPersonCanVote = false;
        onlySomePersonsCanVote = true;
    }
}

console.log('Every person can vote - ' + everyPersonCanVote);
console.log('Only some persons can vote - ' + onlySomePersonsCanVote);

let x = 0;

const every = persons.every(function (person) {
    console.log(++x + ' - ' + (person.age >= 18));
    return person.age >= 18;
});

console.log(every);
