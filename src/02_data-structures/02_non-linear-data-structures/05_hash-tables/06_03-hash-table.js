/**
 * Hash Table
 * A hash table is a data structure that uses a hash function to efficiently map keys to values.
 * Set / Get
 * The set method is used to add new key/value pairs to the hash table. It generates a hash for the
 * given key using the _hash method, then pushes the key/value pair into the data array at the
 * index specified by the hash.
 * The get method is used to retrieve a value from the hash table by its key. It generates a hash for
 * the given key, then searches the data array at the index specified by the hash. If it finds a key
 * that matches the input key, it returns the corresponding value.
 * Hash Function
 * A hash function is a function that takes in a key and returns an index into an array.
 * Hashing
 * Hashing is the process of mapping a key to a position in the hash table.
 */

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    /**
     * _hash
     * - Accepts a key
     * - Hashes the key
     * - Returns an index for the key
     *
     * @param {*} key
     * @returns
     */
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    /**
     * Set
     * - Accepts a key and a value
     * - Hashes the key
     * - Stores the key-value pair in the hash table array via separate chaining
     *
     * @param {*} key
     * @param {*} value
     */
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    /**
     * Get
     * - Accepts a key
     * - Hashes the key
     * - Retrieves the key-value pair in the hash table
     * - If the key isn't found, returns undefined
     *
     * @param {*} key
     * @returns
     */
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    /**
     * Keys
     * - Loops through the hash table array and returns an array of keys in the table
     */
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // Prevents duplicate keys
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    /**
     * Values
     * - Loops through the hash table array and returns an array of values in the table
     */
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            // Prevents duplicate values
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');

console.log(ht.get('maroon')); // #800000
console.log(ht.get('yellow')); // #FFFF00
console.log(ht.get('olive')); // #808000
console.log(ht.get('salmon')); // #FA8072
console.log(ht.get('lightcoral')); // #F08080
console.log(ht.get('mediumvioletred')); // #C71585
console.log(ht.get('plum')); // #DDA0DD
console.log(ht.get('cyan')); // undefined
console.log(ht.get('blue')); // undefined

console.log(ht.keys()); // [ 'maroon', 'yellow', 'olive', 'salmon', 'lightcoral', 'mediumvioletred', 'plum' ]
console.log(ht.values()); // [ '#800000', '#FFFF00', '#808000', '#FA8072', '#F08080', '#C71585', '#DDA0DD' ]

/**
 * Big O of Hash Tables
 * Insert - O(1)
 * Deletion - O(1)
 * Access - O(1)
 */
