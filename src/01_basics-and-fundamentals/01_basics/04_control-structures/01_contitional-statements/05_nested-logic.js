/**
 * Problem Statement:
 *
 * Your task is to write a program that calculates the fine for returning
 * a library book late based on the given due date and actual return date.
 *
 * Here are the rules:
 *
 * If the book is returned on or before the due date, the fine is 0.
 * If the book is returned in the same month and year as the due date but
 * after the due date, the fine is 15 * number of days late.
 * If the book is returned in the same year as the due date but in a later
 * month, the fine is 500 * number of months late.
 * If the book is returned in a later year than the due date, the fine is 10000.
 */

/**
 * This code takes as input two arrays, actual and expected, that represent the
 * actual and expected dates of a returned book. It then calculates the fine owed
 * for the late book return and prints it to the console. The code first splits
 * the input string into two arrays, actual and expected, by splitting on the
 * newline character. It then destructures the two arrays into their respective
 * days, months, and years. It then checks if the actual year is greater than the
 * expected year. If it is, the fine is set to 10000. If it is not, it checks if the
 * actual year is equal to the expected year. If it is, it checks if the actual month
 * is greater than the expected month. If it is, the fine is set to
 * 500 * (actualMonth - expectedMonth). If it is not, it checks if the actual month
 * is equal to the expected month. If it is, it checks if the actual day is greater
 * than the expected day. If it is, the fine is set to 15 * (actualDay - expectedDay).
 * If it is not, the fine is set to 0. The fine is then printed to the console.
 */

function processData(input) {
    // Split the input into two arrays, one for actual and one for expected.
    const [actual, expected] = input.split('\n').map((line) => line.split(' ').map(Number));

    // Destructure the arrays into individual variables.
    const [actualDay, actualMonth, actualYear] = actual;
    const [expectedDay, expectedMonth, expectedYear] = expected;

    // Set the fine to 0.
    let fine = 0;

    // If the actual year is greater than the expected year, set the fine to 10000.
    if (actualYear > expectedYear) {
        fine = 10000;
        // If the actual year is equal to the expected year:
    } else if (actualYear === expectedYear) {
        // If the actual month is greater than the expected month, set the fine to 500 multiplied by the difference between the actual month and the expected month.
        if (actualMonth > expectedMonth) {
            fine = 500 * (actualMonth - expectedMonth);
            // If the actual month is equal to the expected month:
        } else if (actualMonth === expectedMonth) {
            // If the actual day is greater than the expected day, set the fine to 15 multiplied by the difference between the actual day and the expected day.
            if (actualDay > expectedDay) {
                fine = 15 * (actualDay - expectedDay);
            }
        }
    }

    // Print the fine.
    console.log(fine);
}

processData('9 6 2015\n6 6 2015');
processData('9 6 2016\n6 6 2015');
