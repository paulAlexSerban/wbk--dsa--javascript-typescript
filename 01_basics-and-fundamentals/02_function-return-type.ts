/**
 * Functions return type
 * 
 * you can set the type of the return of the function
 * Eg. `function name(): number {}`
 * 
 * The `:void` type - states that the function does not have a return statement
 */

function cumulate(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number):void {
  console.log('Result:', num);
}

/**
 * Callback type
 */

function addAndHandle(
  n1: number, 
  n2: number, 
  callback: (num: number) => void): void {
    const result = n1 + n2;
    callback(result);
}

addAndHandle(20, 10, (result: number) => {
  console.log('Result:', result);
});