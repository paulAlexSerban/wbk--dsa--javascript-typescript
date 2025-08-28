const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const getMax = (array) => {
    if (array.length === 0) return undefined;
    return array.reduce((accumulator, current) => (current > accumulator ? current : accumulator));
};

const max = getMax(numbers);

console.log(max);
