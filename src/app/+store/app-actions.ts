import { createAction, props } from '@ngrx/store';
import { IError } from '../shared/interfaces';

export const ActionTypes = {
  ActionFailed: '[APP] Action Failed',
  ActionSuccess: '[APP] Action Success',
  ClearMessage: '[APP] Clear Message',
};

export const ActionFailed = createAction(
  ActionTypes.ActionFailed,
  props < { error: IError }>()
);

export const ActionSuccess = createAction(
  ActionTypes.ActionSuccess,
  props < { error: IError }>()
);

export const ClearMessage = createAction(ActionTypes.ClearMessage);
