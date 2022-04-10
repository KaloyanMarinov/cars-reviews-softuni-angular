import { Component, Input, OnInit } from '@angular/core';
import { ICar } from '../../interfaces';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit {
  @Input() car!: ICar;

  constructor() { }

  ngOnInit(): void {
  }
}

