/**
 * Invert Binary Tree
 *
 * Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Example 1:
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 *
 * Example 2:
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 *
 * Example 3:
 * Input: root = []
 * Output: []
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 100].
 * - -100 <= Node.val <= 100
 */
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

(() => {
    // Recursive Solution
    function invertTree(root) {
        if (root === null) {
            return null;
        }

        // Swap left and right subtrees
        [root.left, root.right] = [root.right, root.left];

        // Invert left and right subtrees
        invertTree(root.left);
        invertTree(root.right);

        return root;
    }

    // Iterative Solution

    // Time complexity: O(n)
    // Space complexity: O(n)

    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(9);

    console.log(invertTree(root));
})();

(() => {
    function invertTree(root) {
        if (root === null) {
            return null;
        }

        let queue = [root];

        while (queue.length > 0) {
            let current = queue.shift();

            // Swap left and right children
            [current.left, current.right] = [current.right, current.left];

            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
        }

        return root;
    }

    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(9);

    console.log(invertTree(root));

    // Time complexity: O(n)
    // Space complexity: O(n)
})();
