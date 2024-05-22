export class DynamicArray {
  private capacity: number;
  private size: number;
  private array: number[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.array = new Array(capacity);
  }

  get(i: number): number {
    return this.array[i];
  }

  set(i: number, n: number): void {
    this.array[i] = n;
  }

  pushback(n: number): void {
    if (this.size === this.capacity) {
      this.resize();
    }
    this.array[this.size] = n;
    this.size++;
  }


  popback(): number {
    if (this.size === 0) {
      throw new Error("Array is empty");
    }
    const value = this.array[this.size - 1];
    this.size--;
    return value;
  }

  resize(): void {
    this.capacity *= 2;
    const newArray = new Array(this.capacity);
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
  }


  getSize(): number {
    return this.size;
  }

  getCapacity(): number {
    return this.capacity;
  }
}
