import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/componets/home/home.component';
import { AboutComponent } from './pages/componets/about/about.component';
import { ContactComponent } from './pages/componets/contact/contact.component';
import { AuthGuard } from './core/auth/auth.cuard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule),
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
