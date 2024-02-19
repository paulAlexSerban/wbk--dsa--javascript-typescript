## Interface Segregation Principle
- keep interfaces small
- clients should not be forced to depend on methods that they do not use
- clients should not be forced to implement i=unnecessary methods which w=they do not use
- interfaces belong to clients, not to the implementors or hierarchies
- if class implements an interface with methods it does not needs, it violates the ISP
- Examples:
  - a class that implements an interface with methods it does not need
  - a class that depends on an interface with methods it does not use or need