# Hashing Technique

Hashing is a technique used to efficiently store, retrieve, and manipulate data. It involves using a hash function to convert data (keys) into a fixed-size numerical value (hash code or hash value), which is then used to index an array (hash table). The main advantage of hashing is that it provides constant-time complexity, O(1), for search, insert, and delete operations in average cases.

### Key Concepts

1. **Hash Function:** A function that takes an input (or key) and returns a fixed-size string or number. The output, called a hash code, is typically used to index a hash table.
2. **Hash Table:** A data structure that maps keys to values using a hash function. It is an array where each position is a bucket that can hold values.
3. **Collision:** When two keys hash to the same index, a collision occurs. Various methods, such as chaining and open addressing, are used to handle collisions.

### Hashing Techniques

1. **Direct Hashing:** The key itself is used as the index. This is practical only when the number of keys is small compared to the size of the table.
2. **Modular Hashing:** The hash function uses the modulo operation. For example, `hash = key % table_size`.
3. **Multiplicative Hashing:** The hash function uses multiplication followed by a modulo operation. For example, `hash = (key * A) % table_size`, where A is a constant.

### Example Problems and Solutions

#### 1. Hashing for Fast Lookup (Dictionary Implementation)

**Problem:** Given a list of words, find if a particular word exists in the list.
**Solution:** Use a hash table to store the words. The hash function will determine the index where each word is stored, allowing for fast lookup.
**TypeScript Implementation:**

```js
class HashTable {
    private table: { [key: string]: boolean } = {};

    insert(word: string): void {
        this.table[word] = true;
    }

    contains(word: string): boolean {
        return this.table.hasOwnProperty(word);
    }
}

// Example usage:
const words = ["apple", "banana", "orange", "grape"];
const hashTable = new HashTable();

for (const word of words) {
    hashTable.insert(word);
}

console.log(hashTable.contains("banana"));  // Outputs: true
console.log(hashTable.contains("cherry"));  // Outputs: false
```

#### 2. Hashing for Two Sum Problem

**Problem:** Given an array of integers and a target sum, find two numbers such that they add up to the target.
**Solution:** Use a hash map to store the difference between the target and each element as you iterate through the array. This allows for O(1) lookups to find the complement of each element.
**TypeScript Implementation:**

```js
export const twoSum = (nums: number[], target: number): number[] => {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }

    return [];
};

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);  // Outputs: [0, 1]
```

### Collision Handling Techniques

1. **Chaining:** Each bucket of the hash table is a linked list. When a collision occurs, the new key-value pair is added to the linked list at the appropriate bucket.

```js
class HashTableWithChaining {
    private table: { [key: string]: string[] } = {};

    insert(key: string, value: string): void {
        const hash = this.hashFunction(key);
        if (!this.table[hash]) {
            this.table[hash] = [];
        }
        this.table[hash].push(value);
    }

    private hashFunction(key: string): string {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash << 5) - hash + key.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return hash.toString();
    }
}
```

2. **Open Addressing:** When a collision occurs, the hash function is used to find another bucket within the table by probing. Methods include linear probing, quadratic probing, and double hashing.

```js
class HashTableWithOpenAddressing {
    private table: (string | undefined)[];
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.table = new Array<string | undefined>(size);
    }

    insert(key: string): void {
        let hash = this.hashFunction(key);
        while (this.table[hash] !== undefined) {
            hash = (hash + 1) % this.size; // Linear probing
        }
        this.table[hash] = key;
    }

    private hashFunction(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash << 5) - hash + key.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return hash % this.size;
    }
}
```

### Summary

Hashing is a powerful technique for achieving constant-time complexity for search, insert, and delete operations in average cases. It is widely used in various applications, including dictionaries, caches, and database indexing. Proper handling of collisions and an efficient hash function are crucial for maintaining the performance benefits of hashing.