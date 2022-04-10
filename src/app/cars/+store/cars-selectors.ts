import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICar, ICarsState } from '../interfaces';

export const getCars = (state: ICarsState) => state.cars;
export const getCar = (state: ICarsState) => state.car;

/* Cars Selectors */
export const findCarByState = (id: any) => createSelector(getCarsAll, (cars: ICar[]) => {
  return cars ? cars.find(car => { return car._id === id }) : null;
});

export const getCarsStore = createFeatureSelector<ICarsState>('cars');
export const getCarsAll = createSelector(getCarsStore, getCars);
export const getCarsCar = createSelector(getCarsStore, getCar);
