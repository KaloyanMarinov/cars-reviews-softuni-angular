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
  cars: []
};

export const carsReducer = createReducer<ICarsState>(
  initialState,
  on(CarsSuccess, (state, { count, cars }) => ({ ...state, count, cars })),
  on(CarSuccess, (state, { car }) => ({ ...state, car})),
  on(CarClear, (state) => ({...state, car: initialState.car })),
  on(AddCarSuccess, (state, { car }) => ({...state, car, cars: []})),
  on(UpdateCarSuccess, (state, { car }) => ({
    ...state,
    car,
    cars: [...state.cars.map(item => (item._id === car._id) ? car: item)]
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
