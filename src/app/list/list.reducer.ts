import { Action } from 'redux';
import { List } from './list.model';
import * as ListActions from './list.actions';
import { createSelector } from 'reselect';

export interface ListState {
  currentList: List;
}

const initialState: ListState = {
  currentList: null
};

export const ListReducer =
  function(state: ListState = initialState, action: Action): ListState {
    switch (action.type) {
      case ListActions.SET_CURRENT_LIST;
      const list: List = (<ListActions.SetCurrentListAction>action).list;
        return {
          currentList: list
        };
      default:
        return state;
    }
  };
