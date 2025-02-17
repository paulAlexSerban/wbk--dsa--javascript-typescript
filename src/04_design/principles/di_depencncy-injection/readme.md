## Dependency Injection (DI)
- specific form of IoC where dependencies (services or objects that a class needs to perform its function) are provided to the class rather than created by the class itself. DI can be done through constructor injection, property injection, or method injection.
- used for managing and configuring components in large software systems. It makes code more modular and testable by decoupling the instantiation of dependencies from the class's business logic.
- commonly used in combination with IoC containers, which automate the process of supplying objects with their dependencies. These containers manage object creation and lifecycle based on configuration or metadata.

### Dependency Injection (DI) in Software Engineering
- software design pattern used to achieve **Inversion of Control (IoC)** by injecting dependencies into a class instead of creating them internally. This makes the code more modular, testable, and maintainable.

## **1. What is Dependency Injection?**
Instead of a class creating its own dependencies, they are provided externally, typically through:
- **Constructor Injection** (passing dependencies via the constructor)
- **Method Injection** (passing dependencies via methods)
- **Property Injection** (setting dependencies via properties or setters)

This approach removes **hard-coded dependencies** and follows **SOLID principles**, especially:
- **Single Responsibility Principle (SRP)**: Each class is only responsible for its own behavior.
- **Dependency Inversion Principle (DIP)**: High-level modules should not depend on low-level modules. Instead, both should depend on abstractions.

## **2. Why Use Dependency Injection?**
✅ **Decoupling:** Reduces tight coupling between classes, making the system flexible.  
✅ **Testability:** Makes it easier to write unit tests with mock dependencies.  
✅ **Maintainability:** Changes to one dependency don't require modifications to dependent classes.  
✅ **Scalability:** Easily swap implementations (e.g., replace a database service with an in-memory cache).  

## **3. Types of Dependency Injection**
### **1. Constructor Injection** (Recommended)
Dependencies are passed via the constructor.

```typescript
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
```

### **2. Method Injection**
Dependencies are passed as method parameters.
```typescript
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

const service = new Service();
const consumer = new Consumer();
consumer.execute(service);
```

### **3. Property Injection** (Setter Injection)
Dependencies are assigned via public properties or setter methods.
```typescript
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
```

## **4. DI in Modern Frameworks**
Most modern frameworks come with built-in DI containers:

- **JavaScript/TypeScript**:
  - Angular (`@Injectable`, `@Inject`)
  - NestJS (uses TypeScript decorators for DI)
  - InversifyJS (Dependency Injection for TypeScript)
  
- **Java**:
  - Spring (`@Autowired`)
  - Jakarta EE (CDI - Contexts and Dependency Injection)
  
- **.NET**:
  - ASP.NET Core (`IServiceCollection`, `AddTransient`, `AddSingleton`)


## **5. Example in NestJS (A DI Framework for Node.js)**
```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
class LoggerService {
  log(message: string) {
    console.log(message);
  }
}

@Injectable()
class AppService {
  constructor(private logger: LoggerService) {}

  execute() {
    this.logger.log("Executing...");
  }
}
```
Here, `LoggerService` is injected into `AppService` via the constructor.

---

## **6. When Not to Use Dependency Injection**
❌ **Simple projects:** DI frameworks add unnecessary complexity for small apps.  
❌ **Performance-critical apps:** DI frameworks can introduce a slight overhead.  
❌ **High-level configuration is not needed:** If dependencies rarely change, DI might be overkill.

---

## **7. Conclusion**
- Dependency Injection **improves modularity, maintainability, and testability**.
- Constructor Injection is **preferred** for immutability and clarity.
- DI is **widely used in modern frameworks** like Angular, NestJS, Spring, and ASP.NET Core.
- It’s an implementation of the **Dependency Inversion Principle (DIP)**.


**Dependency Injection (DI) is a programming technique, not a design pattern.**  

However, it is commonly used to implement **Inversion of Control (IoC)**, which is a broader design principle. DI is often associated with the **Dependency Inversion Principle (DIP)** from SOLID principles.  

### **1. DI as a Programming Technique**
DI is a **way** to provide dependencies to a class instead of having the class create them itself. It is a **mechanism** that helps manage dependencies in a flexible and decoupled way.  

🔹 Example (Constructor Injection in TypeScript):
```typescript
class Logger {
  log(message: string) {
    console.log(message);
  }
}

class Service {
  constructor(private logger: Logger) {}

  doSomething() {
    this.logger.log("Doing something...");
  }
}

const logger = new Logger();
const service = new Service(logger); // Dependency is injected
service.doSomething();
```
Here, `Logger` is injected into `Service`, making `Service` **independent** of how `Logger` is created.

### **2. How DI Relates to Design Patterns**
While DI itself is not a design pattern, it is often used alongside certain design patterns:
- **Factory Pattern**: Used to create dependencies and inject them into classes.
- **Strategy Pattern**: Allows different implementations of a dependency to be injected.
- **Service Locator Pattern**: An alternative to DI where dependencies are retrieved from a central registry.

### **3. DI vs. IoC**
- **Inversion of Control (IoC)** is a **design principle** that shifts control of dependency management from the class to an external entity.
- **Dependency Injection (DI)** is a **specific technique** used to achieve IoC.

📌 **Analogy**:  
- **IoC** is the concept of hiring a delivery service instead of picking up food yourself.  
- **DI** is the method by which the delivery service hands you the food.  

### **4. Conclusion**
✅ **DI is a programming technique** that facilitates loose coupling.  
✅ **It is not a Gang of Four (GoF) design pattern** but supports various design patterns.  
✅ **It enables IoC**, making applications more modular and testable.  

## Resources
- [wikipedia - dependency injection](https://en.wikipedia.org/wiki/Dependency_injection)
- [dependency injection with examples](https://stackify.com/dependency-injection/)
- [understanding dependency injections](https://medium.com/@sardar.khan299/understanding-dependency-injection-a-powerful-design-pattern-for-flexible-and-testable-code-5e1161dd37dd)
- [stackoverflow - dependency injection](https://stackoverflow.com/questions/66915874/is-dependency-injection-a-design-pattern)
- [about design patterns - dependency injections](https://aveuiller.github.io/about_design_patterns-dependency_injection.html)
- [redit - what design pattern could we use fo dependency injection](https://www.reddit.com/r/dotnet/comments/1bb3fa5/what_design_pattern_could_we_use_for_creating/?rdt=34971)