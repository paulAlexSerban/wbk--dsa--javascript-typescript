/**
 * Function type
 *
 * types that describe a function regarding the parameters and the returned value
 * it allows us to describe which type of functions allow us to use specifically we want ot use somewhere
 */

let combinedResult: (a: number, b: number) => number;

function getTogether(n1: number, n2: number): number {
  return n1 + n2;
}

combinedResult = getTogether;
console.log(combinedResult(8, 8));
