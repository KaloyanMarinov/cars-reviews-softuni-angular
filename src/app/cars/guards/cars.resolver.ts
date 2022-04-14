import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { take, map, filter } from 'rxjs/operators';
import { getCarsAll } from "../+store/cars-selectors";
import { Cars } from "../+store/cars-actions";
import { ICarsState } from "../interfaces";

@Injectable()
export class carsResolver implements Resolve<boolean> {
  constructor(private store: Store<ICarsState>) { }

  resolve(): Observable<boolean> {
    return this.store.pipe(
      select(getCarsAll),
      map(cars => {
        if (!cars.length) {
          this.store.dispatch(Cars({ data: '?query={}&sort={"_kmd.ect": -1}' }));
        }
        return !!cars;
      }),
      filter(cars => cars),
      take(1)
    );
  }
}
