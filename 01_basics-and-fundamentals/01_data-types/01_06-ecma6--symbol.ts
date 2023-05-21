/**
 * Symbol
 * =======
 * A Symbol is a unique and immutable data type introduced in ECMAScript 2015 (ES6). It is used as the key for an 
 * object property when the property is intended to be private, for internal use.
 * Symbols can be created by calling the Symbol function which optionally takes a string argument as a description, 
 * but they do not have literal syntax. Each time you call the Symbol function, regardless of the description, you get a unique symbol.
 */

(() => {
  let sym1 = Symbol();
  let sym2 = Symbol("key"); // optional string key
  let sym3 = Symbol("key");

  console.log(sym2 === sym3); // Outputs "false"

  /**
   * In this example, even though sym2 and sym3 were given the same description ("key"), 
   * they are not the same because every symbol is unique.
   */

  const uniqueKey = Symbol("uniqueKey");

  let myObject = {
    [uniqueKey]: "This is a unique value",
    notUniqueKey: "This is a not unique value"
  };

  console.log(myObject[uniqueKey]); // Outputs: "This is a unique value"
  console.log(myObject.notUniqueKey); // Outputs: "This is a not unique value"

  /**
   * uniqueKey is a symbol that is used as a key for a property in myObject. 
   * Even though we can't directly see the uniqueKey property when we log the 
   * object or loop over its keys, we can still access it using the symbol. 
   * This can be useful for adding metadata to objects or hiding implementation details.
   */

  const calculateAreaKey = Symbol("calculateArea");

  class Circle {
    constructor(public radius: number) { }

    [calculateAreaKey]() {
      return Math.PI * this.radius ** 2;
    }
  }

  let myCircle = new Circle(5);
  console.log(myCircle[calculateAreaKey]()); // Outputs: 78.53981633974483

  /**
   * [calculateAreaKey] method is not directly visible when a Circle is used, 
   * but is still accessible using the symbol. This could be useful for hiding 
   * methods or data that are intended for internal use in a class.
   */
})()