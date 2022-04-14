import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs';
import { ActionFailed } from 'src/app/+store/app-actions';
import { CarsService } from 'src/app/cars/services/cars.service';
import { LatestCars, LatestCarsSuccess, TopRatingCars, TopRatingCarsSuccess } from './pages-actions';


@Injectable()
export class PagesEffects {

  constructor(
    private actions$: Actions,
    private carsService: CarsService,
  ) { }

  topCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TopRatingCars),
      exhaustMap(() =>
        this.carsService.getCars('?query={}&sort={"rating": -1}&limit=3').pipe(
          map((topRatingCars) => TopRatingCarsSuccess({ topRatingCars })),
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      ),
    )
  );

  latestCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LatestCars),
      exhaustMap(() =>
        this.carsService.getCars('?query={}&sort={"_kmd.ect": -1}&limit=3').pipe(
          map((latestCars) => LatestCarsSuccess({ latestCars })),
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      ),
    )
  );
}
