import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './components/cars/cars.component';
import { CarsRoutingModule } from './cars-ratuing.module';
import { StoreModule } from '@ngrx/store';
import { carsReducer } from './+store/cars-reducer';
import { EffectsModule } from '@ngrx/effects';
import { CarsEffects } from './+store/cars-effects';
import { RouterModule } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { carResolver } from './guards/car.resolver';
import { carsResolver } from './guards/cars.resolver';
import { SharedModule } from '../shared/shared.module';
import { AddCarComponent } from './components/add-car/add-car.component';
import { AuthGuard } from './guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommentsModule } from '../comments/comments.module';
import { CarsService } from './services/cars.service';

@NgModule({
  declarations: [
    CarsComponent,
    CarComponent,
    AddCarComponent,
  ],
  imports: [
    StoreModule.forFeature('cars', carsReducer),
    EffectsModule.forFeature([
      CarsEffects,
    ]),
    CommonModule,
    ReactiveFormsModule,
    CarsRoutingModule,
    RouterModule,
    CommentsModule,
    SharedModule,
    CKEditorModule
  ],
  providers: [
    CarsService,
    CarsEffects,
    carsResolver,
    carResolver,
    AuthGuard
  ],
  exports: []
})
export class CarsModule { }
