class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let node = new Node(val);

        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }
}

var queue = new Queue();
queue.enqueue(10); // 1
queue.size; // 1
queue.enqueue(100); // 2
queue.size; // 2
queue.enqueue(1000); // 3
queue.size; // 3
