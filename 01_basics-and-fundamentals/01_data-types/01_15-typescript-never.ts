/**
 * The never type in TypeScript represents a type of value that never occurs. 
 * It's usually used to indicate the type of a function that never returns or always throws an error.
 */

(() => {

  /**
   * throwError is designed to always throw an error and never return a value. Therefore, its return type is never.
   * This function never returns a value, so its return type is 'never'.
   * @param errorMsg
   */
  function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
  }

  /**
   * The never type can also be used to represent exhaustive checks in TypeScript, 
   * such as in a switch statement for a union type:
   * 
   * if the fruit variable is not 'apple', 'banana', or 'orange', TypeScript will raise 
   * a compile-time error because it cannot assign a string to a never type. This is 
   * useful to ensure all possible cases are handled in a switch statement, and no 
   * unhandled cases are accidentally introduced in the future.
   */

  type Fruit = 'apple' | 'banana' | 'orange';

  function getFruitInfo(fruit: Fruit) {
    switch (fruit) {
      case 'apple':
        return 'Apple is red';
      case 'banana':
        return 'Banana is yellow';
      case 'orange':
        return 'Orange is orange';
      default:
        const exhaustiveCheck: never = fruit;
        return exhaustiveCheck;
    }
  }
})()