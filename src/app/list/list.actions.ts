import { Action, ActionCreator } from 'redux';
import { List } from './list.model';

// this interface shouldn't be here. It should be in it's own file or in a file with other interfaces.
export interface DoSearchAction extends Action {
  payload: List;
}

export const doSearch: ActionCreator<DoSearchAction> = (selectedMuscle) => ({
  type: "DO_SEARCH",
  payload: selectedMuscle
})
