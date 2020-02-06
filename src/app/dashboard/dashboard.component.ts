import { Component, OnInit } from '@angular/core';
import { ClientService } from '../_services/client.service';
import { Account } from '../_models/account';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  accounts: Account[] = [];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientService.obtenerCuentas().subscribe((data: Account[]) => {
      data.sort((a: Account, b: Account) => {
        return b.valorDisponible - a.valorDisponible;
      })
      this.accounts = data;
    });
  }

}
