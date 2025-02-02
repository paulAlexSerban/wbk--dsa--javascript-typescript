# Inversion of Control (IaC)

- software design technique used to achieve loose coupling in software architectures by delegating the control of object creation and dependency management to an external entity.
- software design technique where the control of program flow is delegated from custom-written code to a framework, library, or container. Instead of the programmer explicitly managing dependencies, object creation, or function calls, the framework takes care of these responsibilities.
- principle where the control flow of a program is inverted compared to traditional programming. In traditional programming, the custom code that you write makes calls to a library or framework, whereas with IoC, the framework calls into the custom code.
- broad principle that can be implemented in several ways, such as through event handling, template methods, and more prominently, dependency injection.
- serves as the foundation for frameworks, especially in modern software development, where frameworks call user-defined components or code based on specific events or configurations.
- software design technique that implements the SOLID - Dependency Inversion Principle (DIP).
- the DIP states the following:
  - 1. High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g. interfaces).
  - 2. Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

There are three types of Inversion of Control:

- Interface Inversion
  - Providers shouldn’t define an interface. Instead, the consumer should define the interface and providers must implement it. Interface Inversion allows for eliminating the necessity to modify the consumer each time when a new provider is added.
- Flow Inversion
  - Flow Inversion changes a program's flow control. For example, you have a console application where you are asked to enter many parameters, and after each entered parameter you are forced to press Enter. You can apply Flow Inversion here and implement a desktop application where the user can choose a sequence of parameters to enter, the user can edit parameters, and at the final step, the user needs to press Enter only once.
- Creation Inversion
  - It can be implemented by the following patterns: Factory Pattern, Service Locator, and Dependency Injection. Creation Inversion helps to eliminate dependencies between types moving the process of necessary objects' creation outside of the program type that uses these dependency objects. Why are dependencies bad? Here are a couple of examples: direct creation of a new object in your code makes testing harder; it is impossible to change references in assemblies without recompilation (it causes a violation of the OCP principle); you can’t easily replace a desktop UI with a web UI.

## **Key Concepts of IoC**

1. **Traditional Control Flow (Without IoC)**

   - The main program controls the execution sequence.
   - The programmer explicitly instantiates and manages objects.

2. **Inversion of Control (With IoC)**
   - Control is shifted to an external framework or container.
   - Dependencies are injected instead of being manually created.
   - Execution flow is dictated by events, callbacks, or configuration.

## **Examples of IoC in Practice**

1.  **Dependency Injection (DI)**

    - Instead of creating dependencies inside a class, they are injected from an external source.
    - Example: A service class depends on a database repository.

      ```typescript
      class UserRepository {
        constructor(private db: Database) {}
      }

      class UserService {
        constructor(private userRepository: UserRepository) {}
      }
      ```

      - Here, `UserRepository` is injected instead of being instantiated inside `UserService`.

2.  **Framework-Managed Execution**

    - In **Spring (Java)** or **NestJS (TypeScript)**, the framework initializes and manages components instead of the developer.
    - Example in **Spring Boot**:

      ```java
        @Repository
        public class UserRepository {}

        @Service
        public class UserService {
        private final UserRepository userRepository;

            @Autowired
            public UserService(UserRepository userRepository) {
                this.userRepository = userRepository;
            }

        }
      ```

    ```
    - The framework injects `UserRepository` at runtime.

    ```

3.  **Event-Driven Programming**

    - In **React**, components react to state changes rather than manually checking conditions.
    - Example:
      ```jsx
      useEffect(() => {
        fetchData();
      }, []);
      ```
      - React handles when `useEffect` runs, instead of the developer explicitly calling it in a loop.

4.  **Aspect-Oriented Programming (AOP)**
    - In **Spring AOP**, cross-cutting concerns (logging, security) are injected without modifying business logic.

## **Benefits of IoC**

✅ **Decoupling** – Reduces direct dependencies, making the code more flexible.  
✅ **Testability** – Facilitates unit testing since dependencies can be easily mocked.  
✅ **Scalability** – Enhances modularity, making large systems maintainable.  
✅ **Maintainability** – Less boilerplate, more focus on business logic.

## **Common IoC Containers**

- **Spring Framework (Java)**
- **NestJS (TypeScript)**
- **Angular (TypeScript)**
- **Dagger (Android)**
- **Autofac (.NET)**

## Inversion of Control (IoC) is a technique rather than a principle.

IoC vs Principles:

- IoC is a technique used to implement certain principles like the Dependency Inversion Principle (DIP) (the "D" in SOLID).
- The Dependency Inversion Principle is a principle that states that high-level modules should not depend on low-level modules, but both should depend on abstractions.
- IoC helps achieve DIP by transferring the control of dependencies from the code itself to a container or framework.

IoC in Practice:

- Dependency Injection (DI) – A common way to implement IoC by injecting dependencies instead of having components create them.
- Service Locator – Another IoC approach where a central registry provides dependencies.
- Event-Driven Systems – IoC is also applied in frameworks that use events and listeners.
  In summary, IoC is a technique that helps implement principles like DIP, making systems more modular, testable, and maintainable.

These **IoC-related programming techniques** allow for **decoupling, flexibility, and better testability**:

| **Technique**                     | **How It Implements IoC**              | **Example Usage**              |
| --------------------------------- | -------------------------------------- | ------------------------------ |
| **Dependency Injection (DI)**     | Dependencies injected externally       | Constructor/Setter Injection   |
| **Factory Pattern**               | Object creation delegated to a factory | Database connection factory    |
| **Service Locator**               | Centralized dependency resolution      | `ServiceLocator.get("Logger")` |
| **Event-Driven Architecture**     | Components communicate via events      | `eventBus.emit("userCreated")` |
| **Aspect-Oriented Programming**   | Cross-cutting concerns separated       | Logging Middleware, Decorators |
| **Convention Over Configuration** | Frameworks apply sensible defaults     | NestJS Auto-wiring, Rails      |
| **Middleware & Interceptors**     | Request processing is intercepted      | Express/NestJS Middleware      |

---

## **Conclusion**
📌 **IoC is not just about Dependency Injection.** It applies broadly across design patterns and programming paradigms, helping build **loosely coupled, scalable, and maintainable** applications.

🚀 **Next Steps:**  
Would you like to:
1. **Deep dive into a specific technique** (e.g., DI, Event-Driven Architecture)?
2. **Compare two techniques (DI vs. Service Locator)?**
3. **See real-world use cases from frameworks like NestJS, Angular, or Spring?**

# Reads

- https://stackoverflow.com/questions/3058/what-is-inversion-of-control
