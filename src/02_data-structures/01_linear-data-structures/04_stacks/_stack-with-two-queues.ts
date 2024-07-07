import { IQueue, Queue } from "../03_queues/_queue.d";

export interface IStackWithTwoQueues {
  push(val: any): IStackWithTwoQueues;
  pop(): any;
  isEmpty(): boolean;
}

export class StackWithTwoQueues implements IStackWithTwoQueues {
  private queue: IQueue;

  constructor() {
    this.queue = new Queue();
  }
  
  push(val: any) {
    const queue = this.queue;
    const queueTwo = new Queue();
    queueTwo.enqueue(val);

    while (queue.size) {
      queueTwo.enqueue(queue.dequeue());
    }

    this.queue = queueTwo;
    return this;
  } //O(n) time complexity

  pop() {
    return this.queue.dequeue();
  } //O(1) time complexity

  isEmpty() {
    return this.queue.size === 0;
  }
}
