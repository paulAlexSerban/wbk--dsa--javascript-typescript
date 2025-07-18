/**
 `const` declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.
  Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.
 */

let obj = {
    name: 'FreeCodeCamp',
    review: 'Awesome',
};
Object.freeze(obj);
obj.review = 'bad';
obj.newProp = 'Test';
console.log(obj);

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14,
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);
