import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { pagesReducer } from './+store/pages-reducers';
import { PagesEffects } from './+store/pages-effects';
import { PagesRoutingModule } from './pages-ratuing.module';
import { CarsService } from '../cars/services/cars.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    StoreModule.forFeature('pages', pagesReducer),
    EffectsModule.forFeature([
      PagesEffects,
    ]),
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    CarsService
  ]
})
export class PagesModule { }
