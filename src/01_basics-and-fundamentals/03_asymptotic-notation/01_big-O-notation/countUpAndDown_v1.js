const tools = require('../tools');

const countUpAndDown = (n) => {
    console.log(`Going up!`);
    // O(n) - number of operations grows n grows
    for (let i = 0; i < n; i++) {
        console.log(i);
    }

    // O(n) - number of operations grows n grows
    console.log(`Going down!`);
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
};

// TEST
const startTimer = process.hrtime();
countUpAndDown(100000);
tools.getProcessingTimeInMS(process.hrtime(startTimer));
