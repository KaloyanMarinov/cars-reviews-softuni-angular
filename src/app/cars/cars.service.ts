import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICar, IUploadImage, IUploadImageSuccess } from './interfaces';

@Injectable()
export class CarsService {
  private readonly CARS_BASE_URL = `appdata/${environment.appKey}/cars`;
  private readonly FILES_BASE_URL = `blob/${environment.appKey}`;

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

  uploadImage(file: IUploadImage): Observable<IUploadImageSuccess> {
    return this.http.post<IUploadImageSuccess>(this.FILES_BASE_URL, file);
  }

  googleDriveUploade(file: IUploadImageSuccess): Observable<any> {
    return this.http.put<Observable<any>>(file._uploadURL, {}, {
      headers: {
        'Content-Type': file.mimeType,
        'accept': 'text/plain, */*',
        'content-length': file.size.toString()
      }
    });
  }
}
