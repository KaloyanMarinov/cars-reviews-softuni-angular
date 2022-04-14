import { createAction, props } from '@ngrx/store';
import { ICar } from 'src/app/cars/interfaces';

export const ActionTypes = {
  TopRatingCars: '[HOME] Top Rating Cars',
  TopRatingCarsSuccess: '[HOME] Top Rating Success',

  LatestCars: '[HOME] Latest Cars',
  LatestCarsSuccess: '[HOME] Latest Cars Success',
};

export const TopRatingCars = createAction(ActionTypes.TopRatingCars);

export const TopRatingCarsSuccess = createAction(
  ActionTypes.TopRatingCarsSuccess,
  props<{ topRatingCars: ICar[] }>()
);

export const LatestCars = createAction(ActionTypes.LatestCars);

export const LatestCarsSuccess = createAction(
  ActionTypes.LatestCarsSuccess,
  props<{ latestCars: ICar[] }>()
);
