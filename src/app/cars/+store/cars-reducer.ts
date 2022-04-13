import { createReducer, on } from '@ngrx/store';
import { ICarsState } from '../interfaces';
import { AddCarCommentSuccess, AddCarSuccess, CarClear, CarCommentsSuccess, CarsSuccess, CarSuccess, DeleteCarSuccess } from './cars-actions';

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
  on(CarsSuccess, (state, { count, cars }) => ({ ...state, count, cars })),
  on(CarSuccess, (state, { car }) => ({ ...state, car})),
  on(CarClear, (state) => ({...state, car: initialState.car })),
  on(AddCarSuccess, (state, { car }) => ({
    ...state,
    cars: [...state.cars, car]
  })),
  on(DeleteCarSuccess, (state, { count, id }) => ({
    ...state,
    count: state.count - count,
    cars: [...state.cars.filter(car => car._id !== id)]
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
