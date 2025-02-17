/**
 * Constructor Injection
 * Dependencies are passed via the constructor.
 * This is the most common way to inject dependencies.
 * 
 * Pros:
 * - It's easy to implement.
 * - It's easy to understand.
 * - It's easy to test.
 * 
 * Cons:
 * - It's not flexible. If you want to change the dependency, you have to change the constructor.
 * - It's not suitable for optional dependencies.
 * - It's not suitable for circular dependencies.
 * - It's not suitable for large number of dependencies.
 * - It's not suitable for primitive types.
 * - It's not suitable for multiple implementations of the same dependency.
 * - It's not suitable for dependencies that are expensive to create.
 * - It's not suitable for dependencies that have a different lifecycle.
 */

(() => {
  class Service {
    log() {
      console.log("Logging...");
    }
  }
  
  class Consumer {
    constructor(private service: Service) {}
  
    execute() {
      this.service.log();
    }
  }
  
  // Injecting dependency
  const service = new Service();
  const consumer = new Consumer(service);
  consumer.execute();
})()
