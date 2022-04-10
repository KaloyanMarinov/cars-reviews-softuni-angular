import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './componets/car/car.component';
import { CarsListComponent } from './componets/cars-list/cars-list.component';
import { carResolver } from './gards/car.resolver';
import { carsResolver } from './gards/cars.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CarsListComponent,
    resolve: [
      carsResolver
    ]
  },
  {
    path: ':id',
    component: CarComponent,
    resolve: [
      carResolver
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
