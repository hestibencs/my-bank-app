import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/_models/account';
import { AccountType } from 'src/app/account-type.enum';

@Component({
  selector: 'app-card-account',
  templateUrl: './card-account.component.html',
  styleUrls: ['./card-account.component.scss']
})
export class CardAccountComponent implements OnInit {

  @Input() account: Account;
  cuentaId: string;
  tipoCuenta: string;

  constructor() { }

  ngOnInit() {
    this.cuentaId = `* ${this.account.cuentaId.substr(this.account.cuentaId.length - 4)}`;
    this.tipoCuenta = AccountType[this.account.tipoCuenta];
  }

}
