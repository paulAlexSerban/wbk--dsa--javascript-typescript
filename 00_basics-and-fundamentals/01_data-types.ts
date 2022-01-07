/**
 * NOTA BENE:
 * For a complete description of the concepts practiced in this ticket check the Java / BasicJava / Basics-and-Fundamentals
 */

/**
 * Integer/Number
 * it is whole number
 * it has a MIN_VALUE and a MAX_VALUE to store numbers
 */
function integer_data_types() {
  const firstInteger = 1000;
  console.log(firstInteger);

  const minimumInteger = Number.MIN_VALUE; // -2147483648
  const maximumInteger = Number.MAX_VALUE; // 2147483647

  console.log("minimumInteger " + minimumInteger);
  console.log("maximumInteger " + maximumInteger);

  console.log("Busted MIN_VALUE " + (minimumInteger - 1));
  console.log("Busted MAX_VALUE " + (maximumInteger + 1));
}

//=======================================================//

/**
 * Boolean
 * - allows two choices True or False, Yes or No, 1 or 0
 */

function boolean_data_types() {
  const trueBooleanValue = true;
  console.log(trueBooleanValue);

  const falseBooleanValue = false;
  console.log(falseBooleanValue);
}

function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  if(showResult) {
    console.log(`${phrase}${num1 + num2}`);
    return num1 + num2;
  } else {
    return num1 + num2;
  }
}

const number1 = 8; // if we change the value to a string there will be an error
let number2 : number;
number2 = 5;
const printResults = true;
let phrase: string;
phrase = 'Result is: ';
const add_result: number = add(number1, number2, printResults, phrase);

//=======================================================//

/**
 * String
 * - JavaScript distinguishes between String objects and primitive string values.
 * - a datatype which is not a primitive type it is a Class
 * - a String is a sequence of characters
 * - technically a String is limited by memory of the MAX_VALUE of an Number
 *
 */

function string_data_types() {
  const stringPrimitive = "String Primitive";
  console.log(stringPrimitive);

  const firstStringObject = new String("This is a string object");
  console.log(firstStringObject);
}
