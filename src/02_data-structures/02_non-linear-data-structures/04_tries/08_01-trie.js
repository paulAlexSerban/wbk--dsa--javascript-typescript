/**
 * Trie
 * A trie is a tree-like data structure whose nodes store the letters of an alphabet.
 * By structuring the nodes in a particular way, words and strings can be retrieved from the structure by traversing down a branch path of the tree.
 * No node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated.
 * All the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string.
 * Values are not necessarily associated with every node.
 * Rather, values tend only to be associated with leaves, and with some inner nodes that correspond to keys of interest.
 * For the space-optimized presentation of prefix tree, see compact prefix tree.
 */

class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }

    /**
     * Add Word
     * This function should add the given word starting from the given index.
     * That is, it should add all the characters starting from indexth index of the word.
     * If the word is already in the Trie, it should not add it again.
     * @param {*} word
     * @param {*} index
     * @returns
     */
    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
        } else if (index < word.length) {
            var char = word[index];
            var subTrie = this.characters[char] || new Trie();
            subTrie.addWord(word, index + 1);
            this.characters[char] = subTrie;
        }
        return this;
    }

    /**
     * Find
     * This function should return the node in the trie
     * which corresponds to the last character of the passed in word.
     * If the word is not in the Trie, it should return undefined.
     * @param {*} word
     * @param {*} index
     * @returns
     */
    findWord(word, index = 0) {
        // This function will return the node in the trie
        // which corresponds to the end of the passed in word.

        // Be sure to consider what happens if the word is not in this Trie.

        var char = word[index];
        if (index < word.length - 1 && this.characters[char]) {
            index += 1;
            return this.characters[char].findWord(word, index);
        } else {
            return this.characters[char];
        }
    }

    /**
     * Get Words
     * This function will return all the words which are
     * contained in this Trie.
     * It will use currentWord as a prefix,
     * since a Trie doesn't know about its parents.
     * @param {*} words
     * @param {*} currentWord
     * @returns
     */
    getWords(words = [], currentWord = '') {
        // This function will return all the words which are
        // contained in this Trie.
        // it will use currentWord as a prefix,
        // since a Trie doesn't know about its parents.

        if (this.isWord) {
            words.push(currentWord);
        }
        for (var char in this.characters) {
            var nextWord = currentWord + char;
            this.characters[char].getWords(words, nextWord);
        }
        return words;
    }
    /**
     * Auto Complete
     * This function will return all completions
     * for a given prefix.
     * It should use find and getWords.
     * @param {*} prefix
     * @param {*} words
     * @param {*} currentWord
     * @returns
     */
    autoComplete(prefix, words = [], currentWord = '') {
        if (this.isWord) {
            if (currentWord.slice(0, prefix.length) === prefix) {
                words.push(currentWord);
            }
        }
        for (var char in this.characters) {
            var nextWord = currentWord + char;
            this.characters[char].autoComplete(prefix, words, nextWord);
        }
        return words;
    }

    /**
     * Remove Word
     * This function should remove the given word
     * from the trie.
     * @param {*} word
     * @returns
     */
    removeWord(word) {
        if (word[0] === undefined) {
            this.isWord = false;
            return this;
        } else if (Object.keys(this.characters[word[0]].characters).length === 1) {
            this.isWord = false;
            delete this.characters[word[0]];
        } else if (Object.keys(this.characters[word[0]].characters).length > 1) {
            let subTrie = this.characters[word[0]];
            subTrie.removeWord(word.substr(1));
        }
        return this;
    }
}

var firstTrie = new Trie();
firstTrie.addWord('fun');
console.log(firstTrie.characters); // {f: Trie}
!!firstTrie.characters['f']; // true

firstTrie.characters.f.characters.u; // {u: Trie}
!!firstTrie.characters.f.characters.u; // true

firstTrie.characters.f.characters.u.characters.n.isWord; // true
!!firstTrie.characters.f.characters.u.characters.n; // true
!!firstTrie.characters.f.characters.u.characters.n.characters; // {}

!!firstTrie.characters.f.characters.u.characters.l; // true

var secondTrie = new Trie();
secondTrie.addWord('ha');
secondTrie.addWord('hat');
secondTrie.addWord('has');
secondTrie.addWord('have');
secondTrie.addWord('hate');

secondTrie.characters.h.characters.a.isWord; // true
secondTrie.characters.h.characters.a.characters.t.isWord; // true
secondTrie.characters.h.characters.a.characters.v.isWord; // false
secondTrie.characters.h.characters.a.characters.v.characters.e.isWord; // true
secondTrie.characters.h.characters.a.characters.t.characters.e.isWord; // true

Object.keys(secondTrie.characters.h.characters.a.characters).length; // 3

var t = new Trie();
t.addWord('fun');
t.addWord('fast');
t.addWord('fat');
t.addWord('fate');
t.addWord('father');
t.addWord('forget');
t.addWord('awesome');
t.addWord('argue');

t.removeWord('fat');
t.characters.f.characters.a.characters.t.isWord; // false
t.characters.f.characters.a.characters.t.characters.e.isWord; // true

t.removeWord('argue');

t.characters.a.characters.r; // undefined
