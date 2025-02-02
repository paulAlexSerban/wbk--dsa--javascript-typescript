The **Service Locator Pattern** is a software design pattern used to manage dependencies in an application by providing a centralized registry (or locator) where services can be registered and retrieved. It is an alternative to **Dependency Injection (DI)** but is often criticized for hiding dependencies and making code harder to maintain and test.

---

## **How It Works**
1. **Service Registry:** A central component (the service locator) holds references to different services.
2. **Service Registration:** Services are registered with the locator, often during application startup.
3. **Service Retrieval:** Components fetch the required services from the locator when needed.

---

## **Example in JavaScript/TypeScript**
### **Basic Implementation**
```typescript
class ServiceLocator {
    private static services = new Map<string, any>();

    static register<T>(key: string, service: T) {
        this.services.set(key, service);
    }

    static get<T>(key: string): T {
        const service = this.services.get(key);
        if (!service) {
            throw new Error(`Service not found: ${key}`);
        }
        return service;
    }
}

// Example services
class Logger {
    log(message: string) {
        console.log(`LOG: ${message}`);
    }
}

// Registering services
ServiceLocator.register("logger", new Logger());

// Retrieving and using services
const logger = ServiceLocator.get<Logger>("logger");
logger.log("This is a log message");
```

---

## **Advantages**
✅ **Decouples client classes from concrete implementations** – Clients don’t need to know how to create the services.  
✅ **Centralized service management** – Services are registered in one place.  
✅ **Useful in legacy or complex codebases** where Dependency Injection is hard to apply.

---

## **Disadvantages**
❌ **Hidden dependencies** – Services are not explicitly declared, making the code harder to understand and maintain.  
❌ **Tightly coupled to the service locator** – The application depends on the locator, making unit testing harder.  
❌ **Global state** – If misused, it can introduce global state problems.

---

## **Comparison: Service Locator vs Dependency Injection**
| Feature                 | Service Locator                          | Dependency Injection |
|-------------------------|----------------------------------------|----------------------|
| Dependency Management  | Pulled from the locator when needed    | Passed explicitly via constructor or setter |
| Testability            | Harder to test due to hidden dependencies | Easier to test with mock dependencies |
| Readability           | Harder to trace dependencies | Clearer as dependencies are explicitly provided |
| Flexibility           | More flexible in dynamic environments | More structured but less flexible |

---

## **When to Use**
- When working with **legacy codebases** that don't support dependency injection well.
- When dealing with **plugin-based architectures** where services need to be dynamically registered and retrieved.
- When **performance concerns** make Dependency Injection impractical (e.g., reducing constructor injection overhead in high-performance applications).

However, in modern software development, **Dependency Injection is preferred over the Service Locator Pattern** for better maintainability and testability.

----
Service Locator Pattern
📌 IoC Implementation: A centralized registry (or container) provides required dependencies when requested.
🔹 How to Use in Code:

Centralized object resolution
Avoids explicit dependency passing
✅ Example (Simple Service Locator in JavaScript):

```ts
class ServiceLocator {
  private static services = new Map<string, any>();

  static register(name: string, instance: any) {
    this.services.set(name, instance);
  }

  static get(name: string) {
    return this.services.get(name);
  }
}

// Registering services
ServiceLocator.register("Logger", new Logger());

// Retrieving services
const logger = ServiceLocator.get("Logger");
logger.log("Hello from Service Locator!");
```