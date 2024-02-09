function processData() {
  let largeArray = new Array(1000000).fill('data');
  return function() {
      return [...largeArray]; // Returns a copy of largeArray
  };
}

export default processData;