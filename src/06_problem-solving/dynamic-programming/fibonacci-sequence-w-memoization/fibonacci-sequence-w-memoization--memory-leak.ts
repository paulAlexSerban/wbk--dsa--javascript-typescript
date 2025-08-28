(() => {
  // memory leak example in a dynamic programming and memoization context

  // global cache object
  const fibCache: { [key: number]: number } = {};

  const fibonacciGenerator = (num: number): number => {
    if (num <= 1) return num;
    if (fibCache[num] !== undefined) return fibCache[num];

    // the cache will grow indefinitely as 'num' increases and never cleared
    fibCache[num] = fibonacciGenerator(num - 1) + fibonacciGenerator(num - 2);
    return fibCache[num];
  };

  const main = (maxCount: number) => {
    for (let i = 0; i < maxCount; i++) {
      fibonacciGenerator(i); // the cache keeps on growing and is never freed
    }
  };

  main(1e6);

  /**
   * Why is this a memory leak?
   * - the fibCache object keeps a reference to every computed Fibonacci number up to 1000000
   * - if your program never deletes or frees this cache, and it runs for a long time, it will consume a significant amount of memory
   * even after those values are no longer needed
   */
})();
