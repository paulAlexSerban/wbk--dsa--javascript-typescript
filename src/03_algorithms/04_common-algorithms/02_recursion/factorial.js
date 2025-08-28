// const factorial = (num) => {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= 1;
//   }
//   return total;
// };

const factorial = (x) => {
    if (x < 0) return 0;
    if (x <= 1) return 1; // define the base case - WARNING: if missing you get into an infinite loop
    return x * factorial(x - 1);
};

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(6));
console.log(factorial(7)); // 5040
