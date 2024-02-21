(() => {
    /**
     * Dependency Inversion Principle
     * - Dependency Injection is a consequence of Dependency Inversion Principle
     * - DIP defines a relationship between low-level and high-level modules
     */

    // HIGH-LEVEL MODULE
    // this kind of high-level module is concerned with the business logic like getting the data out or how to use the data

    // Define Relationship as an enum for better type safety
    enum Relationship {
        Parent = 0,
        Child = 1,
        Sibling = 2,
    }

    // Person class with a name property
    class Person {
        constructor(public name: string) {}
    }
    // LOW-LEVEL (STORAGE)
    // Abstract class for relationship browsing
    abstract class RelationshipBrowser {
        abstract findAllChildrenOf(name: string): Person[];
    }

    // Concrete implementation of RelationshipBrowser
    class Relationships extends RelationshipBrowser {
        private data: { from: Person; type: Relationship; to: Person }[] = [];

        addParentAndChild(parent: Person, child: Person): void {
            this.data.push({
                from: parent,
                type: Relationship.Parent,
                to: child,
            });
            this.data.push({
                from: child,
                type: Relationship.Child,
                to: parent,
            });
        }

        findAllChildrenOf(name: string): Person[] {
            return this.data.filter((d) => d.from.name === name && d.type === Relationship.Parent).map((d) => d.to);
        }
    }

    // High-level module that depends on an abstraction (RelationshipBrowser)
    class Research {
        // constructor(relationships)
        // {
        //   // problem: direct dependence ↓↓↓↓ on storage mechanic
        //   let relations = relationships.data;
        //   for (let rel of relations.filter(r =>
        //     r.from.name === 'John' &&
        //     r.type === Relationship.parent
        //   ))
        //   {
        //     console.log(`John has a child named ${rel.to.name}`);
        //   }
        // }
        constructor(browser: RelationshipBrowser) {
            for (let p of browser.findAllChildrenOf('John')) {
                console.log(`John has a child named ${p.name}`);
            }
        }
    }

    // Example usage
    const parent = new Person('John');
    const child1 = new Person('Chris');
    const child2 = new Person('Matt');

    const relationships = new Relationships();
    relationships.addParentAndChild(parent, child1);
    relationships.addParentAndChild(parent, child2);

    new Research(relationships);
})();
