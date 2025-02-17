/**
 * Property Injection
 * Dependencies are assigned via public properties or setter methods.
 * 
 * Pros:
 * - It's easy to implement.
 * - It's easy to understand.
 * - It's easy to test.
 * - It's suitable for optional dependencies.
 * - It's suitable for circular dependencies.
 * - It's suitable for large number of dependencies.
 * 
 * Cons:
 * - It's not flexible. If you want to change the dependency, you have to change the property.
 * - It's not suitable for primitive types.
 * - It's not suitable for multiple implementations of the same dependency.
 * - It's not suitable for dependencies that are expensive to create.
 * - It's not suitable for dependencies that have a different lifecycle.
 * - It's not suitable for dependencies that are not available when the object is created.
 * - It's not suitable for dependencies that are not available when the object is used.
 * - It's not suitable for dependencies that are not available when the object is destroyed.
 * - It's not suitable for dependencies that are not available when the object is garbage collected.
 * - It's not suitable for dependencies that are not available when the object is serialized.
 * - It's not suitable for dependencies that are not available when the object is deserialized.
 * - It's not suitable for dependencies that are not available when the object is cloned.
 */

(() => {
  class Service {
    log() {
      console.log("Logging...");
    }
  }

  class Consumer {
    service!: Service; // Will be set later

    execute() {
      this.service.log();
    }
  }

  const service = new Service();
  const consumer = new Consumer();
  consumer.service = service; // Injecting dependency
  consumer.execute();
})();
