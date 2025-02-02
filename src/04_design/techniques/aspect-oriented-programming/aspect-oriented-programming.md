Aspect-Oriented Programming (AOP)
🔹 Definition: Separates cross-cutting concerns (like logging, security) from core logic.
🔹 Goal: Improve modularity by keeping unrelated concerns out of business logic.
🔹 Examples:

Logging & Monitoring → Instead of adding logging manually, a separate module handles it.
Security (JWT Authentication Middleware) → Authentication is applied globally rather than in each function.
Performance Metrics → Injected dynamically instead of modifying core logic.
📌 How it's related to IoC:
IoC and AOP both reduce direct dependencies and help with maintainability.

---
📌 IoC Implementation: Separates cross-cutting concerns (e.g., logging, security) from core logic.
🔹 How to Use in Code:

Middleware (Express.js, NestJS)
Decorators (TypeScript)

✅ Example (Logging as Middleware in Express.js):
```ts
import express from "express";
const app = express();

function loggerMiddleware(req, res, next) {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
}

app.use(loggerMiddleware); // IoC: Middleware intercepts request

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => console.log("Server running"));
```

✅ Example (Logging Decorator in TypeScript):

```ts
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with`, args);
    return original.apply(this, args);
  };
}

class UserService {
  @Log
  createUser(name: string) {
    console.log(`User ${name} created`);
  }
}

const userService = new UserService();
userService.createUser("Alice");
```