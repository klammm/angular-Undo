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
    const payload: List = (<ListActions.DoSearchAction>action).payload;
    switch (action.type) {
      case 'DO_SEARCH':
        return {
          currentList: payload
        }
      default:
        return state;
    }
  };
