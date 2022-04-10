import { CanLoad, Route, UrlSegment, Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { getIsAuthenticated } from '../+store/auth/auth-selectors';
import { select, Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { IAppState } from 'src/app/shared/interfaces/state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) {}

  canLoad(route: Route, segments: UrlSegment[]) {
    return this.store.pipe(
      select(getIsAuthenticated),
      map(logged => {
        const path = segments[1].path;
        if ((!logged && path !== 'profile') || (logged && path === 'profile')) {
          return true;
        }
        this.router.navigateByUrl('/');
        return false;
      }),
      take(1)
    );
  }
}
