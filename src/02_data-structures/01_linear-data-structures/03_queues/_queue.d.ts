import { Node } from "../02_linked-lists/_node.d";

export interface IQueue {
  first: Node | null;
  last: Node | null;
  size: number;
  enqueue(data: any): number;
  dequeue(): any;
}

export class Queue implements IQueue {
  first: Node | null;
  last: Node | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data: any) {
    const node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    }
    if (this.last) {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    const temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
