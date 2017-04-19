import { Reducer, combineReducers } from 'redux';
import { ListState, ListReducer } from './list/list.reducer';
export * from './list/list.reducer';

export interface AppState {
  list: ListState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  list: ListReducer,
});

export default rootReducer;
