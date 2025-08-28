# Memento Design Pattern (Behavioral Pattern)

The Memento design pattern is a behavioral pattern that is used to store the historical state of an object and allow previous states to be restored at any time. It is one of the twenty-three well-known GoF design patterns that describe how to solve recurring design problems to design flexible and reusable object-oriented software [1].

## The key components of the Memento design pattern are:

Originator: This is the object whose state needs to be saved and restored. It creates a Memento object containing a snapshot of its current state and uses the Memento object to restore its state later on.
Memento: This is the object that stores the state of the Originator. It has two interfaces, one for the Caretaker to access the state (get and set), and one for the Originator to create and restore its state.
Caretaker: This is the object that holds the Memento and is responsible for its safekeeping. It doesn't modify the Memento but can request the Originator to restore its state using the Memento [1].

## Here are 5 use cases of the Memento design pattern using JavaScript:

Undo/Redo functionality in a text editor: In a text editor, the user can undo/redo the last action performed. The Memento design pattern can be used to store the state of the text editor before each action, allowing the user to undo or redo the action by restoring the previous state of the text editor [2].

Game state management: In a game, the user can save the game state and load it later. The Memento design pattern can be used to store the game state and restore it later when the user loads the game. This can be used for saving the progress of the game and continuing from where the user left off [2].

Form data persistence: In a web application, the user can fill out a form and submit it. If the submission fails, the user has to fill out the form again. The Memento design pattern can be used to store the state of the form before submission and restore it if the submission fails, allowing the user to continue filling out the form from where they left off [4].

Browser history management: In a web application, the user can navigate back and forth between pages using the browser's back and forward buttons. The Memento design pattern can be used to store the state of each page and restore it when the user navigates back or forward, allowing the user to resume their browsing session from where they left off [4].

User session management: In a web application, the user can log in and perform various actions. The Memento design pattern can be used to store the state of the user session before each action, allowing the user to undo or redo the action by restoring the previous state of the user session [2].

In conclusion, the Memento design pattern is used to store the historical state of an object and allow previous states to be restored at any time. It has three key components: Originator, Memento, and Caretaker. The Memento design pattern can be used in situations where some actions are undoable, therefore requiring to rollback to a previous state. It can be used in various use cases such as undo/redo functionality in a text editor, game state management, form data persistence, browser history management, and user session management.

## Citations

1. [en.wikipedia.org](https://en.wikipedia.org/wiki/Memento_pattern)
2. [bealdung.com](https://www.baeldung.com/java-memento-design-pattern)
3. [blog.airbike.io](https://blog.airbrake.io/blog/design-patterns/memento-design-pattern)
