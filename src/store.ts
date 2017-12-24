import { createStore, combineReducers, Store } from 'redux';
import { RootState, reducers } from './reducers';

export const store : Store<RootState> = createStore<RootState>(combineReducers<RootState>(reducers));
