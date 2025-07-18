/**
 * In this code, we have a flyweight pattern implementation using the WordToken and Sentence classes.
 * The flyweight pattern is a design pattern used to minimize memory usage by sharing as much data
 * as possible with other similar objects. In this case, the WordToken class is used to store whether
 * a word should be capitalized or not, and the Sentence class manages the words and their
 * capitalization states.
 *
 * Here's the code with added step-by-step comments and the test case rewritten using console.log:
 */

// The WordToken class is used to store the capitalization state of a word
class WordToken {
    constructor(capitalize = false) {
        this.capitalize = capitalize;
    }
}

// The Sentence class manages words and their capitalization states using WordToken instances
class Sentence {
    constructor(plainText) {
        this.words = plainText.split(' '); // Split the input text into words
        this.tokens = {}; // An object to store WordToken instances
    }

    // Return a WordToken instance for a specific word at a given index
    at(index) {
        let wt = new WordToken();
        this.tokens[index] = wt;
        return this.tokens[index];
    }

    // Return the sentence as a string, applying the capitalization states from the WordToken instances
    toString() {
        let buffer = [];
        for (let i = 0; i < this.words.length; ++i) {
            let w = this.words[i];
            if (this.tokens[i] && this.tokens[i].capitalize) {
                w = w.toUpperCase(); // Capitalize the word if the corresponding WordToken has capitalize set to true
            }
            buffer.push(w);
        }
        return buffer.join(' '); // Join the words back into a single string
    }
}

// Test case using console.log
{
    let s = new Sentence('alpha beta gamma');
    s.at(1).capitalize = true;
    console.log(s.toString() === 'alpha BETA gamma'); // Expected output: true
}

/**
 * In the test case, we create a Sentence instance with the input text "alpha beta gamma".
 * We then set the capitalization state of the word at index 1 (i.e., "beta") to true. Finally,
 * we call the toString() method of the Sentence instance and check if the output
 * is "alpha BETA gamma", as expected.
 */
