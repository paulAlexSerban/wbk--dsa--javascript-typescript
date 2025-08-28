const numArray = [6, 4, 15, 10];

const numberCompare = (num1, num2) => {
    return num1 - num2;
};

numArray.sort(numberCompare);
// [4, 6, 10, 15]

console.log(numArray);
