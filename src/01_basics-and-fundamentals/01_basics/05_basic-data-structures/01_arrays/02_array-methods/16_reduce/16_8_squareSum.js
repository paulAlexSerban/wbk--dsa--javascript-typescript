const squareSum = (numbers) => {
    return numbers.reduce((sum, n) => {
        return n * n + sum;
    }, 0);
};

console.log(squareSum([20, 7, -12, 19]));
console.log(squareSum([15, 8, -15, -8, -12, -4, 17, -14]));
