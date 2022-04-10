import { createAction, props } from '@ngrx/store';
import { IUser } from '../../auth/interfaces';

export const ActionTypes = {
  SetToken: '[AUTH] SetToken',
  AuthFailed: '[AUTH] Action Failed',

  Login: '[AUTH] Login',
  LoginSuccess: '[AUTH] Login Success',

  Profile: '[AUTH] Profile',
  ProfileSuccess: '[AUTH] Profile Success',

  Register: '[AUTH] Register',

  Logout: '[AUTH] Logout',
  LogoutSuccess: '[AUTH] Logout Success',
};

export const SetToken = createAction(
  ActionTypes.SetToken,
  props<{ authToken: string }>()
);

export const Login = createAction(
  ActionTypes.Login,
  props<{ username: string, password: string }>()
);

export const LoginSuccess = createAction(
  ActionTypes.LoginSuccess,
  props<{ authToken: string, user: IUser }>()
);

export const Profile = createAction(ActionTypes.Profile);

export const ProfileSuccess = createAction(
  ActionTypes.ProfileSuccess,
  props<{ user: IUser }>()
);

export const Register = createAction(
  ActionTypes.Register,
  props<{ username: string, password: string, firstname: string, lastname: string }>()
);

export const Logout = createAction(ActionTypes.Logout);
export const LogoutSuccess = createAction(ActionTypes.LogoutSuccess);
