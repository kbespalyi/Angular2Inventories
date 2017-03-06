import { Component, OnInit } from '@angular/core';
import { Account } from '../../../shared/models/account';
import { AccountService } from '../../../shared/services/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './account-edit.component.html'
})

export class AccountEditComponent implements OnInit {
  account: Account;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private service: AccountService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // grab the account
    let id = this.route.snapshot.params['id'];
    this.service.getAccount(id).subscribe(account => this.account = account);
  }

  /**
   * Update the account
   */
  updateAccount() {
    this.successMessage = '';
    this.errorMessage   = '';

    this.service.updateAccount(this.account)
      .subscribe(
        account => {
          this.successMessage = 'Account was updated.';
          console.log('account was updated');
        },
        err => {
          this.errorMessage = err;
          console.error(err);
        }
      );
  }


}
