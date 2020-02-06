import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { Account } from '../_models/account';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  putApi<T>(resource: string, params: any = null): Observable<T> {
    return this.http.put<T>(`${this.urlApi}/${resource}`, params);
  }
}
