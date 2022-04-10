import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take, switchMap, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAppState } from 'src/app/shared/interfaces';
import { getAuthToken } from '../+store/auth/auth-selectors';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

	constructor(
		private store: Store<IAppState>,
    private router: Router,
  ) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getAuthToken).pipe(
      take(1),
      switchMap(token => {
        if ( req.url.endsWith(`user/${environment.appKey}`) || req.url.endsWith('login') ) {
          req = req.clone({
            url: `${environment.baseUrl}/${req.url}`,
            headers: req.headers.set('Authorization', `Basic ${btoa(`${environment.appKey}:${environment.appSecret}`)}`)
          });
        } else if (req.url.startsWith('user') ) {
          req = req.clone({
            url: `${environment.baseUrl}/${req.url}`,
            headers: req.headers.set('Authorization', `Kinvey ${token}`)
          });
        }

        return next.handle(req)
          .pipe(
            catchError((err: HttpErrorResponse) => {
              if (err.status === 401) {
                localStorage.removeItem('authToken');
                this.router.navigate(['/auth/login']);
              }
              return throwError(err);
            })
          );
		}));
	}
}
