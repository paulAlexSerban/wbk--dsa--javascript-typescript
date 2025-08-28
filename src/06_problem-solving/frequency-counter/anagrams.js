/**
 * Anagrams
 * - given two strings, write a function to determine if the second string is an anagram of the first;
 * - if the first anagram is a word, phrase, or name formed  by rearranging the letters of another, such as `cinema`, formed from `iceman`
 */

const validAnagram = (first, second) => {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];

        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }

    console.log({ lookup });

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];

        // can't find letter or letter is zero then it is not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
};

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); //true
