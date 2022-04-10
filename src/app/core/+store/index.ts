import { authReducer } from './auth/auth-reducer';
import { IAuthState } from '../auth/interfaces';
import { ActionReducerMap } from '@ngrx/store';

export interface ICoreState {
  auth: IAuthState,
}

export const coreReducers: ActionReducerMap<ICoreState> = {
  auth: authReducer,
};

// export const reducers = {
//   auth: authReducer,
//   header: headerReducer
// };
