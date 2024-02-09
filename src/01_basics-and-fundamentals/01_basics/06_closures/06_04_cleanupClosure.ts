function cleanUpClosure() {
  let largeObject: string[] | null = new Array(1000000).fill('data');
  return function() {
      largeObject = null; // Nullifying the reference to allow garbage collection
      return largeObject;
  };
}

export default cleanUpClosure;
