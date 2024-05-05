// SubjectObserver.test.js
import { Subject, Observer, Observer2, type ISubject, type IObserver } from './01_observer-pattern'; // Update the path to where your classes are defined

describe('Observer Pattern Implementation', () => {
    let subject: ISubject;
    let observer1: IObserver;
    let observer2: IObserver;

    beforeEach(() => {
        subject = new Subject();
        observer1 = new Observer();
        observer2 = new Observer2();
    });

    test('should subscribe observers', () => {
        jest.spyOn(observer1, 'update');
        jest.spyOn(observer2, 'update');

        subject.subscribe(observer1);
        subject.subscribe(observer2);

        subject.fire();

        expect(observer1.update).toHaveBeenCalled();
        expect(observer2.update).toHaveBeenCalled();
    });

    test('should unsubscribe an observer', () => {
        jest.spyOn(observer1, 'update');
        jest.spyOn(observer2, 'update');

        subject.subscribe(observer1);
        subject.subscribe(observer2);
        subject.unsubscribe(observer1);

        subject.fire();

        expect(observer1.update).not.toHaveBeenCalled();
        expect(observer2.update).toHaveBeenCalled();
    });

    test('should not fail when firing with no observers', () => {
        const action = () => subject.fire();
        expect(action).not.toThrow();
    });
});

/**
 * Setup: Each test case starts by creating a fresh instance of Subject and two observers (Observer and Observer2). This ensures that the tests do not interfere with each other.
 * Subscribing Observers: The first test verifies that after subscribing observers to the subject, calling fire on the subject results in the update method being called on both observers.
 * Unsubscribing Observers: The second test checks that after unsubscribing an observer, calling fire does not call its update method, but still calls the update method of the other subscribed observer.
 * No Observers: The third test ensures that calling fire on the subject with no subscribed observers does not throw any errors, which helps verify the robustness of the implementation.
 */
