import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './componets/cars-list/cars-list.component';
import { CarsRoutingModule } from './cars-ratuing.module';
import { StoreModule } from '@ngrx/store';
import { carsReducer } from './+store/cars-reducer';
import { EffectsModule } from '@ngrx/effects';
import { CarsEffects } from './+store/cars-effects';
import { CarsService } from './cars.service';
import { CarItemComponent } from './componets/car-item/car-item.component';
import { RouterModule } from '@angular/router';
import { CarComponent } from './componets/car/car.component';
import { carResolver } from './gards/car.resolver';
import { carsResolver } from './gards/cars.resolver';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CarsListComponent,
    CarItemComponent,
    CarComponent
  ],
  imports: [
    StoreModule.forFeature('cars', carsReducer),
    EffectsModule.forFeature([
      CarsEffects,
    ]),
    CommonModule,
    CarsRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    CarsService,
    CarsEffects,
    carsResolver,
    carResolver
  ],
})
export class CarsModule { }
