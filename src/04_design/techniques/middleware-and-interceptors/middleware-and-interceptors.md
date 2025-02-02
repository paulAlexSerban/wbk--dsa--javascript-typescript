Middleware and Interceptors
📌 IoC Implementation: Intercepts function execution before it reaches the main logic.
🔹 How to Use in Code:

Express/NestJS Middleware
Apollo GraphQL Interceptors
✅ Example (NestJS Global Middleware):

```ts
import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
  }
}
```