import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number | undefined;
  @Input() reviews: number | undefined;
  stars = Array(5).fill(0).map((_,i)=>i);
  constructor() { }

  ngOnInit(): void {
  }
}
