import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { } from 'rxjs/operators'
import { AccountService } from '../_services/account.service';
import { Movement } from '../_models/movement';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

  movements: Movement[] = [];

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.accountService.obtenerMovimientos(params.cuentaId).subscribe((data) => {
          data.sort((a: Movement, b: Movement) => {
            return this.getTime(b.fechaTransaccion) - this.getTime(a.fechaTransaccion);
          });
          this.movements = data;
        })
      });
  }

  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }

}
