import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { AbbrPipe } from './pipes/abbr.pipe';
import { CommentsService } from './services/comments.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListCommentsComponent,
    CommentItemComponent,
    AddCommentComponent,
    AbbrPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    CommentsService
  ],
  exports: [
    ListCommentsComponent,
    AddCommentComponent,
    AbbrPipe
  ]
})
export class CommentsModule { }
