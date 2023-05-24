/**
 * The traditional first line of code in any programming language
 */


// Declare a function called 'functionName' that takes a parameter called 'str' that is of type 'String'
// The function will have a default value of "TypeScript" if no parameter is passed in
function greeting(parameterVariable: string = 'TypeScript' ) {
    console.log(`Hello, World!`);
    console.log(`${parameterVariable} is here, have no fear!!`);
  }

greeting();
greeting('TypeScript');
