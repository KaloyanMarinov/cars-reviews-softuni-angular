import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAppState } from 'src/app/shared/interfaces';
import { getAuthToken } from '../+store/auth/auth-selectors';

@Injectable()
export class CarsHttpInterceptor implements HttpInterceptor {

	constructor(private store: Store<IAppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getAuthToken).pipe(
      take(1),
      switchMap(token => {
        if (req.url.includes(`cars`)) {
          if (req.method === 'GET') {
            req = req.clone({
              url: `${environment.baseUrl}/${req.url}`,
              headers: req.headers.set('Authorization', 'Basic a2lkX0IxVDhVYjVYYzpmZjE3M2RiZmEwNDE0MTBiYTMwMDQzOWYxZGI2OTlhOA==')
            });
          } else {
            req = req.clone({
              url: `${environment.baseUrl}/${req.url}`,
              headers: req.headers.set('Authorization', `Kinvey ${token}`)
            });
          }
        }

        return next.handle(req);
		}));
	}
}
