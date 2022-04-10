import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Login, LoginSuccess, Logout, LogoutSuccess, ProfileSuccess, Register, SetToken } from './auth-actions';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Store } from '@ngrx/store';
import { IAuthState } from '../../auth/interfaces';
import { ActionFailed, ActionSuccess } from 'src/app/+store/app-actions';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<IAuthState>
  ) { }

  setToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SetToken),
      switchMap(() =>
        this.authService.me().pipe(
          map((user) => ProfileSuccess({ user })),
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      )
    )
  )

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Login),
      switchMap((data) =>
        this.authService.login(data).pipe(
          map(({ authToken, user }) => LoginSuccess({ authToken, user })),
          tap(({ authToken }) => {
            localStorage.setItem('authToken', authToken);
            this.router.navigate(['/']);
          }),
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      )
    )
  )

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Register),
      switchMap((data) =>
        this.authService.register({
          username: data.username,
          password: data.password,
          firstname: data.firstname,
          lastname: data.lastname
        }).pipe(
          map(() => ActionSuccess({ error: { description: 'Registration successful.' } })),
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      )
    )
  )

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Logout),
      switchMap((data) =>
        this.authService.logout().pipe(
          map(() => LogoutSuccess()),
          tap(() => {
            localStorage.clear();
            this.router.navigate(['/']);
          }),
          catchError((err) => [ActionFailed({ error: err.error })])
        )
      )
    )
  )
}
