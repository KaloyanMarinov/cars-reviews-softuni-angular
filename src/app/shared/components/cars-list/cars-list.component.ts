import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICar } from 'src/app/cars/interfaces';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  @Input() cars!: Observable<ICar[] | undefined>;

  constructor() { }

  ngOnInit(): void { }
}
