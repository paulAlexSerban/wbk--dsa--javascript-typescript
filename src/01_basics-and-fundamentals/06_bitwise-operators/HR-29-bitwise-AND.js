/**
 * Given set S = {1, 2, 3, ..., N}, find two integers, A and B (where A < B),
 * from set S such that the value of A & B is the maximum possible and also
 * less than a given integer, K. Write a function that takes T test cases as
 * input, where each test case consists of two integers, N and K, and returns
 * the maximum possible value of A & B less than K.
 */

function bitwiseAnd(N, K) {
    let maxBitwise = 0;

    for (let A = 1; A <= N; A++) {
        for (let B = A + 1; B <= N; B++) {
            let bitwise = A & B;

            if (bitwise < K && bitwise > maxBitwise) {
                maxBitwise = bitwise;
            }
        }
    }

    return maxBitwise;
}

function processData(input) {
    const inputLines = input.split('\n');
    const T = parseInt(inputLines[0]);

    for (let i = 1; i <= T; i++) {
        const [N, K] = inputLines[i].split(' ').map(Number);
        console.log(bitwiseAnd(N, K));
    }
}

processData(`3
5 2
8 5
2 2`); // 1 4 0
