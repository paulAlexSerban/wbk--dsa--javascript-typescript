/**
 * A group of criminals escaped from jail and ran away, but you don't know how many.
 * However, you do know that they stay close together when they are around other people.
 * You are responsible for finding all of the criminals at once
 */

let regexCriminals = /C+/; // Change this line
let string = 'P1P5P4CCCcP2P6P3';

console.log(string.match(regexCriminals));

string = 'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3';

console.log(string.match(regexCriminals));
