import { Component, OnInit } from '@angular/core';
import { Account } from '../../../shared/models/account';
import { AccountService } from '../../../shared/services/account.service';

@Component({
  styles: [`
    .account-card { cursor: pointer; }
  `],
  templateUrl: './account-list.component.html'
})

export class AccountListComponent implements OnInit {
  accounts: Account[];

  constructor(private service: AccountService) { }

  ngOnInit() {
    this.service.getAccounts()
      .subscribe(accounts => this.accounts = accounts);
  }

}
