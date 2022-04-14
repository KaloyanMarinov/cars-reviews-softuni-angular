import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPageState } from '../interfaces';

export const getHome = (state: IPageState) => state.home;

/* Cars Selectors */
export const getPagesStore = createFeatureSelector<IPageState>('pages');
export const getHomeStore = createSelector(getPagesStore, getHome);
