import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { RatingComponent } from './components/rating/rating.component';
import { NgCeilPipeModule, NgFloorPipeModule } from 'angular-pipes';
import { LoaderComponent } from './components/loader/loader.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PageHeaderComponent } from './components/page-header/page-header.component';



@NgModule({
  declarations: [
    MessageComponent,
    RatingComponent,
    LoaderComponent,
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgCeilPipeModule,
    NgFloorPipeModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    MessageComponent,
    RatingComponent,
    LoaderComponent,
    PageHeaderComponent,
  ]
})
export class SharedModule { }
