import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { ICar } from 'src/app/cars/interfaces';
import { LatestCars, TopRatingCars } from '../../+store/pages-actions';
import { getHomeStore } from '../../+store/pages-selectors';
import { IPageState } from '../../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  topCars!: Observable<ICar[]>;
  latestCars!: Observable<ICar[]>;

  constructor(private store: Store<IPageState>) { }

  ngOnInit(): void {
    this.sub = this.store.select(getHomeStore).subscribe((home) => {
      if (!home.topRatingCars.length) {
        this.store.dispatch(TopRatingCars());
      } else {
        this.topCars = of(home.topRatingCars);
      }

      if (!home.latestCars.length) {
        this.store.dispatch(LatestCars());
      } else {
        this.latestCars = of(home.latestCars);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
