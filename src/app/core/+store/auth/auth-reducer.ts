import { createReducer, on } from '@ngrx/store';
import { IAuthState } from '../../auth/interfaces';
import {
  SetToken,
  Login,
  LoginSuccess,
  Profile,
  ProfileSuccess,
  Register,
  LogoutSuccess,
} from './auth-actions';

const initialState: IAuthState = {
  user: null,
  authToken: ''
};

export const authReducer = createReducer<IAuthState>(
  initialState,
  on(SetToken, (state, { authToken }) => ({ ...state, authToken })),
  on(Login, state => (state)),
  on(LoginSuccess, (state, { authToken, user }) => ({
    ...state,
    authToken,
    user,
  })),
  on(Profile, state => (state)),
  on(ProfileSuccess, (state, { user }) => ({
    ...state,
    user,
  })),
  on(Register, state => (state)),
  on(LogoutSuccess, () => ( initialState )),
);
