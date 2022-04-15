import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICar } from 'src/app/cars/interfaces';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [
        style({
          opacity: 0,
          transform: 'translateX(-10%)',
        }),
        stagger('300ms',
          animate('600ms ease-out',
            style({
              opacity: 1,
              transform: 'translateX(0)',
            })
          )
        )
      ],
      { optional: true }
    ),
  ])
]);

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  animations: [listAnimation]
})
export class CarsListComponent implements OnInit {
  @Input() cars!: Observable<ICar[] | undefined>;

  constructor() { }

  ngOnInit(): void { }
}
