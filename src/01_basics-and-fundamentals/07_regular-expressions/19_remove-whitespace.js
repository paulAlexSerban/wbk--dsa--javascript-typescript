/**
 * Remove whitespace from start to end
 *
 * Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.
 */

/**
 * Example
 * a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings
 */

/**
 * NOTA BENE
 * The String.prototype.trim() method would work here
 */

let hello = '   Hello, World!  ';
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
