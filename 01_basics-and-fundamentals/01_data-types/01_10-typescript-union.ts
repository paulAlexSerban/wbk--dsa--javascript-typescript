/**
 * Union Types
 * ===========
 * Union types allow you to express a value that can be one of several types.
 * We use the vertical bar (|) to separate each type, so number | string | boolean
 * is the type of a value that can be a number, a string, or a boolean.
 */

(() => {
    const combine = (input1: number | string, input2: number | string) => {
        let result: number | string;
        if (typeof input1 === "number" && typeof input2 === "number") {
            result = input1 + input2;
        } else {
            result = input1.toString() + input2.toString();
        }
        return result;
    }

    const combinedAges = combine(30, 26);
    console.log(combinedAges);

    const combinedNames = combine("Max", "Anna");
    console.log(combinedNames);

    const combinedNamesAndAges = combine("Max", 26);
    console.log(combinedNamesAndAges);

    // union types with arrays
    // gives you the flexibility to express an array where the types of values are unioned
    const stuff: (number | string)[] = [1, "2", 3, "4"];

    /*************************/

    // Write a function called greet that accepts a single string OR an array of strings
    // It should print "Hello, <name>" for that single person OR greet each person in the array with the same format

    const greet = (person: string | string[]): void => {
        if (typeof person === "string") {
            console.log(`Hello, ${person}`);
        } else {
            for (let p of person) {
                console.log(`Hello, ${p}`);
            }
        }
    };

    greet("Max");
    greet(["Max", "Anna", "John"]);
})();
