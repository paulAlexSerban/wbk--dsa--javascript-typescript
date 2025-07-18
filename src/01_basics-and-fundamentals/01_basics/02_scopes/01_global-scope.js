/**
 * Variables defined outside any function, block, or module scope have global scope.
 * Variables in global scope can be accessed from everywhere in the application.
 */

/**
 * When a module system is enabled it’s harder to make global variables, but one can still do it.
 * By defining a variable in HTML, outside any function, a global variable can be create.
 */

/**
 * When there is no module system in place, it is a lot easier to create global variables.
 * A variable declared outside any function, in any file, is a global variable.
 * Global variables are available for the lifetime of the application.
 */

/**
 * Another way for creating a global variable is to use the window global object anywhere in the application:
 */

window.GLOBAL_DATA = { value: 1 };
// At this point, the GLOBAL_DATA variable is visible everywhere.

console.log(GLOBAL_DATA);

/**
 * NOTE
 * These practices are BAD PRACTICES.
 */
