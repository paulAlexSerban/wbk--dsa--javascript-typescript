const persons = [
    { firstname: 'Mary', gender: 'female' },
    { firstname: 'John', gender: 'male' },
    { firstname: 'Mary', gender: 'female' },
    { firstname: 'George', gender: 'male' },
];

const males = [];

for (let i = 0; i < persons.length; i++) {
    if (persons[i].gender === 'male') {
        males.push(persons[i]);
    }
}

console.log(males);

console.log('------------------------');

const females = persons.filter(function (person) {
    return person.gender === 'female';
});

console.log(females);
