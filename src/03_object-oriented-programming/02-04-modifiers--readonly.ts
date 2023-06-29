/**
 * Readonly modifier
 * - readonly members can be accessed outside the class, but their values can't be changed
 * - readonly properties can only be set in the constructor
 * - readonly properties can be public, private, or protected
 * - readonly properties can be static or instance
 * - readonly properties can be accessed from within the class, from derived classes, and from outside the class
 * - readonly properties can be accessed from static methods
 * - readonly properties can be accessed from instance methods
 * - readonly properties can be accessed from static constructors
 */

(() => {
  const { log } = console;

  class Example {
    readonly readonlyProperty: string = "readonly";
    readonly readonlyProperty2: string;
    readonly readonlyProperty3: string;
    readonly readonlyProperty4: string;

    constructor(readonlyProperty2: string, readonlyProperty3: string) {
      this.readonlyProperty2 = readonlyProperty2;
      this.readonlyProperty3 = readonlyProperty3;
      this.readonlyProperty4 = "readonly";
    }

    publicMethod() {
      log(this.readonlyProperty);
      log(this.readonlyProperty2);
      log(this.readonlyProperty3);
      log(this.readonlyProperty4);
    }
  }

  let example = new Example("readonly2", "readonly3");
  example.publicMethod(); // "readonly", "readonly2", "readonly3", "readonly"
})()