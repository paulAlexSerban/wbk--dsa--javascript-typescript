Event-Driven Architecture (EDA)
🔹 Definition: Systems where components react to events rather than calling each other directly.
🔹 Goal: Improve scalability and decoupling.
🔹 Examples:

Pub/Sub Messaging → A service publishes an event, and multiple subscribers consume it.
Kafka, RabbitMQ, Redis Pub/Sub → Event brokers.
React Event Listeners → onClick, onChange, etc.
📌 How it's related to IoC:
IoC removes direct dependencies, and EDA does the same by loosely coupling services through events.

---
📌 IoC Implementation: Instead of direct method calls, components communicate via events, reducing dependencies.
🔹 How to Use in Code:

Publish/Subscribe Pattern
Message Brokers (Kafka, RabbitMQ)
✅ Example (Pub/Sub in Node.js using EventEmitter):

```ts
import { EventEmitter } from "events";

const eventBus = new EventEmitter();

// Subscriber
eventBus.on("userCreated", (user) => {
  console.log(`User created: ${user.name}`);
});

// Publisher
function createUser(name: string) {
  console.log("Creating user...");
  eventBus.emit("userCreated", { name });
}

createUser("Alice");
```