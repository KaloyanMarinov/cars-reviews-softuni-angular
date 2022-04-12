import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { AddCarComment, AddCarCommentSuccess, Car, CarComments, CarCommentsSuccess, Cars, CarsSuccess, CarSuccess, UploadCarImage, UploadCarImageSuccess } from './cars-actions';
import { CarsService } from '../cars.service';
import { ActionFailed, ActionSuccess } from 'src/app/+store/app-actions';
import { combineLatest, forkJoin } from 'rxjs';
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
        combineLatest(
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
        combineLatest(
          this.carsService.getCar(id),
          this.commentsService.getCommentByPost(id),
        ).pipe(
          mergeMap(([car, comments]) => [
            CarSuccess({ car }),
            CarCommentsSuccess({ comments })
          ]),
          catchError((err) => [ActionFailed({ error: err.error })])
        ),
      )
    )
  )

  // uploadImage$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(UploadCarImage),
  //     switchMap(({file}) =>
  //       this.carsService.uploadImage(file).pipe(
  //         tap((file) => {
  //           this.carsService.googleDriveUploade(file).subscribe();
  //         }),
  //         map((file) => UploadCarImageSuccess({ file })),
  //         catchError((err) => [ActionFailed({ error: err.error })])
  //       )
  //     )
  //   )
  // );

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

  addComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddCarComment),
      switchMap(({ data }) =>
        this.commentsService.addComment(data).pipe(
          switchMap((comment) => [
            AddCarCommentSuccess({ comment }),
            ActionSuccess({ error: { description: 'Review added successfully.' } })
          ]),
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      )
    )
  )
}
