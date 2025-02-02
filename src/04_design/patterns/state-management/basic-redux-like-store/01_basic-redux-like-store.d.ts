export type Action = {
  type: 'increment' | 'decrement';
};

// Define the Reducer function type
 export type Reducer<State> = (prevState: State, action: Action) => State;

// Define the Store type for better type checking
 export interface IStore<State> {
  getState: () => State;
  dispatch: (action: Action) => void;
  subscribe: (listener: () => void) => () => void;
}

export type Dispatch = (action: Action) => void;
export type Subscribe = (listener: () => void) => () => void;