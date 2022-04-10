import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { RatingComponent } from './components/rating/rating.component';
import { NgCeilPipeModule, NgFloorPipeModule, NgMathPipesModule } from 'angular-pipes';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { CommentsService } from './services/comments.service';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AbbrPipe } from './pipes/abbr.pipe';
import { PageHeaderComponent } from './components/page-header/page-header.component';



@NgModule({
  declarations: [
    MessageComponent,
    RatingComponent,
    AddCommentComponent,
    ListCommentsComponent,
    CommentItemComponent,
    LoaderComponent,
    AbbrPipe,
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgCeilPipeModule,
    NgFloorPipeModule,
    ReactiveFormsModule
  ],
  providers: [
    CommentsService,
  ],
  exports: [
    MessageComponent,
    RatingComponent,
    AddCommentComponent,
    ListCommentsComponent,
    CommentItemComponent,
    LoaderComponent,
    AbbrPipe,
    PageHeaderComponent,
  ]
})
export class SharedModule { }
