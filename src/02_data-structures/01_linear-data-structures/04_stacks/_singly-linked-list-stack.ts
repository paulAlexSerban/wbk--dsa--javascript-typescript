import { INode } from "../02_linked-lists/_node";

export interface ISinglyLinkedListStack {
  first: INode | null;
  last: INode | null;
  size: number;
  push(val: any): ISinglyLinkedListStack;
  pop(): INode | undefined;
  isEmpty(): boolean;
}

export class SinglyLinkedListNode implements INode {
  value: any;
  next: INode | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedListStack implements ISinglyLinkedListStack {
  first: INode | null;
  last: INode | null;
  size: number;

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
    if (!this.first) {
      return undefined;
    }
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
   * - create a new node with that value
   * - if there are no nodes in the stack, set the first and last property to be the newly created node
   * - if there is at least one node, create a variable that stores the current first property on the stack
   * - reset the first property to be the newly created node
   * - increment the size of the stack by 1
   */
  push(val: INode) {
    const newNode = new SinglyLinkedListNode(val);
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

  /**
   * Return true if the stack is empty
   */

  isEmpty() {
    return this.size === 0;
  }
}
