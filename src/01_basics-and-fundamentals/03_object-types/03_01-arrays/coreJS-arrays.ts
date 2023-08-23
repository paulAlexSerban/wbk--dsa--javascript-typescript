/**
 * Arrays
 * - Arrays are used to store multiple values in a single variable.
 * - Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
 * - Arrays use numbers to access its "elements". In this example, person[0] returns John:
 * - Arrays are zero based, which means that the first item is referenced with an index of 0.
 * - Arrays are mutable, meaning that we can change the value of its elements.
 */

(()=>{
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: "admin" | "user" | "super-admin";
    posts: Post[];
  }
  

  interface Post {
    id: number;
    title: string;
  }

  
  const defaultUser: User = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    role: "admin",
    posts: [
      {
        id: 1,
        title: "How I eat so much cheese",
      },
      {
        id: 2,
        title: "Why I don't eat more vegetables",
      },
    ],
  };

  const logUser = (user: User) => {
    console.log(
      `id: ${user.id}, firstName: ${user.firstName}, lastName: ${user.lastName}, role: ${user.role}, posts: ${user.posts}`
    );
  }

  logUser(defaultUser);

  
})();

(() => {
  const activeUsers: string[] = ['Max', 'Anna'];
  console.log(activeUsers);
  const booleans: Array<boolean> = [true, false];
  console.log(booleans);

  // Write a function called getTotal that accepts an array of Product types
  // It should return the sum of all the products' prices
  type Product = {
    name: string;
    price: number;
  }
  function getTotal(products: Product[]): number {
    let total = 0;
    for (let product of products) {
      total += product.price;
    }
    return total;
  }

  console.log(getTotal([{ name: 'A', price: 10 }, { name: 'B', price: 20 }]));

  /**********************/
  // Multiple type arrays
  const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
  console.log(importantDates);
  /**********************/

  // union types with arrays
  // gives you the flexibility to express an array where the types of values are unioned

  /**
   * type Stuff = number | string;: This line declares a type alias Stuff which can be either 
   * a number or a string. This is a union type, meaning a value of type Stuff can be either a number or a string.
   * 
   * const stuff: Stuff[] = [1, "2", 3, "4"];: This line declares an array of Stuff. 
   * The array stuff can contain any combination of numbers and strings.
   * 
   * type ExtraStuff = number[] | string[];: This line declares another type alias ExtraStuff which 
   * is a union type that can be either an array of numbers (number[]) or an array of strings (string[]). 
   * A value of type ExtraStuff should be an array, but it can only contain either numbers or strings, 
   * not a mix of both.
   * 
   * const extraStuff: ExtraStuff = [1, 2, 3, 4];: This line declares an array of numbers. This array 
   * is of type ExtraStuff, so it could be an array of numbers or strings, but all elements in the array 
   * must be of the same type.
   * 
   * const extendedStuff: Stuff | ExtraStuff = [1, 2, 3, 4];: This line declares an array of numbers 
   * extendedStuff. The type of extendedStuff is a union of Stuff and ExtraStuff. So extendedStuff 
   * can be an array of numbers, an array of strings, or an array with a mix of numbers and strings. 
   * However, in this case, it's an array of numbers.
   */
  type Stuff = number | string;
  const stuff: Stuff[] = [1, "2", 3, "4"];
  console.log(stuff);
  type ExtraStuff = number[] | string[];
  const extraStuff: ExtraStuff = [1, 2, 3, 4];
  console.log(extraStuff);
  const extendedStuff: Stuff | ExtraStuff = [1, 2, 3, 4];
  console.log(extendedStuff);

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
  console.log(simpleArray);
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

  console.log(complexArray);

  /**
   * The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command.
   */
  let ourArray = ["a", "b", "c"];
  let ourVariable = ourArray[0]; // store the value of item 0 in `ourArray`
  ourArray[1] = "not b anymore"; // change the value in item 1 in `ourArray`
  console.log(ourVariable);
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
  console.log(combinedArgs);
  console.log(combinedNames);
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

    if (typeof num1 === "number" && typeof num2 === "number" || resultConversion === "as-number") {
      let result: any = +num1 + +num2;
      return result;
    } else if (typeof num1 === "string" && typeof num2 === "string" || resultConversion === "as-text") {
      let result: any = num1.toString() + num2.toString()
      return result;
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

  console.log(combinedArgs_literal);
  console.log(combinedStringArgs_literal);
  console.log(combinedNames_literal);

})()