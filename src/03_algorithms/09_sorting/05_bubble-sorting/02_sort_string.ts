
// bad approach - only use as example to showcase type guards
(() => {
  class Sorter {
    constructor(public collection: number[] | string) {
      this.collection = collection;
    }
  
    sort(): void {
      const { length } = this.collection;
  
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          // type guard for array
          if (this.collection instanceof Array) {
            if (this.collection[j] > this.collection[j + 1]) {
              const leftHand = this.collection[j];
              this.collection[j] = this.collection[j + 1];
              this.collection[j + 1] = leftHand;
            }
          }
  
          // type guard for string
          if (typeof this.collection === 'string') {
          }
        }
      }
    }
  }
  
  const sorter = new Sorter([10, 3, -5, 0]);
  sorter.sort();
  console.log(sorter.collection);
})()
