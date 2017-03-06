import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { User } from '../shared/models/user';
import { Account } from '../shared/models/account';

import { UserService } from '../shared/services/user.service';
import { AccountService } from '../shared/services/account.service';

import 'rxjs/add/observable/interval';

@Component({
  selector: 'dashboard-root',
  templateUrl: './custom-services.component.html',
  styleUrls: ['./custom-services.component.css']
})

export class CustomServicesComponent implements OnInit {

  title = 'Welcome to the Dashboard';

  accounts: Account[];
  users: User[];

  constructor(
    private userService: UserService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {

    this.userService
      .getUsers()
      .subscribe(users => this.users = users);

    this.accountService
      .getAccounts()
      .subscribe(accounts => this.accounts = accounts);
  }

}
