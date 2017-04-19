import { Action, ActionCreator } from 'redux';
import { List } from './list.model';

export interface DoSearchAction extends Action {
  payload: List;
}

export const doSearch: ActionCreator<DoSearchAction> = (selectedMuscle) => ({
  type: "DO_SEARCH",
  payload: selectedMuscle
})
