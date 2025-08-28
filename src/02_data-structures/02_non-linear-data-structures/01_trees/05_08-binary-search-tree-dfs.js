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
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    DFSPreOrder() {
        let arr = [];
        if (this.root === null) return arr;
        const helper = (root) => {
            arr.push(root.value);
            if (root.left) helper(root.left);
            if (root.right) helper(root.right);
        };
        helper(this.root);
        return arr;
    }

    DFSInOrder() {
        let arr = [];
        if (this.root === null) return arr;
        const helper = (root) => {
            if (root.left) helper(root.left);
            arr.push(root.value);
            if (root.right) helper(root.right);
        };
        helper(this.root);
        return arr;
    }

    DFSPostOrder() {
        let arr = [];
        if (this.root === null) return arr;
        const helper = (root) => {
            if (root.left) helper(root.left);
            if (root.right) helper(root.right);
            arr.push(root.value);
        };
        helper(this.root);
        return arr;
    }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);
console.log(binarySearchTree.DFSPreOrder()); // [15, 10, 1, 5, 12, 20, 50]
console.log(binarySearchTree.DFSInOrder()); // [1, 5, 10, 12, 15, 20, 50]
console.log(binarySearchTree.DFSPostOrder()); // [5, 1, 12, 10, 50, 20, 15]
