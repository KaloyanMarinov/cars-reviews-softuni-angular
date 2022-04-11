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
  UserRoleSuccess,
} from './auth-actions';

const initialState: IAuthState = {
  user: {
    _id: '',
    username: '',
    roles: []
  },
  authToken: '',
};

export const authReducer = createReducer<IAuthState>(
  initialState,
  on(SetToken, (state, { authToken }) => ({ ...state, authToken })),
  on(UserRoleSuccess, (state, { role }) => ({
    ...state,
    user: {
      ...state.user,
      roles: [...(state.user.roles || []), role.name]
    }
  })),
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
