/**
 * Before modules were implemented in JavaScript, a variable declared outside any function was a global variable.
 * Now that we have modules, a variable declared outside any function is hidden and not available to other modules unless it is explicitly exported.
 *
 * Exporting makes a function or object available to other modules.
 *
 * Importing makes a function or object, from other modules, available to the current module.
 *
 * In a way, we can imagine a module as a self-executing function that takes the import data as inputs and returns the export data.
 */
