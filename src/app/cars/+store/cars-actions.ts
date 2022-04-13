import { createAction, props } from '@ngrx/store';
import { IAddComment, IComment } from 'src/app/shared/interfaces';
import { IAddCar, ICar, IUploadImage, IUploadImageSuccess } from '../interfaces/cars';

export const ActionTypes = {
  Cars: '[CARS] Cars',
  CarsSuccess: '[CARS] Cars Success',

  Car: '[CARS] Car',
  CarSuccess: '[CARS] Car Success',
  CarClear: '[CARS] Cars Clear',

  AddCar: '[CARS] Add Car',
  AddCarSuccess: '[CARS] Add Car Success',

  AddCarComment: '[CARS] Add Car Comments',
  AddCarCommentSuccess: '[CARS] Add Car Comments Success',

  CarComments: '[CARS] Car Comments',
  CarCommentsSuccess: '[CARS] Car Comments Success',

  DeleteCar: '[CARS] Delete Car',
  DeleteSuccess: '[CARS] Delete Car Success',

  UploadCarImage: '[CARS] Upload Image',
  UploadCarImageSuccess: '[CARS] Upload Image Success',
};

export const Cars = createAction(
  ActionTypes.Cars,
  props<{ data?: string }>()
);

export const CarsSuccess = createAction(
  ActionTypes.CarsSuccess,
  props<{ cars: ICar[], count: number }>()
);

export const Car = createAction(
  ActionTypes.Car,
  props<{ id: string }>()
);

export const CarSuccess = createAction(
  ActionTypes.CarSuccess,
  props<{ car: ICar }>()
);

export const CarClear = createAction(ActionTypes.CarClear);

export const AddCar = createAction(
  ActionTypes.AddCar,
  props<{ data: IAddCar }>()
);

export const AddCarSuccess = createAction(
  ActionTypes.AddCarSuccess,
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

export const DeleteCar = createAction(
  ActionTypes.DeleteCar,
  props<{ id: string }>()
);

export const DeleteSuccess = createAction(
  ActionTypes.DeleteSuccess,
  props<{ count: number, id: string }>()
);

export const UploadCarImage = createAction(
  ActionTypes.UploadCarImage,
  props<{ file: IUploadImage }>()
);

export const UploadCarImageSuccess = createAction(
  ActionTypes.UploadCarImageSuccess,
  props<{ file: IUploadImageSuccess }>()
);

