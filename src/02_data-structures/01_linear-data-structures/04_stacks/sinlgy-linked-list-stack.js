class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**
     * Remove a new node from the beginning of the Linked List
     * Pseudocode:
     * - of there are no nodes, return undefined
     * - store the current head property in a variable
     * - set the head property to be the current head's next property
     * - decrement the length by 1
     * - return the value of the node removed
     */
    pop() {
        if (!this.first) return undefined;
        const currentHead = this.first;
        this.first = currentHead.next;
        this.size--;
        if (this.size === 0) {
            this.last = null;
        }
        return currentHead;
    }

    /**
     * Add a new node to the beginning of the Linked List
     * Pseudocode:
     * - the function accept a @param {*} val
     * - create a new node with that value
     * - if there are no nodes in the stack, set the first and last property to be the newly created node
     * - if there is at least one node, create a variable that stores the current first property on the stack
     * - reset the first property to be the newly created node
     * - increment the size of the stack by 1
     * - @returns {linked-list}
     */
    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this;
    }
}

const stack = new Stack();
console.log(stack.push(23));
console.log(stack.push(24));
console.log(stack.pop());
