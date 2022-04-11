import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CarClear } from '../../+store/cars-actions';
import { getCarsCar } from '../../+store/cars-selectors';
import { ICar, ICarsState } from '../../interfaces';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnDestroy {
  car$!: Observable<ICar>;
  constructor(private store: Store<ICarsState>) { }

  ngOnInit(): void {
    this.car$ = this.store.select(getCarsCar);
  }

  ngOnDestroy(): void {
    this.store.dispatch(CarClear());
  }
}
