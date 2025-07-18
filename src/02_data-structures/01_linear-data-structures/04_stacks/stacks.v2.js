class Node {
    constructor(val) {
        this.val = val;
    }
}

class Stack {
    constructor(val) {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var node = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            var tmp = this.first;
            this.first = node;
            this.first.next = tmp;
        }

        return ++this.size;
    }
    pop() {
        if (this.size === 0) return 0;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
            return --this.size;
        }

        let tmp = this.first.val;
        this.first = this.first.next;
        this.size--;
        return tmp;
    }
}

var stack = new Stack();

stack.push(10);
stack.push(100);
stack.push(1000);
var removed = stack.pop();
console.log(removed); // 1000
stack.size; // 2
console.log(stack.pop());
stack.pop();
console.log(stack.size); // 0
