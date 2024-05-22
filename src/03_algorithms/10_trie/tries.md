# Tries

Tries, also known as prefix trees or digital trees, are a type of search tree used to store a dynamic set or associative array where the keys are usually strings. Unlike binary search trees, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated. All the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string.

### Key Characteristics of Tries

1. **Hierarchical Data Structure**:
   - Tries are tree-like structures where each node represents a character of the string. The path from the root to a node represents a prefix of the string stored in the trie.

2. **Fast Retrieval**:
   - Tries allow for efficient retrieval of keys by exploiting the common prefixes of strings. This makes operations like search, insert, and delete very fast, usually O(m) where m is the length of the key.

3. **Prefix Search**:
   - Tries are particularly useful for scenarios where you need to find all keys with a common prefix. For example, in auto-completion systems.

### Basic Operations

1. **Insertion**:
   - To insert a key, start from the root and follow the path corresponding to the characters in the key. Create new nodes as needed. Mark the end of the key with a special end marker (often a boolean flag in the node).

2. **Search**:
   - To search for a key, start from the root and follow the path corresponding to the characters in the key. If you reach a node and there are no more characters to follow, and the end marker is present, the key exists in the trie.

3. **Deletion**:
   - To delete a key, follow the path of characters. If the key exists, remove the end marker. Additionally, remove nodes that are no longer part of any other key.

### Example

Consider inserting the words "cat", "car", and "cap" into a trie:

```
            (root)
           /  |  \
          c   a   p
         / \     
        a   a    
       /   / \
      t   r   p
```

### Code Implementation (in TypeScript)

Here's a simple implementation of a Trie in TypeScript:

```typescript
class TrieNode {
  public children: Map<string, TrieNode>;
  public isEndOfWord: boolean;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.isEndOfWord = false;
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  public insert(word: string): void {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char)!;
    }
    currentNode.isEndOfWord = true;
  }

  public search(word: string): boolean {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }
    return currentNode.isEndOfWord;
  }

  public startsWith(prefix: string): boolean {
    let currentNode = this.root;
    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }
    return true;
  }
}

// Example usage:
const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("cap");

console.log(trie.search("cat")); // true
console.log(trie.search("can")); // false
console.log(trie.startsWith("ca")); // true
```

### Use Cases

- **Autocomplete systems**: Suggesting words based on prefixes typed by users.
- **Spell checkers**: Verifying the correctness of words.
- **IP routing**: Longest prefix matching.
- **Natural Language Processing**: Storing a large dictionary of words.

### Advantages

- **Efficient prefix searches**: Very efficient for prefix searches and matching.
- **Space optimization**: Can be more space-efficient than hash tables when storing many keys with common prefixes.

### Disadvantages

- **Space consumption**: Can use more space compared to other data structures like hash tables, especially with a large set of non-overlapping keys.
- **Complexity**: More complex to implement compared to simpler data structures like arrays or linked lists.