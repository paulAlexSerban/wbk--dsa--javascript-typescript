/**
  * Given a string paragraph and a string array of the banned words banned, return the most 
  * frequent word that is not banned. It is guaranteed there is at least one word that is not 
  * banned, and that the answer is unique.
  * 
  * The words in paragraph are case-insensitive and the answer should be returned in lowercase.
  * 
  * Example 1:
  * 
  * Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
  * Output: "ball"
  * Explanation: 
  * "hit" occurs 3 times, but it is a banned word.
  * "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
  * Note that words in the paragraph are not case sensitive,
  * that punctuation is ignored (even if adjacent to words, such as "ball,"), 
  * and that "hit" isn't the answer even though it occurs more because it is banned.
  * Example 2:

  * Input: paragraph = "a.", banned = []
  * Output: "a"
  * 
  * Constraints:
  * 1 <= paragraph.length <= 1000
  * paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
  * 0 <= banned.length <= 100
  * 1 <= banned[i].length <= 10
  * banned[i] consists of only lowercase English letters.
 */

/**
 * To solve this problem in TypeScript, you can follow these steps:
 *
 * Normalize the Paragraph: Convert the paragraph to lowercase and remove all punctuation, making it easier to work with.
 * Split Words: Split the paragraph into individual words.
 * Count Word Frequencies: Use a map or object to count how often each word appears.
 * Filter Banned Words: Ignore or remove counts for banned words.
 * Find the Most Frequent Word: Iterate through the map or object to find the most frequent non-banned word.
 */

function mostCommonWord(paragraph: string, banned: string[]): string {
    // Normalize paragraph by converting it to lowercase and removing punctuation
    const normalizedParagraph = paragraph.toLowerCase().replace(/[!?',;.]/g, ' ');

    // Split words by spaces
    const words = normalizedParagraph.split(/\s+/);

    // Count the frequency of each word using a Map
    const wordCounts = new Map<string, number>();
    words.forEach((word) => {
        if (!banned.includes(word) && word !== '') {
            wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
        }
    });

    // Find the most frequent non-banned word
    let maxFrequency = 0;
    let mostCommon = '';
    wordCounts.forEach((count, word) => {
        if (count > maxFrequency) {
            maxFrequency = count;
            mostCommon = word;
        }
    });

    return mostCommon;
}

export { mostCommonWord };
