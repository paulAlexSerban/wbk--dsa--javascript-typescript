class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Insert a new node into the tree
     * Pseudocode:
     * - create a new node
     * - starting at the root
     *  - check if there is a root, if not - the root now becomes that new node!
     *    - if there is a root, check if the value of the new node is greater than or less than the value of the root
     * - if it is greater
     *    - check to see if there is a node to the right
     *      - if there is, move to that node and repeat these steps
     *      - if there is not, add that node as the right property
     * - if it is less
     *    - check to see if there is a node to the left
     *      - if there is, move to that node and repeat these steps
     *      - if there is not, add that node as the left property
     * @param {*} value
     * @returns {BinarySearchTree}
     * @memberof BinarySearchTree
     */
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            // If the value is already in the tree, return undefined
            if (value === current.value) return undefined;
            // If the value is less than the current node, go left
            if (value < current.value) {
                // If there is no left child, add the new node there
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                // If there is, move to that node and repeat these steps
                current = current.left;
            } else {
                // If the value is greater than the current node, go right
                // If there is no right child, add the new node there
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                // If there is, move to that node and repeat these steps
                current = current.right;
            }
        }
    }

    /**
     * Find a node in the tree
     * Pseudocode:
     * - starting at the root
     * - check if there is a root, if not - we're done searching!
     * - if there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
     * - if not, check to see if the value is greater than or less than the value of the root
     * - if it is greater
     *    - check to see if there is a node to the right
     *      - if there is, move to that node and repeat these steps
     *      - if there is not, we're done searching!
     * - if it is less
     *    - check to see if there is a node to the left
     *      - if there is, move to that node and repeat these steps
     *      - if there is not, we're done searching!
     * @param {*} value
     * @returns {Node}
     * @memberof BinarySearchTree
     */
    find(value) {
        // if there is no root, return undefined
        if (!this.root) {
            return undefined;
        }
        // if there is a root, start there
        let current = this.root;
        // we haven't found the node yet
        let found = false;

        while (current && !found) {
            // while there is a current node and we haven't found the node we're looking for
            if (value < current.value) {
                // if the value is less than the current node's value, go left
                current = current.left;
            } else if (value > current.value) {
                // if the value is greater than the current node's value, go right
                current = current.right;
            } else {
                // we found the node we're looking for
                found = true;
            }
        }

        if (!found) {
            // if we didn't find the node we're looking for, return undefined
            return undefined;
        }
        return current; // if we found the node we're looking for, return it
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree.find(7));
console.log(tree.find(99));
console.log(tree.find(2));
console.log(tree.find(10));
console.log(tree.find(11));
console.log(tree.find(16));
console.dir(tree);
