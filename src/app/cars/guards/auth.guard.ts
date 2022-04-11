import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { isAdmin } from 'src/app/core/+store/auth/auth-selectors';
import { IAppState } from 'src/app/shared/interfaces';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.store.select(isAdmin).pipe(
      take(1),
      map((isAdmin) => {
        if (isAdmin) {
          return true;
        }

        return this.router.createUrlTree(['/auth/login']);
      })
    )
  }
}
