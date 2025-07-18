/**
 * This piece of code demonstrates the Facade pattern using a magic square generator.
 * The code is divided into four classes: Generator, Splitter, Verifier, and
 * MagicSquareGenerator. The test case provided checks if the generated magic square is valid.
 *
 * Here's the code with step-by-step comments and rewritten test cases with console logs:
 */

// The Generator class is responsible for generating arrays of random numbers.
class Generator {
    generate(count) {
        let result = [];
        for (let i = 0; i < count; ++i) result.push(Math.floor(Math.random() * 6 + 1));
        return result;
    }
}

// The Splitter class is responsible for splitting an array into rows, columns, and diagonals.
class Splitter {
    split(array) {
        let result = [];

        let rowCount = array.length;
        let colCount = array[0].length;

        // Get the rows
        for (let r = 0; r < rowCount; ++r) {
            let theRow = [];
            for (let c = 0; c < colCount; ++c) theRow.push(array[r][c]);
            result.push(theRow);
        }

        // Get the columns
        for (let c = 0; c < colCount; ++c) {
            let theCol = [];
            for (let r = 0; r < rowCount; ++r) theCol.push(array[r][c]);
            result.push(theCol);
        }

        // Get the diagonals
        let diag1 = [];
        let diag2 = [];
        for (let c = 0; c < colCount; ++c) {
            for (let r = 0; r < rowCount; ++r) {
                if (c === r) diag1.push(array[r][c]);
                let r2 = rowCount - r - 1;
                if (c === r2) diag2.push(array[r][c]);
            }
        }

        result.push(diag1);
        result.push(diag2);

        return result;
    }
}

// The Verifier class checks if all subarrays in the given array have the same sum.
class Verifier {
    verify(array) {
        if (array.length < 1) return false;
        let adder = function (p, c) {
            return p + c;
        };
        let expected = array[0].reduce(adder);
        let ok = true;
        array.forEach(function (subarray) {
            if (subarray.reduce(adder) !== expected) {
                ok = false;
            }
        });
        return ok;
    }
}

// The MagicSquareGenerator class uses Generator, Splitter, and Verifier classes to generate a magic square of the given size.
class MagicSquareGenerator {
    generate(size) {
        let g = new Generator();
        let s = new Splitter();
        let v = new Verifier();

        let square;

        do {
            square = [];
            for (let i = 0; i < size; ++i) square.push(g.generate(size));
        } while (!v.verify(s.split(square)));

        return square;
    }
}

// Test case
function testMagicSquareGenerator() {
    let gen = new MagicSquareGenerator();
    let square = gen.generate(3);

    let adder = function (p, c) {
        return p + c;
    };

    let first = square[0].reduce(adder);

    for (let row of square) {
        console.log(row.reduce(adder) === first); // This should log 'true' for all rows.
    }
}

testMagicSquareGenerator();

/**
 * The provided test case testMagicSquareGenerator demonstrates the functionality of the MagicSquareGenerator class.
 * It uses the generate method to create a 3x3 magic square, and then verifies if the sum of elements in each row is equal.
 */

/**
 * Here's an explanation of the test case:
 *
 * Instantiate a MagicSquareGenerator object.
 * Generate a magic square of size 3 using the generate method. The method will continue generating squares until a magic
 * square is found (i.e., the sum of elements in each row, column, and diagonal is the same).
 *
 * Define an adder function that takes two arguments and returns their sum. This will be used in the reduce method to
 * calculate the sum of elements in each row.
 *
 * Calculate the sum of elements in the first row using the reduce method and store it in the first variable.
 *
 * Iterate through each row of the magic square and use the reduce method with the adder function to calculate the sum
 * of elements in each row. Compare it with the sum of elements in the first row (first variable) and log the result
 * (true or false) to the console.
 *
 * To test the MagicSquareGenerator, simply run the testMagicSquareGenerator() function. It should log 'true' for all
 * rows, indicating that the sum of elements in each row is equal, and thus the magic square has been generated correctly.
 *
 * Please note that this test case only checks if the sum of elements in each row is the same. In a more comprehensive test,
 * you could also check if the sum of elements in each column and diagonal is the same, ensuring that the magic square is
 * indeed valid.
 */
