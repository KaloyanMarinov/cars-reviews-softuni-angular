import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Car, CarComments, CarCommentsSuccess, Cars, CarsSuccess, CarSuccess } from './cars-actions';
import { CarsService } from '../cars.service';
import { ActionFailed } from 'src/app/+store/app-actions';
import { forkJoin } from 'rxjs';
import { CommentsService } from 'src/app/shared/services/comments.service';

@Injectable()
export class CarsEffects {

  constructor(
    private actions$: Actions,
    private carsService: CarsService,
    private commentsService: CommentsService
  ) { }

  cars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Cars),
      switchMap(({ data }) =>
        forkJoin(
          this.carsService.getCarsCount(),
          this.carsService.getCars(data),
        ).pipe(
          map(([{ count }, cars]) => CarsSuccess({ count, cars })),
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      )
    )
  )

  car$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Car),
      switchMap(({ id }) =>
        forkJoin(
          this.carsService.getCar(id),
          this.commentsService.getCommentByPost(id),
        ).pipe(
          switchMap(([car, comments]) => [
            CarSuccess({ car }),
            CarCommentsSuccess({ comments })
          ]),
          catchError((err) => [ActionFailed({ error: err.error })])
        ),
      )
    )
  )

  carComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarComments),
      switchMap(({ id }) =>
        this.commentsService.getCommentByPost(id).pipe(
          map((comments) => CarCommentsSuccess({ comments })),
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      )
    )
  )
}
