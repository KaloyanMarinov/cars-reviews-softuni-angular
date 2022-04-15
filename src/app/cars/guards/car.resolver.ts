import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { take, map, filter } from 'rxjs/operators';
import { findCarByState, getCarsCar } from "../+store/cars-selectors";
import { Car, CarComments, CarSuccess } from "../+store/cars-actions";
import { ICarsState } from "../interfaces";

@Injectable()
export class carResolver implements Resolve<boolean> {
  reviewSubscription!: Subscription;

  constructor(private store: Store<ICarsState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const id: string = route.params['id'];

    return this.store.pipe(
      select(getCarsCar),
      map((review) => {
        if (!review || review._id !== id) {
          this.reviewSubscription = this.store.select(findCarByState).subscribe(car => {
            if (car) {
              this.store.dispatch(CarSuccess({ car }));
              if (!state.url.endsWith('edit')) {
                this.store.dispatch(CarComments({ id: car._id }));
              }
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
