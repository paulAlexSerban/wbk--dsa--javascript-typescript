class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**
     * Pseudocode:
     * - the function accept a @param {*} val
     * - create a new node with that value
     * - if there are no nodes in the stack, set the first and last property to be the newly created node
     * - otherwise set the next property on the current last to be that node, and then set the last property of the queue to be that node
     * @param {*} value
     */
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    /**
     * Pseudocode:
     * - if there are no nodes, return null
     * - store the first property in a variable
     * - see if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
     * - if there is more than 1 node, set the first property to be the next property of first
     * - decrement the size by 1
     * - return the value of the node dequeued
     * @returns {null|*}
     */
    dequeue() {
        if (!this.first) return null;
        const currentHead = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = currentHead.next;
        this.size--;
        return currentHead.value;
    }
}

const queue = new Queue();
queue.enqueue('element1');
queue.enqueue('element2');
console.log(queue.enqueue('element3')); // 3
console.log(queue); // element1, element2, element3
console.log(queue.dequeue()); // element1
console.log(queue);
