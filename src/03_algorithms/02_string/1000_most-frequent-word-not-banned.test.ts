// Assuming the mostCommonWord function is imported or defined in this file
import { mostCommonWord } from './1000_most-frequent-word-not-banned';

describe('mostCommonWord', () => {
    test('returns the most frequent non-banned word', () => {
        const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
        const banned = ["hit"];
        expect(mostCommonWord(paragraph, banned)).toBe('ball');
    });

    test('handles case sensitivity and punctuation', () => {
        const paragraph = "Practice makes perfect. you'll only get Perfect by practice. just practice!";
        const banned = ['practice'];
        expect(mostCommonWord(paragraph, banned)).toBe('perfect');
    });

    test('returns the most frequent word when no words are banned', () => {
        const paragraph = "a quick brown fox jumps over the lazy dog";
        const banned: string[] = [];
        expect(mostCommonWord(paragraph, banned)).toBe('a');
    });

    test('works with single character words and punctuation', () => {
        const paragraph = "a, a, a, a, b,b,b,c, c";
        const banned = ['a'];
        expect(mostCommonWord(paragraph, banned)).toBe('b');
    });

    test('returns the most frequent word when banned list is empty', () => {
        const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
        const banned: string[] = [];
        expect(mostCommonWord(paragraph, banned)).toBe('hit');
    });

    test('works with Unicode characters', () => {
        const paragraph = "日本 日本, 日本!";
        const banned = ['日本'];
        expect(mostCommonWord(paragraph, banned)).toBe('');
    });

    test('ignores banned words and returns the next most frequent', () => {
        const paragraph = "apple apple? orange banana apple";
        const banned = ['apple'];
        expect(mostCommonWord(paragraph, banned)).toBe('orange');
    });

    test('returns the first most frequent word in case of a tie and none are banned', () => {
        const paragraph = "love hate love hate";
        const banned: string[] = [];
        expect(mostCommonWord(paragraph, banned)).toBe('love'); // Assuming 'love' appears first in the text
    });
});
