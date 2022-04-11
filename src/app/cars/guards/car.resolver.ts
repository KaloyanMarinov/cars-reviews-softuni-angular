import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IRouterState } from 'src/app/shared/interfaces/state';
import { take, map, filter } from 'rxjs/operators';
import { findCarByState, getCarsCar } from "../+store/cars-selectors";
import { Car, CarComments, CarCommentsSuccess, CarSuccess } from "../+store/cars-actions";

@Injectable()
export class carResolver implements Resolve<boolean> {
  reviewSubscription!: Subscription;

  constructor(private store: Store<IRouterState>) { }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id: string = route.params['id'];

    return this.store.pipe(
      select(getCarsCar),
      map((review) => {
        if (!review || review._id !== id) {
          this.reviewSubscription = this.store.select(findCarByState(id)).subscribe(car => {
            if (car) {
              this.store.dispatch(CarSuccess({ car }));
              this.store.dispatch(CarComments({ id: car._id }));
            } else {
              this.store.dispatch(Car({ id }));
            }
          });
          this.reviewSubscription.unsubscribe();
        }
        return !!review;
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
