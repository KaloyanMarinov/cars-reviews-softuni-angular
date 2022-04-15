import { createReducer, on } from '@ngrx/store';
import { ICarsState } from '../interfaces';
import { AddCarCommentSuccess, AddCarSuccess, CarClear, CarCommentsSuccess, CarsSuccess, CarSuccess, DeleteCarSuccess, UpdateCarSuccess } from './cars-actions';

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
  cars: [],
  pagination: []
};

export const carsReducer = createReducer<ICarsState>(
  initialState,
  on(CarsSuccess, (state, { count, cars, page }) => ({
    ...state, count,
    cars: state.cars.concat(cars),
    pagination: [...state.pagination, {cars, page}]
  })),
  on(CarSuccess, (state, { car }) => ({ ...state, car})),
  on(CarClear, (state) => ({...state, car: initialState.car })),
  on(AddCarSuccess, (state, { car }) => ({...state, car, cars: []})),
  on(UpdateCarSuccess, (state, { car }) => ({
    ...state,
    car,
    cars: [],
    pagination: []
  })),
  on(DeleteCarSuccess, (state, { count, id }) => ({
    ...state,
    count: state.count - count,
    cars: [],
    pagination: []
  })),
  on(CarCommentsSuccess, (state, { comments }) => ({
    ...state,
    car: {
      ...state.car,
      comments
    }
  })),
  on(AddCarCommentSuccess, (state, { comment }) => ({
    ...state,
    car: {
      ...state.car,
      comments: [...state.car.comments, comment]
    }
  }))
);
