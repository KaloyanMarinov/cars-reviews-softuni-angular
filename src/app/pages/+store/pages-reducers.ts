import { createReducer, on } from '@ngrx/store';
import { IPageState } from '../interfaces';
import { LatestCarsSuccess, TopRatingCarsSuccess } from './pages-actions';

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
);
