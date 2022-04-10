import { createAction, props } from '@ngrx/store';
import { IAddComment, IComment } from 'src/app/shared/interfaces';
import { ICar } from '../interfaces/cars';

export const ActionTypes = {
  Cars: '[CARS] Cars',
  CarsSuccess: '[CARS] Cars Success',

  Car: '[CARS] Car',
  CarSuccess: '[CARS] Car Success',
  CarClear: '[CARS] Cars Clear',

  AddCarComment: '[CARS] Add Car Comments',
  AddCarCommentSuccess: '[CARS] Add Car Comments Success',

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

export const AddCarComment = createAction(
  ActionTypes.AddCarComment,
  props<{ data: IAddComment }>()
);

export const AddCarCommentSuccess = createAction(
  ActionTypes.AddCarCommentSuccess,
  props<{ comment: IComment }>()
);

export const CarComments = createAction(
  ActionTypes.CarComments,
  props<{ id: string }>()
);

export const CarCommentsSuccess = createAction(
  ActionTypes.CarCommentsSuccess,
  props<{ comments: IComment[] }>()
);


