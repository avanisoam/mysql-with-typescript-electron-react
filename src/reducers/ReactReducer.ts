import * as action from '../actions';
import { createReducer, Reducer } from 'redux-act';

export interface ReactCounterState {
  reactCounter: number;
}
const initialState: ReactCounterState = {
  reactCounter: 0
};

export const reduce: Reducer<ReactCounterState> = createReducer<ReactCounterState>({}, initialState);

reduce.on(action.incrementReact, (state, _) => ({
  ...state,
  reactCounter: state.reactCounter + 1
}));

reduce.on(action.decrementReact, (state, _) => ({
  ...state,
  reactCounter: state.reactCounter - 1
}));