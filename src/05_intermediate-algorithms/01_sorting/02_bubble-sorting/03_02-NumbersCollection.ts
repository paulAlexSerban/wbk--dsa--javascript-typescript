import { Sorter } from './03_01-Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
    this.data = data;
  }
  

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];

    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
console.log(numbersCollection.length);