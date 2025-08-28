# Trees

## What is a Tree?

-   a data structure that consists of nodes in a parent/child relationship
-   A tree is a commonly used abstract data type (ADT) or data structure implementing this ADT that simulates a hierarchical tree structure, with a set of linked nodes, in computer science.
-   This data structure is named a "tree" because the data structure resembles a tree, even though it is normally drawn upside down compared to a biological tree, with the "root" at the top and the "leaves" at the bottom.
-   Here's a simple breakdown of the tree data structure:

    1. **Node**: Each individual item in the tree is called a node. It's a basic unit of data storage. A node can hold its own data and links to other nodes.
    2. **Root**: The node at the top of the tree is called the root of the tree. There is only one root in any tree. In the case of binary trees, each node has at most two children.
    3. **Edges/Links**: The connections between nodes are called edges or links.
    4. **Children**: Nodes connected to a node directly beneath it are its children.
    5. **Parent**: The node which is an immediate predecessor of a node is called its parent node. Note that all nodes in a tree have only one parent, except the root node.
    6. **Siblings**: Nodes in a tree which have the same parent are called siblings.
    7. **Leaf**: Any node that doesn't have a child node in a tree is called a leaf node.
    8. **Sub-tree**: A sub-tree is a tree, consisting of a node in a tree T and all of its descendants in T.
    9. **Degree of a Node**: The degree of a node is the number of children of the node.
    10. **Depth/Level**: The depth (or level) of a node is the number of edges from the tree's root node to the node.
    11. **Height**: The height of a tree is the number of edges in the longest path from the root node to a leaf node.

-   The tree data structure has various applications such as in the representation of hierarchical relationships, making searches, insertions, and deletions efficient in certain cases, managing sorted lists of data, and as a workflow for compositing digital images for visual effects.

## Comparing Trees to Lists

-   lists are linear, trees are non-linear
-   a single linked list is a special case of a tree

> In Trees nodes only point to children, not to parents or siblings

## Trees use cases

-   HTML and the DOM
-   Network Routing (finding the best path)
-   Abstract Syntax Tree
-   Artificial Intelligence
-   Folders in Operating Systems
-   File Systems
-   JSON

## Trees, Binary Trees, and Binary Search Trees

### Trees

-   a data structure that consists of nodes in a parent/child relationship

### Binary Trees

-   a tree data structure in which each node has at most TWO children, which are referred to as the left child and the right child

### Binary Search Tree

-   a binary tree in which nodes that have values less than the parent are stored in the left subtree while nodes with values greater than the parent are stored in the right subtree
-   used data that can be compared

#### How Binary Search Trees Work (BSTs)

-   Every parent node has at most two children
-   Every node to the left of a parent node is always less than the parent
-   Every node to the right of a parent node is always greater than the parent

#### Why do use Binary Search Trees?

-   BSTs are used to store data that can be compared
-   It make sit easy to insert and find data
-   Search becomes quick and efficient in a BST
-

#### Big O of Binary Search Trees

-   Insertion - O(log n) - best and average case, O(n) - worst case
-   Searching - O(log n) - best and average case, O(n) - worst case
