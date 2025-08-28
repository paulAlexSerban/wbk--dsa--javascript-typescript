(() => {
  // solution: fibonacci with memoization and NO MEMORY LEAK

  const fibonacciGenerator = (num: number): number => {
    // use local cache scoped to the function call
    const fibCache: { [key: number]: number } = {};
    const _getFib = (k: number): number => {
      if (k <= 1) return k;
      if (fibCache[k] !== undefined) return fibCache[k];

      fibCache[k] = _getFib(k - 1) + _getFib(k - 2);
      return fibCache[k];
    };
    return _getFib(num);
  };

  // example usage - only stores results needed for the current call, so memory is released after use
  console.log(fibonacciGenerator(10)); // 55
  console.log(fibonacciGenerator(20)); // 6765
  console.log(fibonacciGenerator(30)); // 832040

  // no growing global cache - only necessary cache for each call is kept and garbage collected afterwards
})();
