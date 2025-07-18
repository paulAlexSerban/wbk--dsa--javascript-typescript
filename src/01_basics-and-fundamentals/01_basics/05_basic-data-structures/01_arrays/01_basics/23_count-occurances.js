const numbers = [1, 2, 3, 4];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = current === searchElement ? 1 : 0;
        console.log({ accumulator, current, searchElement });
        return accumulator + occurrence;
    }, 0);
}
