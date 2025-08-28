// piece of data
// reference to next node - next

const { remove } = require('lodash');

class Node {
    constructor(val = '') {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// const first = new Node("Hi");
// first.next = new Node("there!");
// first.next.prev = first;
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");
// console.log(first);

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Add a node to the end of the Doubly Linked List
     *
     * Pseudocode
     * - create a new node with the value passed to the function
     * - if the head property is null, set the head amd tail to be the newly created node
     * - set the previous property on the newly created ode to be the tail
     * - set the tail to be the newly created node
     * - increment the length
     * - increment the Doubly Linked List
     */
    push(val = '') {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Remove a node from the end of the Doubly Linked List
     *
     * Pseudocode
     * - if there is no head, return undefined
     * - store the current tail in a variable to return later
     * - if the length is 1, set the head and tail to be null
     * - update the tail to be the previous Node
     * - set th newTail's next to null
     * - decrement the length
     * - return the value removed
     */
    pop() {
        if (!this.head) return undefined;
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    /**
     * Remove a new node from the beginning of the Doubly Linked List
     *
     * Pseudocode:
     * - if length is 0, return undefined
     * - store the current head property in a variable (we call it old head)
     * - if the length is 1
     *  - set the head to be null
     *  - set the tail to be null
     * - update the head to be the next of the old head
     * - set head's prev property to null
     * - set the old head's next to null
     * - decrement the length
     * - return old head
     */
    shift() {
        if (!this.head || this.length === 0) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    /**
     * Add a new node to the beginning of the Doubly Linked List
     *
     * Pseudocode:
     * - create a new node with the value passed to the function
     * - if the length is 0
     *  - set the head to be the new node
     *  - set the tail to be the new node
     * - otherwise
     *  - set the prev property on the head of the list to be the new node
     *  - set the next property on the new node to be the head property
     *  - update te head to be the new node
     * - increment the length
     * - return the list
     */
    unshift(val = '') {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Retrieve a node by it's position in the Doubly Linked List
     *
     * Pseudocode
     * - if the index is less than zero, or greater than or equal to the length of the list, return null
     * - if the index is less than or equal to half the length of the list
     *    - loop through the list starting from th head and loop towards the middle
     *    - return the node once it is found
     * - if the index is greater then half of the length of the list
     *    - loop through the list starting from the tail and loop towards the middle
     *    - return the node once it is found
     */

    get(index = 0) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        if (index <= this.length / 2) {
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    /**
     * Change the value of a node based on it's position in the Doubly Linked List
     *
     * Pseudocode:
     * - create a variable which is the result of GET method at the index passed to the function
     *  - if the GET method returns a valid node, set the value of that node to be the value passed to the function
     *  - return true
     * - otherwise return false
     */
    set(index = 0, val = '') {
        const foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    /**
     * Adds a node to the Linked List at a specific position
     * Pseudocode
     *
     * - if the index is less than or greater tha= or equal to the length, return false
     * - if the index is 0, UNSHIFT
     * - if the index ss the same as the length, PUSH
     * - use the GET method to access ht index-1;
     * - set the next and prev properties on the correct nodes to link everything together
     * - increment length
     * - return true
     */

    insert(index = 0, value = '') {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value); // !! to cohere to boolean as push return the list
        if (index === 0) return !!this.unshift(value); // !! to cohere to boolean as push return the list

        const newNode = new Node(value);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;

        (beforeNode.next = newNode), (newNode.prev = beforeNode);
        (newNode.next = afterNode), (afterNode.prev = newNode);
        this.length++;

        return true;
    }
    /**
     * Remove a node from the Linked List at a specific position
     * Pseudocode
     * - if the index is less than zero or greater than or equal to the length, return undefined
     * - if the index is 0, SHIFT
     * - if the index is the same as the length - 1, POP
     * - use the GET method to retrieve the item to be removed
     * - update the next and prev properties to remove te found node from the list
     * - set next and prev to null on the found node
     * - decrement the length
     * - return the removed node
     **/
    remove(index = 0) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const removedNode = this.get(index);
        const beforeNode = removedNode.prev;
        const afterNode = removedNode.next;
        (beforeNode.next = afterNode), (afterNode.prev = beforeNode);
        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

    reverse() {
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;

        let nextNode = null;
        let prevNode = null;

        for (let i = 0; i < this.length; i++) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            currentNode.prev = nextNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        return this;
    }

    // only to showcase traversing of the linked list
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    // makes it easier to print in one line
    print() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

const list = new DoublyLinkedList();

console.log('************** START PUSH ******************');
console.log(list.push('Hi'));
console.log(list.push('there!'));
console.log(list.push('How'));
console.log(list.push('are'));
console.log(list.push('you?'));
console.log(list.push('Hi'));
console.log(list.push('there!'));
console.log(list.push('How'));
console.log(list.push('are'));
console.log(list.push('you?'));
console.log('************** END PUSH *******************');
console.log('************** START POP *******************');
console.log(list.pop());
console.log('************** END POP *******************');
console.log(list.push('your chickens?'));
console.log('************** START SHIFT *******************');
console.log(list.shift());
console.log('************** END SHIFT *******************');
console.log('************** START UNSHIFT *******************');
console.log(list.unshift('Hello'));
console.log('************** END UNSHIFT *******************');

console.log('************** START GET *******************');
console.log(list.get(7));
console.log('************** END GET *******************');

console.log('************** START SET *******************');
console.log(list.set(1, 'Chao'));
console.log('************** END SET *******************');

console.log('************** START INSERT *******************');
console.log(list.insert(1, 'Bella'));
console.log('************** END INSERT *******************');
list.traverse();
list.print();

console.log('************** START REMOVE *******************');
console.log(list.remove(1));
console.log('************** END REMOVE *******************');
list.print();
list.reverse();
list.print();

// const doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList.push(5); // doublyLinkedList
// doublyLinkedList.length; // 1
// doublyLinkedList.head.val; // 5
// doublyLinkedList.tail.val; // 5
// doublyLinkedList.head.prev; // null
// doublyLinkedList.push(10);
// // doublyLinkedList;
// doublyLinkedList.length; // 2
// doublyLinkedList.head.val; // 5
// doublyLinkedList.head.next.val; // 10
// doublyLinkedList.tail.val; // 10
// doublyLinkedList.head.next.prev.val; // 10
// doublyLinkedList.push(15);
// // doublyLinkedList;
// doublyLinkedList.length; // 3
// doublyLinkedList.head.val; // 5
// doublyLinkedList.tail.val; // 15
// doublyLinkedList.tail.prev.val; // 10
// doublyLinkedList.head.next.next.val; // 15

// doublyLinkedList.pop().val; // 15
// doublyLinkedList.length; // 2
// doublyLinkedList.pop().val; // 10
// doublyLinkedList.length; // 1
// doublyLinkedList.pop().val; // 5
// doublyLinkedList.length; // 0
// doublyLinkedList.pop(); // undefined
// doublyLinkedList.length; // 0
