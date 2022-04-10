import { Component, Input, OnInit } from '@angular/core';
import { CommentsResolver } from 'src/app/cars/gards/comments.resolver';
import { IComment } from '../../interfaces';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent implements OnInit {
  @Input() comments!: IComment[] | undefined;
  rating: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.comments?.length) {
      let ratingSum = 0;
      this.comments?.forEach(comment => ratingSum += comment.rating);
      this.rating = ratingSum / this.comments?.length;
    }
  }
}
