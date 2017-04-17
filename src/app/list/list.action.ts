import { Action, ActionCreator } from 'redux';
import { List } from './list.model';

export const SET_CURRENT_LIST = '[List] Set Current';

export interface SetCurrentListAction extends Action {
  list: List;
}

export const setCurrentList: ActionCreator<SetCurrentListAction> =
  (user) => ({
    type: SET_CURRENT_LIST,
    list: list
  });
