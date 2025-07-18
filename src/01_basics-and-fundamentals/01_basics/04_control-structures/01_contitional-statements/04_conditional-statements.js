/**
 * Objective:
 * In this challenge, we're practicing conditional statements.
 * 
 * Task:
 * Given an integer, n, perform the following conditional actions:
 * 
 * If n is odd, print "Weird".
 * If n is even and in the inclusive range of 2 to 5, print "Not Weird".
 * If n is even and in the inclusive range of 6 to 20, print "Weird".
 * If n is even and greater than 20, print "Not Weird".
 * 
 * Input Format:
 * A single line containing a positive integer, n.
 * 
 * Constraints:
 * 1 <= n <= 100

 */

function main() {
    const N = parseInt(readLine().trim());
    if (N % 2 === 1 || (N % 2 === 0 && N >= 6 && N <= 20)) {
        console.log('Weird');
    } else {
        console.log('Not Weird');
    }
}

/**
 * The main function reads the input from the user using readLine and checks whether
 * the input is odd or falls into one of the specified even ranges. If the input meets
 * any of those criteria, it outputs "Weird". Otherwise, it outputs "Not Weird".
 *
 * Note that we use the trim method to remove any leading or trailing whitespace
 * from the input before parsing it as an integer using parseInt. We also use
 * the console.log method to output the result.
 */
