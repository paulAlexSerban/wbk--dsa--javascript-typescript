(() => {
  class LRUCache {
    limit: number;
    cache: Map<number, number>;
    constructor(limit: number) {
      this.limit = limit;
      this.cache = new Map();
    }

    get(key: number): number | undefined {
      if (!this.cache.has(key)) {
        return undefined;
      }

      // refresh usage
      const value = this.cache.get(key);
      if (value !== undefined) {
        this.cache.delete(key);
        this.cache.set(key, value);
      }
      return value;
    }

    set(key: number, value: number) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      } else if (this.cache.size >= this.limit) {
        // remove least recently used
        const firstKey = this.cache.keys().next().value;
        if (firstKey !== undefined) {
          this.cache.delete(firstKey);
        }
      }
      this.cache.set(key, value);
    }
  }

  const fibonacciGenerator = (
    num: number,
    cache = new LRUCache(1000)
  ): number => {
    if (num <= 1) {
      return num;
    }

    const cached = cache.get(num);
    if (cached !== undefined) {
      return cached;
    }

    const result =
      fibonacciGenerator(num - 1, cache) + fibonacciGenerator(num - 2, cache);
    cache.set(num, result);
    return result;
  };

  // Example usage
  console.log(fibonacciGenerator(10)); // 55
  console.log(fibonacciGenerator(20)); // 6765
  console.log(fibonacciGenerator(1476)); // 1.3069892237633987e+308 - any number greater than 1476 will return Infinity
})();
