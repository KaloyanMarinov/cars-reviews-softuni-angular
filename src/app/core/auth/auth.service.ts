import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { IKMD } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';
import { SetToken } from '../+store/auth/auth-actions';
import { ILogin, IloginSuccess, IRegister, IRegisterSuccess, IUser } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_BASE_URL = `user/${environment.appKey}`;

  constructor(
    private http: HttpClient,
    private store: Store<IUser>
  ) { }

  login(data: ILogin): Observable<IloginSuccess> {
    return this.http.post<IloginSuccess>(`${this.AUTH_BASE_URL}/login`, data);
  }

  register(data: IRegister): Observable<IRegisterSuccess> {
    return this.http.post<IRegisterSuccess>(`${this.AUTH_BASE_URL}`, data);
  }

  me(): Observable<{ _id: string; username: string; _kmd?: IKMD }> {
   return this.http.get<{ _id: string; username: string; _kmd?: IKMD }>(`${this.AUTH_BASE_URL}/_me`);
  }

  logout(): Observable<{}> {
    return this.http.post(`${this.AUTH_BASE_URL}/_logout`, {});
   }

  authenticate(): Observable<any> {
    const authToken = localStorage.getItem('authToken') as string;
    if (authToken) {
      this.store.dispatch(SetToken({ authToken }));
    }
    return EMPTY;
  }
}
