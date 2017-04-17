import { Action } from 'redux';
import { createSelector } from 'reselect';
import { Exercise } from './exercise.model';
// import * as ExerciseActions from './exercise.actions';

export interface ExerciseState {
  currentExercise?: string;
};

const initialState: ExerciseState = {
  currentExercise: null
};
