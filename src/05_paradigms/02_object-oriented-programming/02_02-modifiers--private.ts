 /**
  * Private
  * - private members are only accessible from within the class
  * - private members are not accessible from outside the class
  * - private members are not accessible from derived classes
  * - we are going to use private when we want to restrict access to a function or property
  */
(() => {
  const { log } = console;
  class Example {
      private _value: number;

      constructor(value: number) {
          this._value = value;
      }

      // getter
      get value(): number {
          log("Getting value");
          return this._value;
      }

      // setter
      set value(value: number) {
          log("Setting value");
          if (value < 0) {
              throw new Error("Invalid value");
          }
          this._value = value;
      }
  }

  let example = new Example(10);
  log(example.value); // Logs "Getting value" and 10
  example.value = 20; // Logs "Setting value"
  log(example.value); // Logs "Getting value" and 20
})();