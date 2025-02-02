export interface IObserver {
    update(): void;
}

export interface ISubject {
    subscribe(observer: IObserver): void;
    unsubscribe(observer: IObserver): void;
    fire(): void;
}

export class Subject implements ISubject {
    private observers: IObserver[] = [];

    constructor() {
        this.observers = [];
    }

    public subscribe(observer: IObserver): void {
        // Add observer to the list
        // I want to receive updates from this observer
        this.observers.push(observer);
    }

    public unsubscribe(observer: IObserver): void {
        // Remove observer from the list
        // I do not want to receive updates from this observer anymore
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    public fire(): void {
        this.observers.forEach((observer) => observer.update());
    }
}

const subject = new Subject();

export class Observer implements IObserver {
    public update(): void {
        console.log('Observer has been updated');
    }
}

export class Observer2 implements IObserver {
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
