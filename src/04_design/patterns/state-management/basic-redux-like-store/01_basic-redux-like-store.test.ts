// Import the createStore function and the CounterReducer
import { createStore, CounterReducer } from './01_basic-redux-like-store';

describe('createStore', () => {
    it('initializes with the default state', () => {
        const store = createStore(CounterReducer);
        expect(store.getState()).toBe(0);
    });

    it('updates state correctly on dispatch', () => {
        const store = createStore(CounterReducer);
        store.dispatch({ type: 'increment' });
        expect(store.getState()).toBe(1);
        store.dispatch({ type: 'decrement' });
        expect(store.getState()).toBe(0);
    });

    // it('handles unknown actions by returning the current state', () => {
    //     const store = createStore(CounterReducer);
    //     store.dispatch({ type: 'unknown' });
    //     expect(store.getState()).toBe(0);
    // });

    it('notifies subscribers on state change', () => {
        const mockListener = jest.fn();
        const store = createStore(CounterReducer);

        store.subscribe(mockListener);
        store.dispatch({ type: 'increment' });
        expect(mockListener).toHaveBeenCalled();
    });

    it('does not notify unsubscribed listeners', () => {
        const mockListener = jest.fn();
        const store = createStore(CounterReducer);

        const unsubscribe = store.subscribe(mockListener);
        unsubscribe();
        store.dispatch({ type: 'increment' });
        expect(mockListener).not.toHaveBeenCalled();
    });
});
