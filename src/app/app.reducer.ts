import { Reducer, combineReducers } from 'redux';

export interface AppState {
  list: ListState;
  selectedExercise: ExerciseState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  list: ListReducer,
  selectedExercise: ExerciseReducer
});

export default rootReducer;
