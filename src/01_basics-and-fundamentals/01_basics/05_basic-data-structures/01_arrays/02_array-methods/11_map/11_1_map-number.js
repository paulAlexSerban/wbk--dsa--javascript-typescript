const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

//Map creates a new array by calling your callback function with each element in the original array.
const doubles = numbers.map(function (num) {
    return num * 2; //Need to return the value!
});
console.log(doubles);
//[40, 42, 44, 46, 48, 50, 52, 54]

const numDetail = numbers.map(function (n) {
    return {
        value: n,
        isEven: n % 2 === 0,
    };
});
console.log(numDetail);
