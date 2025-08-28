/**
 * This code is an example of the builder design pattern, where the CodeBuilder
 * class helps in constructing a Class object in a step-by-step manner.
 */

// Field class represents a field in a class with a name
class Field {
    constructor(name) {
        this.name = name;
    }
}

// Class class represents a class with a name and a list of fields
class Class {
    constructor(name) {
        this.name = name;
        this.fields = [];
    }

    // This method converts the Class object into a string representation
    toString() {
        let buffer = [];
        buffer.push(`class ${this.name} {\n`);

        if (this.fields.length > 0) {
            buffer.push(`  constructor(`);
            for (let i = 0; i < this.fields.length; ++i) {
                buffer.push(this.fields[i].name);
                if (i + 1 !== this.fields.length) buffer.push(', ');
            }
            buffer.push(`) {\n`);
            for (let field of this.fields) {
                buffer.push(`    this.${field.name} = ${field.name};\n`);
            }
            buffer.push('  }\n');
        }

        buffer.push('}');
        return buffer.join('');
    }
}

// CodeBuilder class is the builder for the Class class
class CodeBuilder {
    constructor(className) {
        this._class = new Class(className);
    }

    // This method adds a field to the class
    addField(name) {
        this._class.fields.push(new Field(name));
        return this;
    }

    // This method converts the CodeBuilder object into a string representation
    toString() {
        return this._class.toString();
    }
}

// Test case using console.log
let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());

/**
 * In the test case, a CodeBuilder instance is created with the class name
 * 'Person'. Then, two fields ('name' and 'age') are added to the class
 * using the addField method. Finally, the toString method is called to
 * print the string representation of the class.
 */
