import { RouterReducerState, } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../shared/interfaces';
import { Params } from '@angular/router';
import { RouterStateUrl } from '../app-router-serializer';

export const getRouterStore = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getRouterUrl = createSelector(getRouterStore,
  (routerState: RouterReducerState<RouterStateUrl>) => routerState ? routerState.state.url : ''
);

export const getRouterParams = createSelector(
  getRouterStore,
  (routerState: RouterReducerState<RouterStateUrl>) => routerState ? routerState.state.params : ''
);

export const getRouterQuery = createSelector(
  getRouterStore,
  (routerState: RouterReducerState<RouterStateUrl>) => routerState ? routerState.state.params : ''
);


export const getMessage = (state: IAppState) => state.message;

/* App Selectors */

export const getAppStore = createFeatureSelector<IAppState>('app');
export const getAppMessage = createSelector(getAppStore, getMessage);
