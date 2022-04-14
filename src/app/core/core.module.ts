import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './+store/auth/auth-effects';
import { coreReducers } from './+store';
import { AuthService } from './auth/auth.service';
import { AppHttpInterceptor } from './interseptios/app-http-interseptor';
import { CarsHttpInterceptor } from './interseptios/cars-http-interseptor';
import { CommentsHttpInterceptor } from './interseptios/comments-http-interseptor';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    StoreModule.forFeature('core', coreReducers),
    EffectsModule.forFeature([
      AuthEffects,
    ]),
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => {
        return () => authService.authenticate();
      },
      deps: [AuthService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CarsHttpInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommentsHttpInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
