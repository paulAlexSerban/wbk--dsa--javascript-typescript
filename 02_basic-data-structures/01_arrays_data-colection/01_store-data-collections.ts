/**
 * ARRAYS Data Structures
 *
 * One-dimensional Array
 * Meaning it only has one level, or that it does not have any other arrays nested within it
 */

/**
 * Unions
 * These types are untagged.
 * In other words, they are not discriminated unions like data in Haskell.
 * However, you can often discriminate types in a union using built-in tags or other properties.
 *
 * Eg. `(string | number | boolean)[]`
 */

let simpleArray: (string | number | boolean)[];
simpleArray = ["one", 2, "three", true, false];

/**
 * Multi-dimensional Array
 * An array that contains other arrays.
 * Notice that this array also contains JavaScript objects
 */

/**
 * Any
 * Any type of value, no specific type assignment.
 * Can use whenever you don’t want a particular value to cause typechecking errors.
 * When a value is of type `any`, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal.
 * The `any` type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay
 */
let complexArray: any[];
complexArray = [
  [
    {
      one: 1,
      two: 2,
    },
    {
      three: 3,
      four: 4,
    },
  ],
  [
    {
      a: "a",
      b: "b",
    },
    {
      c: "c",
      d: "d",
    },
  ],
];

/**
 * The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command.
 */
let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0]; // store the value of item 0 in `ourArray`
ourArray[1] = "not b anymore"; // change the value in item 1 in `ourArray`

// Unions Example

function combine(num1: number | string, num2: number | string) {
  let result: any;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const combinedArgs = combine(30, 26);
const combinedNames = combine("Max", "Ana");

/** Literal types
 *
 * You do nor just way that a certain variable or parameter should hold a number or  a string, but when you are very clear of the values it should hold
 * (1) - Eg. `resultConversion: 'as-number' | 'as-text'`
 * 
 * Type aliases
 * (2) - Eg. `type Combinable = number | string;`
 */

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine_literal(
  num1: Combinable, 
  num2: Combinable,
  resultConversion: ConversionDescriptor /* 1 */) {
  let result: any;
  if (typeof num1 === "number" && typeof num2 === "number" || resultConversion === "as-number") {
    return result = +num1 + +num2;
  } else if(typeof num1 === "string" && typeof num2 === "string" || resultConversion === "as-text") {
    return result = num1.toString() + num2.toString();
  }

  // if(resultConversion === 'as-number') {
  //   return +(result); // OR parseFloat(result)
  // } else {
  //   return toString.toString();
  // }
}

const combinedArgs_literal = combine_literal(30, 26, 'as-number');
const combinedStringArgs_literal = combine_literal('30', '26', 'as-number');
const combinedNames_literal = combine_literal("Max", "Ana", 'as-text');
