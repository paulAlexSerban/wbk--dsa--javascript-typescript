(() => {
    function printAnything<T>(arg: T): T {
        return arg;
    }

    printAnything<string>("Hello World");
    printAnything<number>(123);
})();


(() => {
    function printAnything<T>(arg: T[]): void {
        for (let i = 0; i < arg.length; i++) {
            console.log(arg[i]);
        }
    }

    printAnything<string>(["Hello", "World"]);
    printAnything<number>([1, 2, 3]);
})();


(() => {
  // type inference with generics
  function printAnything<T>(arg: T[]): void {
    for (let i = 0; i < arg.length; i++) {
      console.log(arg[i]);
    }
  }
  
  // you do not need to specify the type
  printAnything(["Hello", "World"]);
  printAnything([1, 2, 3]);
})()