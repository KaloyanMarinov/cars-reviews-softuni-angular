import { routerNavigatedAction } from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';
import { IAppState } from '../shared/interfaces';
import { ActionFailed, ActionSuccess } from './app-actions';

const initialState: IAppState = {
  message: {
    type: null,
    messageText: null
  }
};

export const appReducer = createReducer<IAppState>(
  initialState,
  on(routerNavigatedAction, state => ({ ...state, message: initialState.message })),
  on(ActionFailed, (state, { error }) => ({
    ...state,
    message: {
      type: false,
      messageText: error.description
    }
  })),
  on(ActionSuccess, (state, { error }) => ({
    ...state,
    message: {
      type: true,
      messageText: error.description
    }
  })),
);
