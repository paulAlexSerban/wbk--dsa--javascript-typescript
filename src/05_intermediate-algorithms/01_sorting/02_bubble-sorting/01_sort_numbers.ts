(() => {
  class Sorter {
    constructor(public collection: number[]) {
      this.collection = collection;
    }
  
    sort(): void {
      const { length } = this.collection;
      let swapped = false;
  
      do {
        swapped = false;
        for (let i = 0; i < length - 1; i++) {
          if (this.collection[i] > this.collection[i + 1]) {
            const temp = this.collection[i];
            this.collection[i] = this.collection[i + 1];
            this.collection[i + 1] = temp;
            swapped = true;
          }
        }
      } while (swapped);
    }
  }
  
  const sorter = new Sorter([10, 3, -5, 0]);
  sorter.sort();
  console.log(sorter.collection);
})()