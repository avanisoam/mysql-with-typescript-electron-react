import * as action from '../actions';
import { createReducer, Reducer } from 'redux-act';

export interface SimpleCounterState {
  simpleCounter: number;
}
const initialState: SimpleCounterState = {
  simpleCounter: 0
};

export const reduce: Reducer<SimpleCounterState> = createReducer<SimpleCounterState>({}, initialState);

reduce.on(action.incrementSimple, (state, _) => ({
  ...state,
  simpleCounter: state.simpleCounter + 1
}));

reduce.on(action.decrementSimple, (state, _) => ({
  ...state,
  simpleCounter: state.simpleCounter - 1
}));