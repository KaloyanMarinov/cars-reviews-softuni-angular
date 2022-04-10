import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCarsAll } from '../../+store/cars-selectors';
import { ICar, ICarsState } from '../../interfaces';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  cars$!: Observable<ICar[] | null>;

  constructor(private store: Store<ICarsState>) { }
  ngOnInit(): void {
    this.cars$ = this.store.select(getCarsAll);
  }
}
