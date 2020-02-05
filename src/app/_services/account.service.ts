import { Injectable } from '@angular/core';
import { Movement } from '../_models/movement';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  obtenerMovimientos(): Movement[] {
    return;
  }
}
