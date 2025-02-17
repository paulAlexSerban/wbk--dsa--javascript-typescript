/**
 * Method Injection
 * Dependencies are passed as method parameters.
 * 
 * Pros:
 * - It's easy to implement.
 * - It's easy to understand.
 * - It's easy to test.
 * - It's suitable for optional dependencies.
 * - It's suitable for circular dependencies.
 * - It's suitable for large number of dependencies.
 * - It's suitable for primitive types.
 * - It's suitable for multiple implementations of the same dependency.
 * - It's suitable for dependencies that are expensive to create.
 * 
 * Cons:
 * - It's not flexible. If you want to change the dependency, you have to change the method.
 * - It's not suitable for dependencies that have a different lifecycle.
 * 
 */
(() => {
  class Service {
    log() {
      console.log("Logging...");
    }
  }

  class Consumer {
    execute(service: Service) {
      service.log();
    }
  }

  // Injecting dependency
  const service = new Service();
  const consumer = new Consumer();
  consumer.execute(service);
})();
