import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { take, map, filter } from 'rxjs/operators';
import { getCarsAll, getCarsByPage } from "../+store/cars-selectors";
import { Cars } from "../+store/cars-actions";
import { ICarsState } from "../interfaces";

@Injectable()
export class carsResolver implements Resolve<boolean> {
  constructor(private store: Store<ICarsState>) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const page: number = route.params['page'] ? parseInt(route.params['page']) : 1;
    let skip = (page - 1) * 6;

    if (page === 1) {
      skip = 0;
    }

    return this.store.pipe(
      select(getCarsByPage),
      map(result => {
        if (!result) {
          this.store.dispatch(Cars({ data: '?query={}&sort={"_kmd.ect": -1}&limit=6&skip=' + skip, page }));
        }
        return !!result?.cars;
      }),
      filter(result => result),
      take(1)
    );
  }
}
