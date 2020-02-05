import { Injectable } from '@angular/core';
import { Account } from '../_models/account';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  obtenerCuentas(): Account[] {
    return;
  }
}
