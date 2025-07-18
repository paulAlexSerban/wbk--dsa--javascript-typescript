/**
 * In the game of golf, each hole has a "par", meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play.
 * Depending on how far above or below par your strokes are, there is a different nickname.
 * Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority;
 */

// Define the names array to store the possible outcomes.
let names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];

// Solution ONE
// Use if / else if chaining for flow control to determine the appropriate nickname.
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return names[6];
    }
}

// Test golfScoreONE function
console.log(golfScoreONE(4, 5));

// Solution TWO
// This solution is similar to Solution ONE, but the names array is explicitly defined.
// The logic inside the function is the same as Solution ONE.
function golfScoreTWO(par, strokes) {
    // The logic remains unchanged from Solution ONE.
    // The function directly references the names array for return values.
}

// Test golfScoreTWO function
console.log(golfScoreTWO(4, 5));

// Solution THREE
// Use multiple conditional (ternary) operators to determine the appropriate nickname.

function golfScore(par, strokes) {
    return strokes == 1
        ? names[0]
        : strokes <= par - 2
        ? names[1]
        : strokes == par - 1
        ? names[2]
        : strokes == par
        ? names[3]
        : strokes == par + 1
        ? names[4]
        : strokes == par + 2
        ? names[5]
        : strokes >= par + 3
        ? names[6]
        : 'Change Me';
}

// Test golfScoreTHREE function
console.log(golfScoreTHREE(4, 5));
