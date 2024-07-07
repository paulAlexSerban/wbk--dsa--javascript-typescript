export interface IStack {

    push(element: any): void;
    pop(): any;
    peek(): any;
    isEmpty(): boolean;
    printStack(): string;
    
}

class Stack implements IStack {
  private items: any[];
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(element: any) {
    this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // View the top element of the stack
  peek() {
    if (this.isEmpty()) {
      return "No elements in Stack";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Display all elements in the stack
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

export { Stack };