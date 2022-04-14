import { createFeatureSelector, createSelector } from '@ngrx/store';
import { of } from 'rxjs';
import { ICoreState } from '..';
import { IAuthState } from '../../auth/interfaces';

export const getToken = (state: ICoreState) => state.auth.authToken;
export const getUser = (state: ICoreState) => state.auth.user;

/* Auth Selectors */

export const getAuthStore = createFeatureSelector<ICoreState>('core');
export const getAuthUser = createSelector(getAuthStore, getUser);
export const getAuthToken = createSelector(getAuthStore, getToken);
export const getIsAuthenticated = createSelector(getAuthToken, token => !!token);
export const isAdmin = createSelector(getAuthUser, user => {
  if (user.roles) { return user.roles.includes('Admin')}
  return false;
});
