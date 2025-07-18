// piece of data
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// const first = new Node("Hi");
// first.next = new Node("there!");
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Add a new node to the end of the list
     * Pseudocode:
     * - accept a @param {*} val
     * - create a new Node using the value passed to the functions
     * - of there is no head property on the list, set the head and tail to be the newly created node
     * - otherwise set the next property on the tail to be new node and set the tail property on the list to be the newly created node
     * - increment the length by one
     * - return the linked list
     */
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Remove a node from the end of the Linked List
     * Pseudocode:
     * - if there are no nodes in the list, return undefined
     * - loop through the list until you reach tail
     * - set the next property of the 2nd to last node to be null
     * - set the tail to be the 2nd to last node
     * - decrement the length of the list by 1
     * - return the value of the node removed
     */
    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
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
    shift() {
        if (!this.head) {
            return undefined;
        }
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    /**
     * Add a new node to the beginning of the Linked List
     * Pseudocode:
     * - the function accept a @param {*} val
     * - cerate a new Node using the value passed to the function
     * - if there us no head property on the list, set the head and tail to be the newly created node
     * - otherwise set the newly created node's next property to be the current head property on the list
     * - set the head property on the list to be the newly created node
     * - increment the length of the list by 1
     * - @returns {linked-list}
     */
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Retrieve a node by it's position in the Linked List
     * Pseudocode:
     * - the function accepts an @param {*} index
     * - if the index is less than zero, or greater than or equal to the length of the list, return null
     * - loop through the list until you reach the index and return the node at that specific index
     * - @return {Node}
     */

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    /**
     * Change the value of a node based on it's position in the Linked List
     * Pseudocode
     * - the function accepts a value and an index
     * - use the get function to find the specific node
     * - if the node is not found, return false
     * - if the node is found, set the value of that node to be the value passed to the function and return true
     */
    set(index, val) {
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
     * - if the index is less than zero or greater than the length, return false
     * - if the index is the same as the length, push a new node to the end of the list
     * - if the index is 0, unshift a new node to the start of the list
     * - otherwise, using the get method, access the node at the index -1
     * - set the next property on that node to be the new node
     * - set the next property on the new node to be ghe previous next
     * - increment the length
     * - return true
     */
    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            return !!this.push(value);
        }
        if (index === 0) {
            return !!this.unshift(value);
        }

        const newNode = new Node(value);
        const previous = this.get(index - 1);
        const temp = previous.next;

        previous.next = newNode;
        newNode.next = temp;
        this.length++;

        return true;
    }

    /**
     * Remove a node from the Linked List at a specific position
     * Pseudocode
     * - if the index is less than zero or greater than the length return undefined
     * - if the index is the sa,e as the length - 1, pop()
     * - if the index is 0, shift()
     * - otherwise, use get() method, access the node at the index -1
     * - set the next property on that node to be the next of the next node
     * - decrement the length
     * - return the value of the node removed
     */

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }

        const previous = this.get(index - 1);
        const removed = previous.next;
        previous.next = removed.next;
        return removed;
    }

    /**
     * Reverse the linked list in place
     * Pseudocode
     * - swap the head and tail
     * - create variable called next
     * - create a variable called prev
     * - create a variable called node and initialize it to the head property
     * - loop through the list
     * - set next to be the next property on whatever node is
     * - set the next property on the node to be whatever prev is
     * - set the prev to be the value of the node variable
     * - set the node variable to be the value of the next variable
     */
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            // references old list
            next = node.next;
            // updating new list using variable pass by reference of old list
            // same as this.head.next x i (counter)
            node.next = prev;
            // update variables for next run
            prev = node;
            node = next;
        }
        return this;
    }

    rotate(place) {
        if (place === 0 || place >= this.length) {
            return this;
        }
        if (place < 0) {
            place = this.length + place;
        }
        let current = this.head;
        let counter = 0;
        while (counter < place) {
            this.push(current.val);
            this.shift(current.val);
            current = current.next;
            counter++;
        }

        return this;
    }

    reverseRecursive() {
        if (!this.length) {
            return undefined;
        }
        const reverseRecursive = function (node, prev) {
            if (node.next) {
                reverseRecursive(node.next, node);
            }
            node.next = prev;
        };
        reverseRecursive(this.head);
        [this.head, this.tail] = [this.tail, this.head];
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

const list = new SinglyLinkedList();
list.push('Hi,');
list.push('there!');
list.push('How');
list.push('are');
list.push('you?');
console.log(list.pop());
list.print();
console.log('********************************');
console.log(list.shift());
list.print();
console.log('********************************');
list.unshift('unshift');
list.print();
console.log('********************************');
console.log(list.get(3));
console.log('********************************');
list.set(3, 'set');
list.print();
console.log('********************************');
list.insert(2, 'inserted');
list.print();
console.log('********************************');
// list.remove(2);
list.print();
console.log('********************************');
list.reverseRecursive();
list.print();
console.log('********************************');
list.reverse();
list.print();
console.log('********************************');
list.rotate(2);
list.print();
