import * as constants from '../constants/';
import { createAction } from 'redux-act';
import { EmptyActionCreator } from 'redux-act/types';

export interface IncrementCounter {
  type: constants.INCREMENT_COUNTER;
}

export interface DecrementCounter {
  type: constants.DECREMENT_COUNTER;
}

export type CounterAction = IncrementCounter | DecrementCounter;

export function incrementCounter(): IncrementCounter {
  return {
    type: constants.INCREMENT_COUNTER
  };
}

export function decrementCounter(): DecrementCounter {
  return {
    type: constants.DECREMENT_COUNTER
  };
}

// ##### redux-act #####
export const incrementSimple: EmptyActionCreator = createAction(
  'Increment counter'
);

export const decrementSimple: EmptyActionCreator = createAction(
  'Decrement counter'
);

export const incrementReact: EmptyActionCreator = createAction(
  'Increment react counter'
);

export const decrementReact: EmptyActionCreator = createAction(
  'Decrement react counter'
);