import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { AddCar, AddCarComment, AddCarCommentSuccess, AddCarSuccess, Car, CarComments, CarCommentsSuccess, Cars, CarsSuccess, CarSuccess, DeleteCar, DeleteCarComments, DeleteCarSuccess, UpdateCar, UpdateCarSuccess, UploadCarImage, UploadCarImageSuccess } from './cars-actions';
import { CarsService } from '../cars.service';
import { ActionFailed, ActionSuccess } from 'src/app/+store/app-actions';
import { combineLatest } from 'rxjs';
import { CommentsService } from 'src/app/shared/services/comments.service';
import { Router } from '@angular/router';

@Injectable()
export class CarsEffects {
  deleteCarID!: string;

  constructor(
    private actions$: Actions,
    private carsService: CarsService,
    private commentsService: CommentsService,
    private router: Router
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

  addCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddCar),
      switchMap(({ data }) =>
        this.carsService.addCar(data).pipe(
          switchMap((car) => [
            AddCarSuccess({ car }),
            ActionSuccess({ error: { description: 'Add car added successfully.' } }),
          ]),
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      ),
    )
  )

  addCarCusses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddCarSuccess),
      tap(({ car }) => setTimeout(() => {
        this.router.navigate(['/cars/', car._id])
      }, 1500))
    ), { dispatch: false }
  )

  updateCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateCar),
      switchMap(({ id, data }) =>
        this.carsService.updateCar(id, data).pipe(
          switchMap((car) => [
            UpdateCarSuccess({ car }),
            CarComments({id: car._id}),
            ActionSuccess({ error: { description: 'Add car added successfully.' } }),
          ]),
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      ),
    )
  )

  updateCarCusses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateCarSuccess),
      tap(({ car }) => setTimeout(() => {
        this.router.navigate(['/cars/', car._id])
      }, 1500))
    ), { dispatch: false }
  )

  deleteCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteCar),
      tap(({ id }) => this.deleteCarID = id),
      switchMap(({ id }) =>
        this.carsService.deleteCar(id).pipe(
          mergeMap(({ count }) => [
            DeleteCarSuccess({ count, id: this.deleteCarID }),
            DeleteCarComments({ id: this.deleteCarID }),
          ]),
          tap(() => ActionSuccess({ error: { description: `The car deleted successfully.` } })),
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      ),
    )
  )

  deleteCarSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteCarSuccess),
      tap(() => setTimeout(() => {
        this.router.navigate(['/'])
      }, 1500))
    ), { dispatch: false }
  )

  deleteCarComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteCarComments),
      switchMap(({ id }) =>
        this.commentsService.deleteCommentsByPost(id).pipe(
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      ),
    ), { dispatch: false }
  )

  uploadImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UploadCarImage),
      switchMap(({ file }) =>
        this.carsService.uploadImage(file).pipe(
          tap((file) => {
            this.carsService.googleDriveUploade(file).subscribe();
          }),
          map((file) => UploadCarImageSuccess({ file })),
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      )
    )
  );

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
