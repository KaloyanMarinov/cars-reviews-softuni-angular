import { createAction, props } from '@ngrx/store';
import { IComment } from 'src/app/shared/interfaces';
import { ICar } from '../interfaces/cars';

export const ActionTypes = {
  Cars: '[CARS] Cars',
  CarsSuccess: '[CARS] Cars Success',

  Car: '[CARS] Car',
  CarSuccess: '[CARS] Car Success',
  CarClear: '[CARS] Cars Clear',

  CarComments: '[CARS] Car Comments',
  CarCommentsSuccess: '[CARS] Car Comments Cussess',
};

export const Cars = createAction(
  ActionTypes.Cars,
  props<{ data?: string }>()
);

export const CarsSuccess = createAction(
  ActionTypes.CarsSuccess,
  props<{ cars: ICar[], count: number }>()
);

export const CarClear = createAction(ActionTypes.CarClear);

export const Car = createAction(
  ActionTypes.Car,
  props<{ id: string }>()
);

export const CarSuccess = createAction(
  ActionTypes.CarSuccess,
  props<{ car: ICar }>()
);

export const CarComments = createAction(
  ActionTypes.CarComments,
  props<{ id: string }>()
);

export const CarCommentsSuccess = createAction(
  ActionTypes.CarCommentsSuccess,
  props<{ comments: IComment[] }>()
);


