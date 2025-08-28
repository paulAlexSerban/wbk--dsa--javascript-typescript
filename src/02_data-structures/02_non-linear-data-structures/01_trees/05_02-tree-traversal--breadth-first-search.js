/**
 * Breadth-first search
 *
 * Steps - Iteratively
 * 1. Create a queue (this can be an array) and a variable to store the values of nodes visited
 * 2. Place the root node in the queue
 * 3. Loop as long as there is anything in the queue
 *  a. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
 *  b. If there is a left property on the node dequeued - add it to the queue
 *  c. If there is a right property on the node dequeued - add it to the queue
 * 4. Return the variable that stores the values
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    contains(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS() {
        // Create a queue (this can be an array) and a variable to store the values of nodes visited
        let node = this.root;
        const data = [];
        const queue = [];
        queue.push(node);
        console.log(queue);

        while (queue.length) {
            // Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
            node = queue.shift();
            console.log(node);
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
