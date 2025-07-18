# Proxy Design Pattern (Structural Pattern)

The Proxy design pattern is a structural pattern that involves an object called a "proxy" controlling access to another object, called the "real subject". The proxy can perform tasks like managing access to the real subject, caching, or performing additional processing before forwarding requests to the real subject.

## Key Components:

1. Subject: This is the interface or abstract class that defines the common methods for both the real subject and the proxy.
2. Real Subject: This is the actual object that the proxy is meant to control access to. The real subject implements the Subject interface and contains the business logic.
3. Proxy: This class also implements the Subject interface, and it holds a reference to the real subject. The proxy intercepts requests to the real subject and can perform additional tasks before forwarding the requests.

## 5 Use Cases:

1. Access Control: A proxy can be used to control access to sensitive data or actions in an application. For example, a file system proxy might allow read access to certain files but restrict write access based on user permissions.
2. Lazy Initialization: A proxy can be used to delay the creation of a heavy object until it is actually needed. For instance, in a document editor, a proxy for a large image might only load the actual image data when the user tries to view the image.
3. Caching: A proxy can be used to cache the results of expensive operations, reducing the need for repeated requests to the real subject. For example, a web proxy can cache the responses from a remote API, serving the cached data for subsequent requests without contacting the API again.
4. Logging and Monitoring: A proxy can be used to log or monitor the usage of the real subject, allowing for audit trails, performance monitoring, or debugging. For instance, a database proxy might log all queries sent to the database and measure their execution times.
5. Network Communication: A proxy can be used to manage network communication between a client and a remote server. For example, a remote proxy can encapsulate the complexities of network communication, allowing a local client to interact with a remote object as if it were local.
