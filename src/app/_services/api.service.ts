import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getSmartphone() {
    return this.http.put(this.urlApi, {});
  }
}
