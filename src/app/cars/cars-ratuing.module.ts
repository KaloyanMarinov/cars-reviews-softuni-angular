import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';
import { AuthGuard } from './guards/auth.guard';
import { carResolver } from './guards/car.resolver';
import { carsResolver } from './guards/cars.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CarsComponent,
    resolve: [
      carsResolver
    ]
  },
  {
    path: 'add',
    pathMatch: 'full',
    component: AddCarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: CarComponent,
    resolve: [
      carResolver
    ]
  },
  {
    path: ':id/edit',
    component: AddCarComponent,
    resolve: [
      carResolver
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
