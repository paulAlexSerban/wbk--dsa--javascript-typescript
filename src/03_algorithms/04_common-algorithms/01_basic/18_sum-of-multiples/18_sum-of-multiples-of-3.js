const sumMultiplesOf = (limit, dividers = [3, 5]) => {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % dividers[0] === 0 || i % dividers[1] === 0) {
            sum += i;
        }
    }

    return sum;
};

console.log(sumMultiplesOf(10));
