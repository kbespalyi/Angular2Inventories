import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../../shared/models/account';
import { AccountService } from '../../../shared/services/account.service';

@Component({
  templateUrl: './account-create.component.html'
})

export class AccountCreateComponent implements OnInit {
  account: Account = new Account();
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private service: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * Create a user
   */
  createAccount() {
    this.successMessage = '';
    this.errorMessage   = '';

    this.service.createAccount(this.account)
      .subscribe(account => {
        this.successMessage = 'Account was created!';
        console.log('account was created');

        // navigate back to the accounts page
        this.router.navigate(['/admin/accounts']);
      })
  }

}
