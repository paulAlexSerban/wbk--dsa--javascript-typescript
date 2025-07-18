class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

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

    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(5).push(10).push(15).push(20);
console.log(singlyLinkedList.get(0).val); // 5
console.log(singlyLinkedList.get(1).val); // 10
console.log(singlyLinkedList.get(2).val); // 15
console.log(singlyLinkedList.get(3).val); // 20
console.log(singlyLinkedList.get(4)); // null

console.log(singlyLinkedList.set(0, 10)); // true
console.log(singlyLinkedList.get(0).val); // 10
console.log(singlyLinkedList.set(4, 30)); // false (No node at this index)
