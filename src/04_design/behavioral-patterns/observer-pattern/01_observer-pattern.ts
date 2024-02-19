export interface ObserverInt {
    update(): void;
}

export interface SubjectInt {
    subscribe(observer: ObserverInt): void;
    unsubscribe(observer: ObserverInt): void;
    fire(): void;
}

export class Subject implements SubjectInt {
    private observers: ObserverInt[] = [];

    constructor() {
        this.observers = [];
    }

    public subscribe(observer: ObserverInt): void {
        // Add observer to the list
        // I want to receive updates from this observer
        this.observers.push(observer);
    }

    public unsubscribe(observer: ObserverInt): void {
        // Remove observer from the list
        // I do not want to receive updates from this observer anymore
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    public fire(): void {
        this.observers.forEach((observer) => observer.update());
    }
}

const subject = new Subject();

export class Observer implements ObserverInt {
    public update(): void {
        console.log('Observer has been updated');
    }
}

export class Observer2 implements ObserverInt {
    public update(): void {
        console.log('Observer2 has been updated');
    }
}

const observer = new Observer();
const observer2 = new Observer2();
subject.subscribe(observer);
subject.subscribe(observer2);
subject.fire();
subject.unsubscribe(observer2);
subject.fire();
// Output:
