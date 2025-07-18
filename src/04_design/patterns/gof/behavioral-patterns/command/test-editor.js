/**
 * In this example, we'll create a simple text editor using the Command design pattern.
 * The text editor supports inserting text, deleting text, and undoing the last operation.
 */

/**
 * 1. Define the `Command` interface with the `execute` and `undo` methods.
 */

class Command {
    execute() {
        throw new Error('execute method must be implemented in the derived class');
    }

    undo() {
        throw new Error('undo method must be implemented in the derived class');
    }
}

/**
 * 2. Create the `InsertTextCommand` class, which implements the `Command` interface
 * and handles inserting text at a specific position.
 */

class InsertTextCommand extends Command {
    constructor(textEditor, position, text) {
        super();
        this.textEditor = textEditor;
        this.position = position;
        this.text = text;
    }

    execute() {
        this.textEditor.insertText(this.position, this.text);
    }

    undo() {
        this.textEditor.deleteText(this.position, this.text.length);
    }
}

/**
 * 3. Create the `DeleteTextCommand` class, which implements the `Command`
 * interface and handles deleting text from a specific position.
 */

class DeleteTextCommand extends Command {
    constructor(textEditor, position, length) {
        super();
        this.textEditor = textEditor;
        this.position = position;
        this.length = length;
        this.deletedText = '';
    }

    execute() {
        this.deletedText = this.textEditor.deleteText(this.position, this.length);
    }

    undo() {
        this.textEditor.insertText(this.position, this.deletedText);
    }
}
/**
 * 4. Create the `TextEditor` class, which represents the text editor and
 * holds the current text and the command history for undo operations.
 */

class TextEditor {
    constructor() {
        this.text = '';
        this.commandHistory = [];
    }

    insertText(position, text) {
        this.text = this.text.slice(0, position) + text + this.text.slice(position);
    }

    deleteText(position, length) {
        const deletedText = this.text.substr(position, length);
        this.text = this.text.slice(0, position) + this.text.slice(position + length);
        return deletedText;
    }

    executeCommand(command) {
        command.execute();
        this.commandHistory.push(command);
    }

    undo() {
        const command = this.commandHistory.pop();
        if (command) {
            command.undo();
        }
    }
}

/**
 * 5. Example usage of the text editor with the Command design pattern.
 */

const editor = new TextEditor();

editor.executeCommand(new InsertTextCommand(editor, 0, 'Hello, world!'));
console.log(editor.text); // Output: 'Hello, world!'

editor.executeCommand(new InsertTextCommand(editor, 7, ' beautiful'));
console.log(editor.text); // Output: 'Hello, beautiful world!'

editor.executeCommand(new DeleteTextCommand(editor, 7, 10));
console.log(editor.text); // Output: 'Hello, world!'

editor.undo();
console.log(editor.text); // Output: 'Hello, beautiful world!'

/**
 * In this example, the `TextEditor` class acts as the Invoker, and the
 * `InsertTextCommand` and `DeleteTextCommand` classes are Concrete Commands.
 * The text editor supports executing and undoing operations through the Command
 * pattern, which decouples the text editing logic from the actual text
 * manipulation operations.
 */
