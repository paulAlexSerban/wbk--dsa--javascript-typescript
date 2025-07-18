/**
 * In this piece of code, we have a simple implementation of the
 * Iterator design pattern using a binary tree data structure. The Iterator
 * pattern provides a way to access the elements of an aggregate object
 * sequentially without exposing its underlying representation.
 */

/**
 * This Node class represents a node in a binary tree. Each node has a value,
 * a left child, a right child, and a parent.
 */

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;

        this.parent = null;

        if (left) left.parent = this;
        if (right) right.parent = this;
    }

    /**
     * The _traverse generator method is used for traversing the binary tree
     * in a depth-first manner. It takes a current node as an argument and first
     * yields the current node, then recursively iterates over the left and
     * right children if they exist.
     */

    *_traverse(current) {
        yield current;
        if (current.left) {
            for (let left of this._traverse(current.left)) yield left;
        }
        if (current.right) {
            for (let right of this._traverse(current.right)) yield right;
        }
    }

    /**
     * The preorder generator method is used to return the values of the nodes
     * in a pre-order traversal. It uses the _traverse method to iterate over
     * the nodes and yields their values.
     */

    *preorder() {
        // return all the node *values* (not the nodes)
        for (let node of this._traverse(this)) yield node.value;
    }
}

// Test cases using console.log
class Test {
    static testPreorderTraversal() {
        let node = new Node('a', new Node('b', new Node('c'), new Node('d')), new Node('e'));

        let values = [];
        for (let value of node.preorder()) values.push(value);

        console.log(`Testing preorder traversal: ${values.join('') === 'abcde'}`);
    }
}

// Run the test
Test.testPreorderTraversal();

/**
 * This test case creates a binary tree with the structure:
 *     a
 *    / \
 *   b   e
 *  / \
 * c   d
 */

/**
 * It then calls the preorder generator method on the root node and collects the values
 * in an array. Finally, it checks whether the values collected match the expected
 * pre-order traversal sequence: 'abcde'
 */
