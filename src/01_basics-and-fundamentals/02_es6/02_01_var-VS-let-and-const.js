/**
 * Variables declared with var have only function scope. Even more, variables declared with var are hoisted to the top of their scope. This way they can be accessed before being declared. Take a look at the code below:
 */

function doSomething() {
    console.log(x);
    var x = 1;
}

doSomething(); //undefined

/**
 * This does not happen for let. A variable declared with let can be accessed only after its definition.
 */

function doSomething() {
    console.log(x);
    let x = 1;
}

doSomething(); //Uncaught ReferenceError: x is not defined

/**
 * A variable declared with var can be re-declared multiple times in the same scope.
 * The following code is just fine:
 */

function doSomething() {
    var x = 1;
    x = 2;
    console.log(x);
}

doSomething();

/**
 * Variables declared with let or const cannot be re-declared in the same scope:
 */

function doSomething() {
    let x = 1;
    x = 2;
}
//Uncaught SyntaxError: Identifier 'x' has already been declared

/**
 * Variables declared with let and const can have block scope. They can only be accessed in the block in which they are defined.
 */

{
    let x = 1;
    x = 2;
}
console.log(x); //1

/**
 * In contrast, the var declaration has no block scope:
 */

var x = 1;
{
    x = 2;
}
console.log(x); //2

/**
 * NOTE
 * Maybe we don’t even have to care about this, as var has started to become obsolete.
 */
