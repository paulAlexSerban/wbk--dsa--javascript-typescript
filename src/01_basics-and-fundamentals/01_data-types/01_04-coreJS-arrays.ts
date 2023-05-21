/**
 * Arrays
 * - Arrays are used to store multiple values in a single variable.
 * - Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
 * - Arrays use numbers to access its "elements". In this example, person[0] returns John:
 * - Arrays are zero based, which means that the first item is referenced with an index of 0.
 * - Arrays are mutable, meaning that we can change the value of its elements.
 */

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
})()