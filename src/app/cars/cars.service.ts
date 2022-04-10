import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICar } from './interfaces';

@Injectable()
export class CarsService {
  private readonly CARS_BASE_URL = `appdata/${environment.appKey}/cars`;

  constructor(private http: HttpClient) { }

  getCarsCount(): Observable<{count: number}> {
    return this.http.get<{count: number}>(`${this.CARS_BASE_URL}/_count`);
  }

  getCars(data = ''): Observable<ICar[]> {
    return this.http.get<ICar[]>(`${this.CARS_BASE_URL}${data}`);
  }

  getCar(id: string): Observable<ICar> {
    return this.http.get<ICar>(`${this.CARS_BASE_URL}/${id}`);
  }
}
