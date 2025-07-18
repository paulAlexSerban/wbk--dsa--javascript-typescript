const fs = require('fs');

/**
 * The only responsibility of the Journal class is to keep entries, the only actions
 * that it can perform are to ADD or REMOVE entries in the journal.
 */

class Journal {
    constructor() {
        this.entries = {};
    }

    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }
}

/**
 * To have the possibility to save the journal entries to a file, load data from a
 * file or URL, the best approach is to create the PersistenceManager class,
 * this class can be used on other objects also
 */

class PersistenceManager {
    preprocess(journal) {
        //
    }

    saveToFile(journal, filename) {
        fs.writeFileSync(filename, journal.toString());
    }

    load(filename) {
        // load file
    }

    loadFromURL(url) {
        // load journal from URL
    }
}

Journal.count = 0;

let j = new Journal();
j.addEntry('I cried today');
j.addEntry('I ate a bug');

console.log(j.toString());

let p = new PersistenceManager();
let filename = './journal.txt';
p.saveToFile(j, filename);
