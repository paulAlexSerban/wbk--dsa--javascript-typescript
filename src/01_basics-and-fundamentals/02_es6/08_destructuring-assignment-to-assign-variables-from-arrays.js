/**
 * Destructuring Assignment to Assign Variables from Arrays
 */

/**
 * ES6 makes destructuring arrays as easy as destructuring objects.
 * One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list.
 * Consequently, you cannot pick or choose which elements you want to assign to variables.
 */

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

const [c, d, , , , e] = [1, 2, 3, 4, 5, 6];
console.log(c, d, e);

let f = 8,
    g = 6;
[f, g] = [g, f];

const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward',
];

// The old way:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

// Using Destructuring:
const [gold, silver, bronze] = raceResults;
gold; //'Eliud Kipchoge'
silver; //'Feyisa Lelisa'
bronze; //'Galen Rupp'

const [first, , , fourth] = raceResults;
first; //'Eliud Kipchoge'
fourth; //'Ghirmay Ghebreslassie'

const [winner, ...others] = raceResults;
winner; //'Eliud Kipchoge'
others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]
