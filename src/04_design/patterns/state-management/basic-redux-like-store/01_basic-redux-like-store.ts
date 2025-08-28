import {
  Reducer,
  IStore,
  Dispatch,
  Subscribe,
} from "./01_basic-redux-like-store.d";

// Adjust the createStore function to use TypeScript
export const createStore = <State>(reducer: Reducer<State>): IStore<State> => {
  let state: State;
  let listeners: Array<() => void> = [];

  const getState = (): State => state;

  const dispatch: Dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe: Subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  // Dispatch an initial action to populate the state with the initial value
  // Assuming the reducer knows how to handle an initial/empty action to set initial state
  dispatch({ type: null } as any); // Type assertion as a workaround for initial dispatch

  return { getState, dispatch, subscribe };
};

// Define the CounterReducer with a more strict type for the state
export const CounterReducer: Reducer<number> = (prevState = 0, action) => {
  const actions = {
    increment: () => prevState + 1,
    decrement: () => prevState - 1,
  };
  return actions[action.type]?.() ?? prevState;
};
