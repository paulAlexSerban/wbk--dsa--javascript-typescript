/**
 * Hash Tables
 * A hash table is a data structure that uses a hash function to efficiently map keys to values.
 */

class HashTable {
    constructor(size = 50) {
        this.data = new Array(size);
    }

    // Private method that generates a hash
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        let currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
}

/**
 * It starts with an array (this.data) that holds the data. The array size is set to 50 as a default.
 *
 * The _hash method is a private method which generates a hash for a given key. It does this by
 * looping over each character in the key, and multiplying the character's ASCII value by its position
 * in the key, then taking the modulus of this value by the length of the data array. The result is a
 * relatively unique hash.
 *
 * The set method is used to add new key/value pairs to the hash table. It generates a hash for the
 * given key using the _hash method, then pushes the key/value pair into the data array at the
 * index specified by the hash.
 *
 * The get method is used to retrieve a value from the hash table by its key. It generates a hash for
 * the given key, then searches the data array at the index specified by the hash. If it finds a key
 * that matches the input key, it returns the corresponding value.
 */

let myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
console.log(myHashTable.get('grapes')); // Outputs: 10000
console.log(myHashTable.get('apples')); // Outputs: 54
