import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class PagesModule { }
