import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'my-accounts',
  templateUrl: './accounts.component.html'
})

export class AccountsComponent implements OnInit {
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: AccountService) {}

  ngOnInit() {
    // user has been created
    this.service.accountCreated$.subscribe(account => {
      this.successMessage = `${account.dealerName} has been created!`;
      this.clearMessages();
    });

    // user has been deleted
    this.service.accountDeleted$.subscribe(() => {
      this.successMessage = `The account has been deleted!`;
      this.clearMessages();
    });
  }

  /**
   * Clear all messages after 5 seconds
   */
  clearMessages() {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage   = '';
    }, 5000);
  }
}
