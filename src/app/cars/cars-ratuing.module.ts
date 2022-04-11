import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarComponent } from './components/car/car.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { AuthGuard } from './guards/auth.guard';
import { carResolver } from './guards/car.resolver';
import { carsResolver } from './guards/cars.resolver';

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
    path: 'add',
    pathMatch: 'full',
    component: AddCarComponent,
    // canActivate: [AuthGuard]
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
