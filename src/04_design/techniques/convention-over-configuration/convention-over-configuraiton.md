Convention over Configuration (CoC)
🔹 Definition: A design principle that minimizes explicit configuration by following sensible defaults.
🔹 Goal: Reduce boilerplate and increase developer productivity.
🔹 Examples:

Ruby on Rails → Uses naming conventions to reduce the need for manual configuration.
Spring Boot (Java) → Auto-configures components based on dependencies.
Next.js → Requires minimal setup compared to raw React.
📌 How it's related to IoC:
IoC often works alongside CoC frameworks, reducing the need for explicit dependency management.

---
📌 IoC Implementation: Frameworks use sensible defaults, reducing explicit configurations.
🔹 How to Use in Code:

Rails, Spring Boot, Next.js → Defaults over configuration
Auto-wiring in NestJS or Spring
✅ Example (NestJS Auto-wiring Services Without Manual DI):

```ts
import { Injectable } from "@nestjs/common";

@Injectable() // IoC: No need to manually inject this class
class UserService {
  getUsers() {
    return ["Alice", "Bob"];
  }
}

@Injectable()
class UserController {
  constructor(private readonly userService: UserService) {}

  getUsers() {
    return this.userService.getUsers();
  }
}
```