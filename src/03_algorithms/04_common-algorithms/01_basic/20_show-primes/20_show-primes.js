// prime (number whose factors are only 1 and itself) - it can't be divided evenly by any number

const isPrime = (number) => {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            return false;
        }
        return true;
    }
};

const showPrimes = (limit) => {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            console.log(`${number} is prime number`);
        }
    }
};

showPrimes(20);
