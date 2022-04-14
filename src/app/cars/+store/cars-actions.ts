import { createAction, props } from '@ngrx/store';
import { IAddComment, IComment } from 'src/app/comments/interfaces';
import { IAddCar, ICar, IUploadImage, IUploadImageSuccess } from '../interfaces/cars';

export const ActionTypes = {
  Cars: '[CARS] Cars',
  CarsSuccess: '[CARS] Cars Success',

  Car: '[CARS] Car',
  CarSuccess: '[CARS] Car Success',
  CarClear: '[CARS] Car Clear',

  AddCar: '[CARS] Add Car',
  AddCarSuccess: '[CARS] Add Car Success',

  UpdateCar: '[CARS] Update Car',
  UpdateCarSuccess: '[CARS] Update Car Success',

  AddCarComment: '[CARS] Add Car Comments',
  AddCarCommentSuccess: '[CARS] Add Car Comments Success',

  CarComments: '[CARS] Car Comments',
  CarCommentsSuccess: '[CARS] Car Comments Success',

  DeleteCar: '[CARS] Delete Car',
  DeleteCarSuccess: '[CARS] Delete Car Success',

  DeleteCarComments: '[CARS] Delete Car Comments',

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

export const UpdateCar = createAction(
  ActionTypes.UpdateCar,
  props<{ id:string, data: IAddCar }>()
);

export const UpdateCarSuccess = createAction(
  ActionTypes.UpdateCarSuccess,
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

export const DeleteCarSuccess = createAction(
  ActionTypes.DeleteCarSuccess,
  props<{ count: number, id: string }>()
);

export const DeleteCarComments = createAction(
  ActionTypes.DeleteCarComments,
  props<{ id: string }>()
);

export const UploadCarImage = createAction(
  ActionTypes.UploadCarImage,
  props<{ file: IUploadImage }>()
);

export const UploadCarImageSuccess = createAction(
  ActionTypes.UploadCarImageSuccess,
  props<{ file: IUploadImageSuccess }>()
);

