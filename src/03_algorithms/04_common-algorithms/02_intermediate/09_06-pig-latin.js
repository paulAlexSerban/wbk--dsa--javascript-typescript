/**
 * Pig Latin is a way of altering English Words. The rules are as follows:
 *
 * - If a word begins with a consonant, take the first consonant or consonant cluster,
 * move it to the end of the word, and add ay to it.
 *
 * - If a word begins with a vowel, just add way at the end.
 */

/**\
 * To translate a string to Pig Latin, we can follow these two rules:
 *
 * If a word begins with a consonant, we take the first consonant or consonant
 * cluster, move it to the end of the word, and add "ay" to it.
 *
 * If a word begins with a vowel, we just add "way" at the end.
 * We can use the provided function translatePigLatin() as a starting point.
 * This function takes a string as an argument and returns the same string.
 * We can modify this function to translate the string to Pig Latin.
 */

/**
 * One approach is to use a regular expression to match the first consonant or
 * consonant cluster and move it to the end of the word. Here's an example implementation:
 */

function translatePigLatin(str) {
    // Match the first consonant or consonant cluster at the beginning of the word
    const match = str.match(/^[^aeiou]+/);

    if (match) {
        // Move the matched consonants to the end of the word and add "ay"
        return str.slice(match[0].length) + match[0] + 'ay';
    } else {
        // If the word begins with a vowel, just add "way"
        return str + 'way';
    }
}

console.log(translatePigLatin('consonant')); // Output: "onsonantcay"

/**
 * Another approach is to use a switch statement to handle
 * the two cases separately. Here's an example implementation:
 */

function translatePigLatinV2(str) {
    const firstLetter = str.charAt(0);
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(firstLetter)) {
        // If the word begins with a vowel, just add "way"
        return str + 'way';
    } else {
        // If the word begins with a consonant, move the consonant(s) to the end and add "ay"
        let consonants = '';
        let i = 0;

        while (!vowels.includes(str[i])) {
            consonants += str[i];
            i++;
        }

        return str.slice(i) + consonants + 'ay';
    }
}

console.log(translatePigLatinV2('consonant')); // Output: "onsonantcay"

/**
 * Here are some pros and cons of each approach:
 *
 * Regular expression approach:
 * Pros:
 * Concise and easy to read.
 * Can handle any number of consonants at the beginning of the word.
 *
 * Cons:
 * May be slower than the switch statement approach for long strings.
 *
 * Switch statement approach:
 * Pros:
 * Can be faster than the regular expression approach for long strings.
 * Provides more control over the translation process.
 *
 * Cons:
 * Requires more code and is slightly harder to read.
 */
