const increase = (arg) => {
    if (typeof arg === 'object') {
        arg.value++; // this will change the value in the referenced object - so any changes done here will be visible
    } else if (typeof arg === 'number') {
        arg++; // this will change the value only in the scope of the function
    }
};

let number = 10;
let objNumber = { value: 10 };

increase(number);
increase(objNumber);

console.log(number);
console.log(objNumber);

/**************************************************************
 * PRIMITIVES  -are copied by their value
 * OBJECTS - are copied by their reference
 **************************************************************/
