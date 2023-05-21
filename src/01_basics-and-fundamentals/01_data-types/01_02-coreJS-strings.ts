/**
 * String
 * - JavaScript distinguishes between String objects and primitive string values.
 * - a datatype which is not a primitive type it is a Class
 * - a String is a sequence of characters
 * - technically a String is limited by memory of the MAX_VALUE of an Number
 */

(() => {
    const stringPrimitive: string = "String Primitive";
    console.log(stringPrimitive);

    const firstStringObject: String = new String("This is a string object");
    console.log(firstStringObject);
})();
