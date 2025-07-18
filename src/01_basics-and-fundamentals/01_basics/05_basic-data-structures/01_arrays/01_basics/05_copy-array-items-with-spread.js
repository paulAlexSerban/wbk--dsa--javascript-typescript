/**
 * ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...
 */

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));
