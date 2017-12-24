
import * as action from '../actions';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/Index';

export interface NormalCounterState {
  normalCounter: number;
}

const initialState: NormalCounterState = {
  normalCounter: 0
};

export function reduce(
  state: NormalCounterState = initialState,
  action: action.CounterAction
): NormalCounterState {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, normalCounter: state.normalCounter + 1 };
    case DECREMENT_COUNTER:
      return { ...state, normalCounter: Math.max(1, state.normalCounter - 1) };
  }
  return state;
}