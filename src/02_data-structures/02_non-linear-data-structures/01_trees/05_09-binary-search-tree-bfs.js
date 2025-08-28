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
    breadthFirstSearch() {
        let data = [this.root];
        let dataToReturn = [this.root.value];
        let node = this.root;

        for (let i = 0; i >= 0; i++) {
            if (data[i].left) {
                data.push(data[i].left);
                dataToReturn.push(data[i].left.value);
            }
            if (data[i].right) {
                data.push(data[i].right);
                dataToReturn.push(data[i].right.value);
            }
            if (!data[i].left && !data[i].right) {
                return dataToReturn;
            }
        }
    }

    remove(val) {
        let delNode;
        const del = (root, val) => {
            if (root === null) return root;
            else if (val > root.value) root.right = del(root.right, val);
            else if (val < root.value) root.left = del(root.left, val);
            else {
                // if node is found
                if (delNode === undefined) delNode = root.value;
                // case 1: no children (leaf)
                if (root.left === null && root.right === null) {
                    root = null;
                }

                // case 2: 1 child
                else if (root.left === null) {
                    // right child
                    root = root.right;
                } else if (root.right === null) {
                    // left child
                    root = root.left;
                }

                // case 3: 2 children
                else {
                    let temp = findMin(root.right); // assign a root to min in a right subtree
                    root.value = temp.value;
                    root.right = del(root.right, root.value);
                }
            }
            return root;
        };
        const findMin = (root) => {
            if (root === null) return root;
            if (root.left) return findMin(root.left);
            return root;
        };

        this.root = del(this.root, val);
        return delNode;
    }
    // Time complexity: O(n)
    findSecondLargest() {
        let fL, sL; // first, second largest values
        const findMax = (root) => {
            if (root === null) return root;
            if (root.right) {
                sL = root;
                return findMax(root.right);
            }
            return root;
        };
        fL = findMax(this.root); // find first largest
        const helper = (root) => {
            if (root === null) return root;
            // if fL has a left subtree,
            // find the largest in this subtree
            if (root.left) {
                sL = findMax(root.left);
            }
            return sL;
        };
        sL = helper(fL);
        if (sL === null) return undefined;
        return sL.value;
    }

    // Average Time Complexity O(n)
    findSecondLargest2() {
        let arr = [];
        if (this.root === null) return undefined;
        const helper = (root) => {
            if (root.left) helper(root.left);
            arr.push(root.value);
            if (root.right) helper(root.right);
        };
        helper(this.root);
        return arr[arr.length - 2];
    }

    isBalanced() {
        function maxDepth(node) {
            if (!node) return 0;
            return Math.max(maxDepth(node.left) + 1, maxDepth(node.right) + 1);
        }

        function minDepth(node) {
            if (!node) return 0;
            return Math.min(minDepth(node.left) + 1, minDepth(node.right) + 1);
        }

        let maximum = Math.max(maxDepth(this.root.left), maxDepth(this.root.right));
        let minimum = Math.min(minDepth(this.root.left), minDepth(this.root.right));
        return maximum - minimum <= 1;
    }
}
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);
console.log(binarySearchTree.breadthFirstSearch()); // [(15, 10, 20, 1, 12, 50, 5)];

binarySearchTree.remove(50);
console.log(binarySearchTree.root.right.value); // 20
console.log(binarySearchTree.root.right.right); // null

console.log(binarySearchTree.isBalanced()); // true
binarySearchTree.insert(5);
console.log(binarySearchTree.isBalanced()); // true
binarySearchTree.insert(6);
console.log(binarySearchTree.isBalanced()); // true
binarySearchTree.insert(7);
console.log(binarySearchTree.isBalanced()); // false
