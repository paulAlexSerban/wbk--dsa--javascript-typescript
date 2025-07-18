/* -------------------------------------------------- *\
 OBJECTS & KEY-VALUE PAIRS
\* -------------------------------------------------- */

/**
 * At their most basic, objects are just collections of key-value pairs.
 * In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys);
 *
 * Think about things people see every day, like cars, shops, and birds.
 * These are all objects: tangible things people can observe and interact with.
 * What are some qualities of these objects? A car has wheels.
 * Shops sell items. Birds have wings.
 * These qualities, or properties, define what makes up an object.
 * Note that similar objects share the same properties, but may have different values for those properties.
 * For example, all cars have wheels, but not all cars have the same number of wheels.
 * Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts.
 */
console.log('< === Objects in JS === >');

const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true,
};

let duck = {
    name: 'Aflac',
    numLegs: 2,
};

let dog = {
    name: 'George',
    numLegs: 4,
};

console.log({ tekkenCharacter });
console.log({ duck });
console.log({ dog });
