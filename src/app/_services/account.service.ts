import { Injectable } from '@angular/core';
import { Movement } from '../_models/movement';
import { ApiService } from './api.service';
import { map, tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private apiService: ApiService
  ) { }

  obtenerMovimientos(cuentaId: string): Observable<Movement[]> {
    return this.apiService.putApi<any>('5e3b7e1330000055002145b2').pipe(
      map(e => e.movements),
      map(e => e.filter(j => j.cuentaId == cuentaId))
    );
  }
}
