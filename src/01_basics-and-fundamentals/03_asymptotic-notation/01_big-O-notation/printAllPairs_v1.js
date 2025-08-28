const printAllPairs = (n) => {
    // O(n * n) -  as the n grows, the runtime squares
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
};

const tools = require('../tools');

// TEST
const startTimer = process.hrtime();
printAllPairs(100);
tools.getProcessingTimeInMS(process.hrtime(startTimer));
