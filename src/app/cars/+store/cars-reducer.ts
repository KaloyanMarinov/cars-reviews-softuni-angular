import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { ICarsState } from '../interfaces';
import { CarClear, CarCommentsSuccess, CarsSuccess, CarSuccess } from './cars-actions';

const initialState: ICarsState = {
  count: 0,
  car: {
    _id: '',
    brand: '',
    model: '',
    year: '',
    rating: 0,
    content: '',
    comments: [],
  },
  cars: []
};

export const carsReducer = createReducer<ICarsState>(
  initialState,
  on(CarsSuccess, (state, { cars }) => ({ ...state, cars })),
  on(CarSuccess, (state, { car }) => ({ ...state, car})),
  on(CarClear, (state) => ({...state, car: initialState.car })),
  on(CarCommentsSuccess, (state, { comments }) => ({
    ...state,
    car: {
      ...state.car,
      comments
    }
  })),
);
