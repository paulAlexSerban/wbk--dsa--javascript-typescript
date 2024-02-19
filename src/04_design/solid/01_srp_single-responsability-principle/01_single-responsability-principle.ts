import fs from 'fs';

class Journal {
    private static count = 0;
    private entries: { [key: number]: string } = {};
    constructor() {
        this.entries = {};
    }

    addEntry(text: string) {
        let count = Journal.count++;
        let entry = `${count}: ${text}`;
        this.entries[count] = entry;
    }

    removeEntry(index: number) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }
}

class PersistenceManager {
    saveToFile(journal: Journal, filename: string) {
        fs.writeFileSync(filename, journal.toString());
    }

    loadFile(filename: string) {
        return fs.readFileSync(filename, 'utf8');
    }
}

(() => {
    const journal = new Journal();
    journal.addEntry('I cried today');
    journal.addEntry('I ate a bug');
    journal.addEntry('I ate a cake');
    console.log(journal.toString());
    journal.removeEntry(0);
    console.log(journal.toString());

    const persistenceManager = new PersistenceManager();
    const filename = './journal.txt';
    persistenceManager.saveToFile(journal, filename);
    console.log(persistenceManager.loadFile(filename));
})();

/**
 * The take away from this example is that:
 * - better group functionality by class instead of having a single class that does everything
 * 
 * Anti-pattern: God object
 * - A class that does everything
 * - lots of responsibilities, lots of spaghetti code and hard to figure out what's going on
 * - Hard to maintain
 * - Hard to test
 * - Hard to understand
 * 
 * Separation of concerns
 * - it is what you do when you refactor a god object or complicated algorithm
 */
