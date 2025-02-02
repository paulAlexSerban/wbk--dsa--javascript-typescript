# Related to Dependency Injection (DI)
Dependency Injection (DI) falls under the broader category of **Inversion of Control (IoC) techniques**, which aim to reduce coupling and improve modularity. Here are some **other programming techniques related to DI** that achieve IoC or manage dependencies in a similar way:

---

## **1. Service Locator Pattern**
**How it works:** Instead of injecting dependencies, a class queries a central "service locator" to retrieve them.

🔹 **Example (TypeScript)**:
```typescript
class ServiceLocator {
  private static services = new Map<string, any>();

  static register<T>(name: string, instance: T) {
    this.services.set(name, instance);
  }

  static get<T>(name: string): T {
    return this.services.get(name);
  }
}

class Logger {
  log(message: string) {
    console.log(message);
  }
}

// Register the service
ServiceLocator.register("logger", new Logger());

// Usage
class Service {
  private logger: Logger;

  constructor() {
    this.logger = ServiceLocator.get<Logger>("logger");
  }

  doSomething() {
    this.logger.log("Doing something...");
  }
}
```
**Comparison to DI:**  
- **DI**: The dependency is **pushed** into the class.  
- **Service Locator**: The dependency is **pulled** by the class itself.  
- **Trade-off**: Service Locator can lead to hidden dependencies and makes testing harder.

---

## **2. Factory Pattern**
**How it works:** A factory method or class is responsible for creating objects and returning dependencies.

🔹 **Example (Factory Method in TypeScript):**
```typescript
class Logger {
  log(message: string) {
    console.log(message);
  }
}

class LoggerFactory {
  static createLogger() {
    return new Logger();
  }
}

class Service {
  private logger: Logger;

  constructor() {
    this.logger = LoggerFactory.createLogger();
  }

  doSomething() {
    this.logger.log("Doing something...");
  }
}
```
**Comparison to DI:**  
- **Factory Pattern** helps with object creation but still results in **tight coupling**.
- **DI** allows injecting any dependency without modifying the `Service` class.

---

## **3. Aspect-Oriented Programming (AOP)**
**How it works:** Cross-cutting concerns (like logging, security, transactions) are separated from the main business logic.

🔹 **Example (AOP Concept in JavaScript using a decorator)**:
```typescript
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with`, args);
    return originalMethod.apply(this, args);
  };
}

class Service {
  @LogMethod
  doSomething(param: string) {
    console.log("Executing:", param);
  }
}

const service = new Service();
service.doSomething("Task");
```
**Comparison to DI:**  
- **DI** manages dependencies;  
- **AOP** handles cross-cutting concerns **without modifying core logic**.

---

## **4. Event-Driven Programming**
**How it works:** Instead of direct method calls, components communicate through events.

🔹 **Example (Pub/Sub in JavaScript)**:
```typescript
class EventBus {
  private events: Map<string, Function[]> = new Map();

  on(event: string, listener: Function) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event)!.push(listener);
  }

  emit(event: string, data?: any) {
    if (this.events.has(event)) {
      this.events.get(event)!.forEach(listener => listener(data));
    }
  }
}

const eventBus = new EventBus();

// Subscriber
eventBus.on("data_received", (data) => console.log("Received:", data));

// Publisher
eventBus.emit("data_received", "Hello, world!");
```
**Comparison to DI:**  
- **DI** injects dependencies directly into classes.  
- **Event-Driven Programming** allows loose coupling by using **event emitters**.

---

## **5. Middleware Pattern**
**How it works:** Execution flows through a series of functions (common in Express, Koa, NestJS, etc.).

🔹 **Example (Express.js Middleware)**:
```typescript
const app = require("express")();

function loggerMiddleware(req, res, next) {
  console.log(`Request made to ${req.url}`);
  next(); // Pass control to the next middleware
}

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
```
**Comparison to DI:**  
- **DI** injects dependencies into objects.  
- **Middleware Pattern** chains functions to **process** input/output.

---

## **6. Proxy Pattern**
**How it works:** A proxy class sits between the caller and the actual object, intercepting method calls.

🔹 **Example (Logging Proxy in TypeScript)**:
```typescript
class Logger {
  log(message: string) {
    console.log(message);
  }
}

class LoggerProxy {
  private logger = new Logger();

  log(message: string) {
    console.log("[Proxy] Logging:", message);
    this.logger.log(message);
  }
}

const logger = new LoggerProxy();
logger.log("Hello World");
```
**Comparison to DI:**  
- **DI** injects dependencies directly into objects.  
- **Proxy Pattern** adds **control over method calls** before delegating to the real object.

---

## **Summary Table**
| **Technique**              | **Description** | **Similar to DI?** |
|---------------------------|----------------|------------------|
| **Service Locator**       | Dependencies are fetched instead of injected | ❌ Less explicit dependencies |
| **Factory Pattern**       | A separate class/method creates dependencies | ❌ Still tightly coupled |
| **AOP**                   | Separates cross-cutting concerns (logging, security) | 🔹 Complementary |
| **Event-Driven Programming** | Components communicate via events instead of direct calls | 🔹 Achieves loose coupling differently |
| **Middleware Pattern**    | Functions execute in a chain (common in web frameworks) | 🔹 Manages behavior like DI but for requests |
| **Proxy Pattern**         | Intercepts method calls (for logging, caching, etc.) | ❌ Not dependency management |

---

## **Conclusion**
- **DI** is one of many techniques for managing dependencies and reducing coupling.
- **Each technique has trade-offs**, and often **multiple techniques are used together** in large systems.
- **DI is preferred when dependencies are well-defined**, while **other techniques suit dynamic, event-driven, or middleware-based systems**.
