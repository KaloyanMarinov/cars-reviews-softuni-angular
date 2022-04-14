import { createReducer, on } from '@ngrx/store';
import { AddCarSuccess, DeleteCarSuccess, UpdateCarSuccess } from 'src/app/cars/+store/cars-actions';
import { IPageState } from '../interfaces';
import { LatestCarsSuccess, TopRatingCars, TopRatingCarsSuccess } from './pages-actions';

const initialState: IPageState = {
  home: {
    topRatingCars: [],
    latestCars: []
  }
};

export const pagesReducer = createReducer<IPageState>(
  initialState,
  on(TopRatingCarsSuccess, (state, { topRatingCars }) => ({
    ...state,
    home: { ...state.home, topRatingCars }
  })),
  on(LatestCarsSuccess, (state, { latestCars }) => ({
    ...state,
    home: { ...state.home, latestCars }
  })),
  on(UpdateCarSuccess, (state) => ({
    ...state,
    home: { ...state.home, topRatingCars: [] }
  })),
  on(AddCarSuccess, (state, { car }) => ({
    ...state,
    home: {
      ...state.home,
      latestCars: [
        ...state.home.latestCars.slice(state.home.latestCars.length),
        car,
        ...state.home.latestCars.slice(0, state.home.latestCars.length - 1)
      ]
    }
  })),
  on(DeleteCarSuccess, (state) => ({
    ...state,
    home: {...state.home, latestCars: []}
  })),
);
