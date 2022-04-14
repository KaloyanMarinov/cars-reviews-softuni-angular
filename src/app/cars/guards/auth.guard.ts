import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { first, map, Observable, of, skipUntil, take, tap } from 'rxjs';
import { getAuthUser, getUser, isAdmin } from 'src/app/core/+store/auth/auth-selectors';
import { IAppState } from 'src/app/shared/interfaces';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.store.pipe(
      select(getAuthUser),
      tap((getAuthUser) => {
        if (getAuthUser._id === '' && !localStorage.getItem('authToken')) this.router.navigate(['/auth/login']);
      }),
      map((getAuthUser) => !!getAuthUser),
      skipUntil(
        this.store.pipe(select(isAdmin),
          first(isAdmin => isAdmin)
        )
      ),
      tap((isAdmin) => {
        if (!isAdmin) return this.router.navigate(['/auth/login']);
        return true;
      })
    );
  }
}
