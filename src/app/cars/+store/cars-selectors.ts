import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterParams } from 'src/app/+store/app-selectors';
import { ICar, ICarsState, IPagination } from '../interfaces';

export const getCount = (state: ICarsState) => state.count;
export const getCars = (state: ICarsState) => state.cars;
export const getPagination = (state: ICarsState) => state.pagination;
export const getCar = (state: ICarsState) => state.car;

/* Cars Selectors */
export const getCarsStore = createFeatureSelector<ICarsState>('cars');
export const getTotalCars = createSelector(getCarsStore, getCount);
export const getCarsAll = createSelector(getCarsStore, getCars);
export const getCarsPagination = createSelector(getCarsStore, getPagination);
export const getCarsCar = createSelector(getCarsStore, getCar);

export const findCarByState = createSelector(
  getCarsAll,
  getRouterParams,
  (cars: ICar[], params) => {
    return cars ? cars.find(car => {
      return params && params.hasOwnProperty('id') && car._id === params.id
    }) : null;
});

export const getCarsByPage = createSelector(
  getCarsPagination,
  getRouterParams,
  (p: IPagination[], params) => {
    return p ? p.find(item => (params && params.hasOwnProperty('page') && item.page == parseInt(params.page)) || (params && !params.hasOwnProperty('page') && item.page == 1)) : null
  }
);
