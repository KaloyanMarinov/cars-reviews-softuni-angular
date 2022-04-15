import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of, Subscription, tap } from 'rxjs';
import { getCarsAll, getCarsByPage, getTotalCars } from '../../+store/cars-selectors';
import { ICar, ICarsState, IPagination } from '../../interfaces';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  cars$!: Observable<ICar[] | undefined>;
  currentPage: number = 1;
  totalPage: number = 0;

constructor(private store: Store<ICarsState>) {}

  ngOnInit(): void {
    this.sub = this.store.select(getCarsByPage).subscribe(result => this.cars$ = of(result?.cars));
    this.sub = this.store.select(getTotalCars).subscribe(totalCars => this.totalPage = Math.ceil(totalCars / 6));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
