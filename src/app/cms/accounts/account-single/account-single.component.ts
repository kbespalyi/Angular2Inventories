import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from '../../../shared/models/account';
import { AccountService } from '../../../shared/services/account.service';

@Component({
  templateUrl: './account-single.component.html'
})
export class AccountSingleComponent implements OnInit {
  account: Account;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AccountService
  ) {}

  ngOnInit() {
    // grab the id from the url
    let id = this.route.snapshot.params['id'];

    // use the accountservice to getAccount()
    this.service.getAccount(id)
      .subscribe(account => this.account = account);
  }

  /**
   * Delete an account
   */
  deleteAccount() {
    this.service.deleteAccount(this.account.id)
      .subscribe(data => {
        console.log('account was deleted');
        // route back to the accounts page
        this.router.navigate(['/admin/accounts']);
      });
  }

}
