import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../../interfaces';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  @Input() comment!: IComment;
  constructor() { }

  ngOnInit(): void {
  }

}
