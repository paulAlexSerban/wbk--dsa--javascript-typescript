/**
 * Generics
 */

(() => {
  // class ArrayOfNumbers {
  //   constructor(public collection: number[]) {}

  //   get(index: number): number {
  //     return this.collection[index]
  //   }
  // }

  // class ArrayOfStrings {
  //   constructor(public collection: string[]) {}

  //   get(index: number): string {
  //     return this.collection[index]
  //   }
  // }

  // => instead of creating a class for each type, we can use generics

  class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
      return this.collection[index]
    }
  }

  new ArrayOfAnything<string>(['a', 'b', 'c'])

})();

(() => {
  // type inference with generics
  class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
      return this.collection[index]
    }
  }

  const arr = new ArrayOfAnything(['a', 'b', 'c'])
  console.log(arr)

})()