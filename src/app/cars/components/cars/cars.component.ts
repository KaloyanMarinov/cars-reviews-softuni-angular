import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCarsAll } from '../../+store/cars-selectors';
import { ICar, ICarsState } from '../../interfaces';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars$!: Observable<ICar[]>;

  constructor(private store: Store<ICarsState>) { }
  ngOnInit(): void {
    this.cars$ = this.store.select(getCarsAll);
  }
}
