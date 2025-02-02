# OCP - Open/Closed Principle
- classes/components should be open for extension, but closed for modification
- the goal is to allow the introduction of new features without changing existing code
- components behavior can be extended without modifying the core
- composition and inheritance are the two main techniques to achieve this
- Example:
  - to swap out the DB implementation,  the business logic should not be modified
  - a library should allow adding new functionalities without changing it's existing code
  - add new functionalities via inheritance, then use composition to swap out the implementation