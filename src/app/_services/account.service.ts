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
    return this.apiService.putApi<any>('5e3b92183000006c002145e8').pipe(
      map(e => e.movements as Movement[]),
      map(e => e.filter(j => j.cuentaId == cuentaId)),
      map((e) => {
        e.forEach(j => {
          j.fechaTransaccion = new Date(j.fechaTransaccion);
        })
        return e;
      })
    );
  }
}
