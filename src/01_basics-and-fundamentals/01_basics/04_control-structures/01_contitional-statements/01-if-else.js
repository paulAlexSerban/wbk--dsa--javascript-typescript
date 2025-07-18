/**
 *
 * @param {Number} score
 * @returns
 */

function getGrade(score) {
    let grade;
    if (0 <= score && score <= 30) {
        switch (true) {
            case 25 < score && score <= 30:
                grade = 'A';
                break;
            case 20 < score && score <= 25:
                grade = 'B';
                break;
            case 15 < score && score <= 20:
                grade = 'C';
                break;
            case 10 < score && score <= 15:
                grade = 'D';
                break;
            case 5 < score && score <= 10:
                grade = 'E';
                break;
            default:
                grade = 'F';
        }
    }
    return grade;
}

console.log(`The grade is ${getGrade(27)}`);
