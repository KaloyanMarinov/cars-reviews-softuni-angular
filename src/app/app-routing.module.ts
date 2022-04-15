import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.cuard';
import { AboutComponent } from './pages/components/about/about.component';
import { ContactComponent } from './pages/components/contact/contact.component';
import { HomeComponent } from './pages/components/home/home.component';
import { NotFoundComponent } from './pages/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
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
    component: AboutComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'contacts',
    component: ContactComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
