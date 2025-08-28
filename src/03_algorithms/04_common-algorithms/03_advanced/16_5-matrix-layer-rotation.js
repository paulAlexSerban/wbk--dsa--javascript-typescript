/**
 * Matrix Layer Rotation
 *
 * You are given a 2D matrix of dimension m x n and a positive integer r. You have to rotate the matrix r times and print the resultant matrix. Rotation should be in anti-clockwise direction.
 * Rotation of a 4 x 5 matrix is represented by the following figure (16_5-matrix-rotation.png). Note that in one rotation, you have to shift elements by one step only (refer sample tests for more clarity).
 * It is guaranteed that the minimum of m and n will be even.
 *
 * As an example rotate the Start matrix by 2:
 *
 * Start         First           Second
 * 1 2 3 4       2  3  4  5      3  4  5  6
 * 12 1 2 5      1  2  3  6      2  3  4  7
 * 11 4 3 6      12 1  4  7      1  2  1  8
 * 10 9 8 7      11 10 9  8      12 11 10 9
 *
 * Function Description:
 * Complete the matrixRotation function in the editor below.
 * matrixRotation has the following parameter(s):
 * - int matrix[m][n]: a 2D array of integers
 * - int r: the rotation factor
 *
 * Prints:
 * Print each row of the rotated matrix on a new line. Return nothing. Print each row on a new line in the form space-separated integers that represent the unrolled matrix.
 *
 * Input Format:
 * The first line contains three space separated integers, m, n, and r, the number of rows and columns in matrix, and the required rotation.
 * The next m lines contain n space-separated integers representing the elements of a row of matrix.
 *
 * Constraints:
 * 2 <= m, n <= 300
 * 1 <= r <= 10^9
 * min(m, n) % 2 == 0
 * 1 <= matrix[i][j] <= 10^8 where 0 <= i < m and 0 <= j < n
 *
 * Sample Input:
 *
 * STDIN       Function
 * 4 4 2       rows m = 4, columns n = 4, rotation factor r = 2
 * 1 2 3 4     matrix = [[1, 2, 3, 4],
 * 5 6 7 8               [5, 6, 7, 8],
 * 9 10 11 12            [9, 10, 11, 12],
 * 13 14 15 16           [13, 14, 15, 16]]
 *
 * Sample Output:
 * 3 4 8 12
 * 2 11 10 16
 * 1 7 6 15
 * 5 9 13 14
 *
 * Explanation:
 * The matrix is rotated through two rotations.
 *
 * 1  2  3  4      2  3  4  8      3  4  8 12
 * 5  6  7  8      1  7 11 12      2 11 10 16
 * 9 10 11 12  ->  5  6 10 16  ->  1  7  6 15
 * 13 14 15 16     9 13 14 15      5  9 13 14
 */

(() => {
    const matrixRotation = (matrix, r) => {
        const m = matrix.length;
        const n = matrix[0].length;
        const layers = Math.min(m, n) / 2;

        for (let layer = 0; layer < layers; layer++) {
            let temp = [];
            let row = m - 2 * layer;
            let col = n - 2 * layer;
            let perimeter = 2 * (row + col) - 4;

            // Collect elements from the layer into temp
            for (let i = 0; i < row; i++) temp.push(matrix[layer + i][layer]);
            for (let i = 1; i < col; i++) temp.push(matrix[layer + row - 1][layer + i]);
            for (let i = 1; i < row; i++) temp.push(matrix[layer + row - 1 - i][layer + col - 1]);
            for (let i = 1; i < col - 1; i++) temp.push(matrix[layer][layer + col - 1 - i]);

            // Rotate the elements in temp array
            let rotated = new Array(perimeter);
            for (let i = 0; i < perimeter; i++) rotated[(i + r) % perimeter] = temp[i];

            // Put back the rotated elements into the matrix
            for (let i = 0; i < row; i++) matrix[layer + i][layer] = rotated.shift();
            for (let i = 1; i < col; i++) matrix[layer + row - 1][layer + i] = rotated.shift();
            for (let i = 1; i < row; i++) matrix[layer + row - 1 - i][layer + col - 1] = rotated.shift();
            for (let i = 1; i < col - 1; i++) matrix[layer][layer + col - 1 - i] = rotated.shift();
        }

        // Print the rotated matrix
        matrix.forEach((row) => console.log(row.join(' ')));
    };

    // Test the function with the given example
    matrixRotation(
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ],
        2
    );
})();

/**
 * WRONG SOLUTION - 4/15 TEST CASES PASSED
 */

console.log('WRONG SOLUTION - 4/15 TEST CASES PASSED');
(() => {
    /*
     * Complete the 'matrixRotation' function below.
     *
     * The function accepts following parameters:
     *  1. 2D_INTEGER_ARRAY matrix
     *  2. INTEGER r
     */

    const matrixRotation = (matrix, r) => {
        const m = matrix.length;
        const n = matrix[0].length;
        const layers = Math.min(m, n) / 2;
        const rotatedMatrix = matrix.slice().map((row) => row.slice());
        for (let i = 0; i < layers; i++) {
            const layer = getLayer(matrix, i);
            const rotatedLayer = rotateLayer(layer, r);
            setLayer(rotatedMatrix, rotatedLayer, i);
        }
        printMatrix(rotatedMatrix);
    };

    const getLayer = (matrix, layerIndex) => {
        const m = matrix.length;
        const n = matrix[0].length;
        const layer = [];
        for (let i = layerIndex; i < n - layerIndex; i++) {
            layer.push(matrix[layerIndex][i]);
        }
        for (let i = layerIndex + 1; i < m - layerIndex; i++) {
            layer.push(matrix[i][n - layerIndex - 1]);
        }
        for (let i = n - layerIndex - 2; i >= layerIndex; i--) {
            layer.push(matrix[m - layerIndex - 1][i]);
        }
        for (let i = m - layerIndex - 2; i > layerIndex; i--) {
            layer.push(matrix[i][layerIndex]);
        }
        return layer;
    };

    const rotateLayer = (layer, r) => {
        const rotatedLayer = [];
        const layerLength = layer.length;
        for (let i = 0; i < layerLength; i++) {
            rotatedLayer[(i + r) % layerLength] = layer[i];
        }
        return rotatedLayer;
    };

    const setLayer = (matrix, layer, layerIndex) => {
        const m = matrix.length;
        const n = matrix[0].length;
        let index = 0;
        for (let i = layerIndex; i < n - layerIndex; i++) {
            matrix[layerIndex][i] = layer[index++];
        }
        for (let i = layerIndex + 1; i < m - layerIndex; i++) {
            matrix[i][n - layerIndex - 1] = layer[index++];
        }
        for (let i = n - layerIndex - 2; i >= layerIndex; i--) {
            matrix[m - layerIndex - 1][i] = layer[index++];
        }
        for (let i = m - layerIndex - 2; i > layerIndex; i--) {
            matrix[i][layerIndex] = layer[index++];
        }
    };

    const printMatrix = (matrix) => {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    };

    const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
    ];

    matrixRotation(matrix, 2);

    const matrix2 = [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18],
    ];

    matrixRotation(matrix2, 3);
})();
