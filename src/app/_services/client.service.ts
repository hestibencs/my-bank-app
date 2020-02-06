import { Injectable } from '@angular/core';
import { Account } from '../_models/account';
import { InMemoryKeys } from '../in-memory-keys.enum';
import { ApiService } from './api.service';
import { map, tap } from 'rxjs/operators';
import { Client } from '../_models/client';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private apiService: ApiService
  ) { }

  obtenerCuentas(): Observable<Account[]> {
    let accounts: Account[] = JSON.parse(sessionStorage.getItem(InMemoryKeys.AccountsClient));
    if (!accounts) {
      return this.apiService.putApi<any>('5e3b69b22f00008f0556ca49').pipe(
        tap((e) => {
          const client: Client = {
            cedula: e.cedula,
            nombres: e.nombres,
            apellidos: e.apellidos
          }
          sessionStorage.setItem(InMemoryKeys.DataClient, JSON.stringify(client))
        }),
        map(e => e.accounts.filter(e => e.estado === 1) as Account[]),
        tap(e => sessionStorage.setItem(InMemoryKeys.AccountsClient, JSON.stringify(e)))
      );
    } else {
      return of(accounts);
    }
  }
}
