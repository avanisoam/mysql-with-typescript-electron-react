import { ReducersMapObject } from 'redux';
import { NormalCounterState, reduce as normalReducer } from './NormalReducer';
import { SimpleCounterState, reduce as simpleReducer } from './SimpleReducer';
import { ReactCounterState, reduce as reactReducer } from './ReactReducer';

export interface RootState {
  simple: SimpleCounterState;
  normal: NormalCounterState;
  react: ReactCounterState;
}

const reducers: ReducersMapObject = {
  simple: simpleReducer,
  normal: normalReducer,
  react: reactReducer
} as any;

export { reducers };
